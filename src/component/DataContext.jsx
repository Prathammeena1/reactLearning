import React, { createContext } from 'react'
import { useState } from 'react'
export const datacontext = createContext(null)


const DataContext = ({children}) => {
    const [query, setquery] = useState("random");
    const [images, setimages] = useState([]);

    return (
        <datacontext.Provider value={{query, setquery,images,setimages}}>
            {children}
        </datacontext.Provider>
    )
}

export default DataContext