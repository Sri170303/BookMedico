import { createContext, useEffect, useState } from "react";
// import { doctors } from "../assets/assets";
import App from "../App";
import {toast} from 'react-toastify';

import axios from 'axios';
import { useActionState } from "react";

export const AppContext = createContext();


const AppContextProvider = (props) => {
    const currency = "\u20B9";
    const backendURL = import.meta.env.VITE_BACKEND_URL;

    const [doctors, setDoctors] = useState([]);
    const [token, setToken] = useState(localStorage.getItem('userToken') ? localStorage.getItem('userToken') : false);
    const [userData, setUserData] = useState(false);


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

    const loadUserData = async () => {
        try {
            const {data} = await axios.get(backendURL + '/api/user/get-profile', {headers: {token}});
            if (data.success) {
                setUserData(data.userData);
                console.log(data.userData);
            }
            else {
                toast.error(data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    }

    const value = {
        doctors,
        currency, 
        token,
        setToken, 
        backendURL,
        userData,
        setUserData,
        loadUserData
    }

    useEffect(() => {
        getDoctorsData();
    }, [])

    useEffect(() => {
        if (token) {
            loadUserData();
        }
        else {
            setUserData(false);
        } 
    }, [token])

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;