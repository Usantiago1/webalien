import React, { useState } from "react";
import { useForm, Controller } from 'react-hook-form';

import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { InputTextarea} from 'primereact/inputtextarea'
import { classNames } from 'primereact/utils';
import { Dialog } from 'primereact/dialog';


import Footer from "./footer";

const Contacto = () => {

    const [formData, setFormData] = useState({});
    const [showMessage, setShowMessage] = useState(false);

    const er = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const message = "El correo no es valido"


    const defaultValues = {
        asunto: '',
        nombre: '',
        correo: '',
        numero: '',

    }

    const onSubmit = (data) => {
        setFormData(data);
        setShowMessage(true);
        reset();
    }

    const { control, formState: { errors }, handleSubmit, reset } = useForm({ defaultValues });

    const getFormErrorMessage = (name) => {
        return errors[name] && <small className="p-error">{errors[name].message}</small>
    };

    const dialogFooter = <div className="flex justify-content-center"><Button label="OK" className="p-button-text" autoFocus onClick={() => setShowMessage(false)} /></div>;
   


    return (
        <>
            <div className="card">

                <Dialog visible={showMessage} onHide={() => setShowMessage(false)} position="top" footer={dialogFooter} showHeader={false} breakpoints={{ '960px': '80vw' }} style={{ width: '30vw' }}>
                    <div className="flex justify-content-center flex-column pt-6 px-3">
                        <i className="pi pi-check-circle" style={{ fontSize: '5rem', color: 'var(--green-500)' }}></i>
                        <h5>Registro enviado!</h5>
                        <p style={{ lineHeight: 1.5, textIndent: '1rem' }}>
                            Tu cuenta se registro con el nombre <b>{formData.nombre}</b> ; Consulte <b>{formData.correo}</b> para obtener instrucciones de activación.
                        </p>
                    </div>
                </Dialog>

                <div className="card-body">
                    <div className="card-header">
                        <h1 className="text-center fst-italic">Contacto</h1>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className="p-fluid">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="field mb-3 mt-4">
                                    <span className="p-float-label">
                                        <Controller name="nombre" control={control} rules={{ required: 'El nombre es requerido.' }} render={({ field, fieldState }) => (
                                            <InputText id={field.name} {...field} className={classNames({ 'p-invalid': fieldState.invalid })} />
                                        )} />
                                        <label htmlFor="nombre" className={classNames({ ' p-error': errors.name })}>Nombre*</label>
                                    </span>
                                    {getFormErrorMessage('nombre')}
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="field mb-3 mt-4">
                                    <span className="p-float-label">
                                        <Controller name="correo" control={control} rules={{ required: 'El Correo es requerido.', pattern: { value: er, message: message } }} render={({ field, fieldState }) => (
                                            <InputText id={field.name} {...field} className={classNames({ 'p-invalid': fieldState.invalid })} />
                                        )} />
                                        <label htmlFor="correo" className={classNames({ ' p-error': !!errors.name })}>Correo*</label>
                                    </span>
                                    {getFormErrorMessage('correo')}
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="field mb-3 mt-4">
                                    <span className="p-float-label">
                                        <Controller name="numero" control={control} rules={{ required: 'Este campo es requerido.' }} render={({ field, fieldState }) => (
                                            <InputText keyfilter='num' maxLength='10' id={field.name} {...field} className={classNames({ 'p-invalid': fieldState.invalid })} />
                                        )} />
                                        <label htmlFor="numero" className={classNames({ ' p-error': errors.numero})}>Numero telefonico*</label>
                                    </span>
                                    {getFormErrorMessage('numero')}
                                </div>
                            </div>

                            <div className="col-md-50">
                                <div className="field mb-3 mt-4">
                                    <span className="p-float-label">
                                        <Controller name="asunto" control={control} rules={{ required: 'Este campo es requerido.' }} render={({ field, fieldState }) => (
                                            <InputTextarea id={field.name} {...field} className={classNames({ 'p-invalid': fieldState.error })} />
                                        )} />
                                        <label htmlFor="asunto" className={classNames({ ' p-error': errors.name })}>Asunto*</label>
                                    </span>
                                    {getFormErrorMessage('asunto')}
                                </div>
                            </div>
                        <Button  label="Enviar" className="btn btn-primary mb-2"/>




                        </div>
                    </form>
                </div>
               
            </div>

        <Footer/>
        </>
    )
}
export default Contacto;