import doctorModel from "../models/doctorModel.js";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import appointmentModel from "../models/appointmentModel.js";

const changeAvailability = async (req, res) => {
    try {
        const { docId } = req.body;
        const docdata = await doctorModel.findById(docId);
        if (!docdata) {
            return res.json({ success: false, message: "Doctor not found" });
        }

        await doctorModel.findByIdAndUpdate(docId, { available: !docdata.available });
        res.json({ success: true, message: "Availability Changed" });
    } catch (error) {
        console.error(error);
        res.json({ success: false, message: error.message });
    }
};

const doctorList = async (req, res) => {
    try {
        const doctors = await doctorModel.find({}).select(['-password', '-email']);
        res.json({success: true, doctors});
    } catch (error) {
        console.error(error);
        res.json({ success: false, message: error.message })
    }
}

// API for doctor login
const loginDoctor = async (req, res) => {
    try {
        const {email, password} = req.body
        const doctor = await doctorModel.findOne({email})
        if (!doctor) {
            return res.json({success: false, message: "Invalid Credentials"})
        }
        const isMatch = await bcrypt.compare(password, doctor.password)

        if (isMatch) {
            const token = jwt.sign({id: doctor._id}, process.env.JWT_SECRET);
            res.json({success: true, token});
        }
        else {
            res.json({success: false, message: "Invalid Credentails"});
        }
    } catch (error) {
        console.error(error);
        res.json({ success: false, message: error.message })
    }
}

// API to get appointments of a doctor for doctor panel
const appointmentsDoctor = async (req, res) => {
    try {
        const docId = req.docId
        const appointments = await appointmentModel.find({docId: req.docId})
        res.json({success: true, appointments})

    } catch (error) {
        console.error(error);
        res.json({ success: false, message: error.message })
    }
}

// API to mark appointment completed by doctor
const appointmentComplete = async (req, res) => {
    try {
        const {appointmentId} = req.body
        const docId = req.docId;
        const appointmentData = await appointmentModel.findById(appointmentId)

        if (appointmentData && appointmentData.docId === docId) {
            await appointmentModel.findByIdAndUpdate(appointmentId, {isCompleted: true})
            return res.json({success: true, message: "Appointment Completed"})
        }
        else {
            // console.log(data.message)
            return res.json({success: false, message: "Mark Failed"})
        }
    } catch (error) {
        console.error(error);
        res.json({ success: false, message: error.message })
    }
}

// API to cancel appointment by doctor
const appointmentCancel = async (req, res) => {
    try {
        const {appointmentId} = req.body
        const docId = req.docId;
        const appointmentData = await appointmentModel.findById(appointmentId)

        if (appointmentData && appointmentData.docId === docId) {
            await appointmentModel.findByIdAndUpdate(appointmentId, {cancelled: true})
            return res.json({success: true, message: "Appointment Cancelled"})
        }
        else {
            // console.log(data.message)
            return res.json({success: false, message: "Cancellation Failed"})
        }
    } catch (error) {
        console.error(error);
        res.json({ success: false, message: error.message })
    }
}

// API to get doctors data for doctor panel
const doctorDashboard = async (req, res) => {
    try {
        const docId = req.docId
        const appointments = await appointmentModel.find({docId})
        let earnings = 0
        appointments.map((item) => {
            if (item.isCompleted || item.payment) {
                earnings += item.amount
            }
        })
        let patients = []
        appointments.map((item) => {
            if (!patients.includes(item.userId)) {
                patients.push(item.userId) 
            }
        })

        const dashData = {
            earnings,
            appointments: appointments.length,
            patients: patients.length,
            latestAppointments: appointments.reverse().splice(0,5)
        }

        res.json({success: true, dashData})
    } catch (error) {
      console.error(error);
        res.json({ success: false, message: error.message }) 
    }
}



export { changeAvailability, doctorList, loginDoctor, appointmentsDoctor, appointmentCancel, appointmentComplete, doctorDashboard };
