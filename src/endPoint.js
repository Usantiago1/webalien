import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "primereact/button";

const EndPoint = () => {
    const navigate = useNavigate();


    const navigation = () =>{
        navigate('/Registro');
    }


    return (
        <>
            <div className="card">
                <div className="card-body">
                    <div className="card-header">
                        <h1 className="text-center fst-italic">EndPoint</h1>
                    </div>
                    <Button onClick={navigation} className="mt-5 center">EndPoint</Button>
                </div>

            </div>
        </>
    )
}
export default EndPoint;