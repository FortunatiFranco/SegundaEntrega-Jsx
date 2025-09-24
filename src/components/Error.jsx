import React from "react";
import { Link } from "react-router-dom";

const Error = ()=>{
    return (
        <div>
            <h3>La ruta no existe capo, me mataste</h3>
            <Link className="btn btn-dark" to='/'>Volver al home</Link>
        </div>
    )
}

export default Error