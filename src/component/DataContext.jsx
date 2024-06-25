import React, { createContext } from 'react'
import { useState } from 'react'
export const datacontext = createContext(null)


const DataContext = ({children}) => {
    const [data, setdata] = useState('some data context')

    return (
        <datacontext.Provider value={[data, setdata]}>
            {children}
        </datacontext.Provider>
    )
}

export default DataContext