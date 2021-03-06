import React, { useState, useRef} from "react";
import { Controller, useForm } from "react-hook-form";


import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { classNames } from 'primereact/utils';

import Footer from "./footer";

import emailjs from "@emailjs/browser";
import swal from "sweetalert";


const NewsLetter = () => {

    const [formData, setFormData] = useState({});


    const er = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const message = "El correo no es valido"

    const form = useRef();


    const onSubmit = (data) => {
        sendEmail();
        setFormData(data);
        reset();
    }


    const defaultValues = {
        form_name: ''
    }

    const sendEmail = () => {
        //e.preventDefault();
        emailjs.sendForm('service_p75gfbr', 'template_22q4sui', form.current, 'jC5_W8QPWemHmQMrQ')
            .then((result) => {
                alertSend('NewsLetter', 'Registro Enviado', 'success', 'Ok')
                //console.log(result.text);
            }, (err) => {
                alertSend('NewsLetter', "Registro no Enviado", 'error', 'Ok');
                //console.log(err.text);
            })
    }


    const alertSend = (pTitle,pText,pIcon,pButton) => {
        swal({
            title: pTitle,
            text: pText,
            icon: pIcon,
            button: pButton
        });
    }

    const { control, formState: { errors }, handleSubmit, reset } = useForm({ defaultValues });

    const getFormErrorMessage = (name) => {
        return errors[name] && <small className="p-error">{errors[name].message}</small>
    };

    return (
        <>
            <div className="card">
                <div className="card-body">
                    <div className="card-header">
                        <h1 className="text-center fst-italic">NewsLetter</h1>
                    </div>
                    <form ref={form} onSubmit={handleSubmit(onSubmit)} className='p-fluid'>
                        <div className="col-md-60">
                            <div className="field mb-4 mt-5">
                                <span className="p-float-label">
                                    <Controller name="form_name" control={control} rules={{ required: 'El Correo es requerido.', pattern: { value: er, message: message } }} render={({ field, fieldState }) => (
                                        <InputText name="form_name" id={field.name} {...field} className={classNames({ 'p-invalid': fieldState.error })} />
                                    )} />
                                    <label htmlFor="form_name" className={classNames({ ' p-error': !!errors.form_name })}>Correo*</label>
                                </span>
                                {getFormErrorMessage('form_name')}
                            </div>
                        </div>
                        <Button className='btn btn-primary mb-2'>Suscribirse</Button>
                    </form>
                </div>
            </div>
        </>
    )
}
export default NewsLetter;