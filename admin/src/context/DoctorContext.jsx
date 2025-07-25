import { useState } from "react";
import { createContext } from "react";
import axios from 'axios'
import {toast} from 'react-toastify'

export const DoctorContext = createContext()

const DoctorContextProvider = (props) => {
    const backendURL = import.meta.env.VITE_BACKEND_URL
    const [dToken, setDToken] = useState(localStorage.getItem('dToken')? localStorage.getItem('dToken'): '')

    const [appointments, setAppointments] = useState([])

    const [dashData, setDashData] = useState([])

    const getAppointments = async () => {
        try {
            const {data} = await axios.get(backendURL + '/api/doctor/appointments', {headers: { dtoken: dToken }})

            if (data.success) {
                setAppointments(data.appointments.reverse())
                console.log(data.appointments.reverse())
            }
            else {
                toast.error(data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    }

    const completeAppointment = async (appointmentId) => {
        try {
            const {data} = await axios.post(backendURL + '/api/doctor/appointment-complete', {appointmentId}, {headers: { dtoken: dToken }})
            if (data.success) {
                toast.success(data.message)
                getAppointments();
            }
            else {
                // console.log(data.message);
                toast.error(data.message)
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    }

    const cancelAppointment = async (appointmentId) => {
        try {
            const {data} = await axios.post(backendURL + '/api/doctor/appointment-cancel', {appointmentId}, {headers: { dtoken: dToken }})
            if (data.success) {
                toast.success(data.message)
                getAppointments();
            }
            else {
                toast.error(data.message)
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    }

    const getDashData = async () => {
        try {
            const {data} = await axios.get(backendURL + '/api/doctor/dashboard', {headers: { dtoken: dToken }})
            if (data.success) {
                setDashData(data.dashData)
                console.log(data.dashData)
            }
            else {
                toast.error(data.message)
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    }

    const value = {
        dToken, setDToken, backendURL, appointments, getAppointments, setAppointments, completeAppointment, cancelAppointment, dashData, setDashData, getDashData
    }

    return (
        <DoctorContext.Provider value={value}>
            {props.children}
        </DoctorContext.Provider>
    )
}


export default DoctorContextProvider