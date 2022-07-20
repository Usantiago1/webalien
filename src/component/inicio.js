
import React from "react";
import {Button} from 'primereact/button';
import { useNavigate } from "react-router-dom";

import Footer from "./footer";

const Inicio = () => {
    return(
        <>
        <div className="card">
            <div className="card-body">
                <div className="card-header">
                   <h1 className="text-center fst-italic">Inicio</h1> 
                </div>
            </div>

        </div>

        <Footer/>

        </>
    )
}
export default Inicio;