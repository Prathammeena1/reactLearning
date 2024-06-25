import React, { createContext } from 'react'
import { useState } from 'react'
export const datacontext = createContext(null)


const DataContext = ({children}) => {
    const [query, setquery] = useState("nature");

    return (
        <datacontext.Provider value={{query, setquery}}>
            {children}
        </datacontext.Provider>
    )
}

export default DataContext