import { createContext, useState } from "react";
import axios, { getAdapter } from 'axios'
import {toast} from 'react-toastify'

export const AdminContext = createContext()

const AdminContextProvider = (props) => {

    const [aToken, setAToken] = useState(localStorage.getItem('aToken')? localStorage.getItem('aToken'): '')

    // console.log(`adminContext: ${aToken}`);

    const [doctors, setDoctors] = useState([]);

    const backendURL = import.meta.env.VITE_BACKEND_URL

    const getAllDoctors = async () => {
        try {
            const {data} = await axios.post(backendURL + '/api/admin/all-doctors', {}, {headers: {aToken: aToken}});
            if (data.success) {
                setDoctors(data.doctors);
                console.log(data.doctors);
            }
            else {
                toast.error(data.message);
            }
        } catch (error) {
            toast.error(error.message);
        }
    }

    const changeAvailability = async (docId) => {
        try {
            const {data} = await axios.post(backendURL + '/api/admin/change-availabilty', {docId}, {headers: {aToken: aToken}});
            if (data.success) {
                toast.success(data.message);
                getAllDoctors();
            }
            else {
                toast.error(data.message);
            }
        } catch (error) {
            toast.error(error.message);
        }
    }

    const value = {
        aToken, setAToken,
        backendURL, doctors,
        getAllDoctors, changeAvailability
    }

    return (
        <AdminContext.Provider value={value}>
            {props.children}
        </AdminContext.Provider>
    )
}


export default AdminContextProvider