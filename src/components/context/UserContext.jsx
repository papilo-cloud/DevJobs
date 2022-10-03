import React, { useContext, useState } from "react";
import datas from '../../data.json'

export const GlobalContext = React.createContext()

export const GlobalProvider = ({children}) => {
    const [data, setData] = useState(datas)
    const [theme, setTheme] = useState(false)
    const [contract, setContract] = useState('')
    const [query, setQuery] = useState('')
    const [location, setLocation] = useState('')

    const keys = ['position','company']

    const Filters = () =>{
        return data.filter(item => keys.some(key => item[key].toLowerCase().includes(query))  && item.location.toLowerCase().includes(location) && item.contract.includes(contract))
    }
  
    return(
        <GlobalContext.Provider value={{
            data,
            theme,
            setTheme,
            Filters,
            query,
            setQuery, 
            setLocation,
            setContract,
            contract
        }}>
            {children}
        </GlobalContext.Provider>
    )
}