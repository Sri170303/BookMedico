import doctorModel from "../models/doctorModel.js";

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

export { changeAvailability, doctorList };
