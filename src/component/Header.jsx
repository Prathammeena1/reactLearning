import React, { useContext } from 'react'
import { datacontext } from './DataContext'


const Header = () => {
    const [data, setdata] = useContext(datacontext)
    return (
        <div>{`${data} in header`}</div>
    )
}

export default Header