import { createContext } from "react";
import { doctors } from "../assets/assets";
import App from "../App";
export const AppContext = createContext();

const AppContextProvider = (props) => {
    const currency = "\u20B9";
    const value = {
        doctors,
        currency
    }
    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;