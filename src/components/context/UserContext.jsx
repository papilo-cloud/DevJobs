import React, { useContext, useState } from "react";
import datas from '../../data.json'

export const GlobalContext = React.createContext()

export const GlobalProvider = ({children}) => {
    const [data, setData] = useState(datas)

    // window.addEventListener('scroll', () =>{
    //     scrolling()
    // })
    // document.addEventListener('DOMContentLoaded',scrolling)

    // function scrolling(){

    // }
    // Helper function
    

    return(
        <GlobalContext.Provider value={{
            data
        }}>
            {children}
        </GlobalContext.Provider>
    )
}