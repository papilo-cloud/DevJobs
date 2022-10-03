import React, { useContext, useState } from "react";
import datas from '../../data.json'

export const GlobalContext = React.createContext()

export const GlobalProvider = ({children}) => {
    const [data, setData] = useState(datas)
    const [theme, setTheme] = useState(false)
    const [srch, setSearch] = useState(false)
    const [query, setQuery] = useState('')
    const [location, setLocation] = useState('')
    console.log(data.filter(x => x.contract == 'Full Time'))

    console.log(srch)


    const keys = ['position','company']

    const Filter = () =>{
        if(srch){
            return data.filter(item => keys.some(key => item[key].toLowerCase().includes(query))  && item.location.toLowerCase().includes(location) && item.contract == 'Full Time')
        }
        return data.filter(item => keys.some(key => item[key].toLowerCase().includes(query))  && item.location.toLowerCase().includes(location) )
    }

    return(
        <GlobalContext.Provider value={{
            data,
            theme,
            setTheme,
            Filter,
            query,
            setQuery, 
            setLocation,
            setSearch,
            srch
        }}>
            {children}
        </GlobalContext.Provider>
    )
}