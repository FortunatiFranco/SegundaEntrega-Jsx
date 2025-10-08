import React from 'react'
import { Spinner } from 'react-bootstrap'

const Loader = () => {
    return (
    <div style={{width:'100%', height:'85vh', display:'flex', justifyContent:'center', alignItems:'center'}}>
        <Spinner animation="border" variant="info" />
    </div>
)
}

export default Loader