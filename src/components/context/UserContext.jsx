import React, { useContext, useState } from "react";
import datas from '../../data.json'

export const GlobalContext = React.createContext()

export const GlobalProvider = ({children}) => {
    const [data, setData] = useState(datas)
    console.log(data);
    return(
        <GlobalContext.Provider value={{
            data
        }}>
            {children}
        </GlobalContext.Provider>
    )
}