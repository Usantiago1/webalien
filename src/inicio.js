
import React from "react";
import {Button} from 'primereact/button';
import { useNavigate } from "react-router-dom";

const Inicio = () => {


    const navigate = useNavigate();


    const navigation = () => {
        navigate('/EndPoint');
    }

    return(
        <>
        <div className="card">
            <div className="card-body">
                <div className="card-header">
                   <h1 className="text-center fst-italic">Inicio</h1> 
                </div>
                    <Button onClick={navigation} className="mt-5 center">EndPoint</Button>
            </div>

        </div>
        
        </>
    )
}
export default Inicio;