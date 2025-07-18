import { createContext, useEffect, useState } from "react";
// import { doctors } from "../assets/assets";
import App from "../App";
import {toast} from 'react-toastify';

import axios from 'axios';

export const AppContext = createContext();


const AppContextProvider = (props) => {
    const currency = "\u20B9";
    const backendURL = import.meta.env.VITE_BACKEND_URL;

    const [doctors, setDoctors] = useState([]);

    const value = {
        doctors,
        currency
    }

    const getDoctorsData = async () => {
        try {
            const {data} = await axios.get(backendURL + '/api/doctor/list');
            if (data.success) {
                setDoctors(data.doctors);
                console.log(data.doctors);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    }

    useEffect(() => {
        getDoctorsData();
    }, [])
    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;