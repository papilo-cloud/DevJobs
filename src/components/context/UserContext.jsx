import React, { useContext, useState } from "react";
import datas from '../../data.json'

export const GlobalContext = React.createContext()

export const GlobalProvider = ({children}) => {
    const [data, setData] = useState(datas)
    const [theme, setTheme] = useState(false)
    
    return(
        <GlobalContext.Provider value={{
            data,
            theme,
            setTheme
        }}>
            {children}
        </GlobalContext.Provider>
    )
}