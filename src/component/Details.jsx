import React from 'react'
import { useParams } from 'react-router-dom'

const Details = () => {
    const params = useParams()
    return (
        <>
        <div>Details</div>
        <h1 className='text-3xl'>{params.id}</h1>
        <hr />
        </>

    )
}

export default Details