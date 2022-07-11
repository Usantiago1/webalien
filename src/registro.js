import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button} from "primereact/button";
import {InputText} from "primereact/inputtext";
import {Password} from "primereact/password";
import {useForm, Controller} from 'react-hook-form';
import { classNames } from 'primereact/utils';
import {Calendar} from 'primereact/calendar'


const Registro = () => {

    const [formData, setFormData] = useState({});
    const navigate = useNavigate();


    const defaultValues = {
        usuario:'', 
        nombre:'',
        ap:'',
        am:'',
        correo:'',
        nac:'',
        contrasenia:'',
        status:''
    }

    const onSubmit = async (data) => {
        try {
            let config = {
                method:'POST',
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                },
                body: JSON.stringify(this.state.form)
            }
            let res = await fetch('https://api-alien.herokuapp.com/aliens', config)
            let json = await res.json();
            console.log(json);

        } catch (error) {
            
        }
        setFormData(data);
    }

    const {control, formState:{errors}, handleSubmit, reset} = useForm({defaultValues});

    const getFormErrorMessage = (name) => {
        return errors[name] && <small className="p-error">{errors[name].message}</small>
    };


    return (
        <>
            <div className="card">
                <div className="card-body">
                    <div className="card-header">
                        <h1 className="text-center fst-italic">Registro</h1>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className="p-fluid">
                    <div className="field mb-5 mt-4">
                            <span className="p-float-label">
                                <Controller name="usuario" control={control} rules={{ required: 'El usuario es requerido.' }} render={({ field, fieldState }) => (
                                    <InputText id={field.name} {...field} className={classNames({ 'p-invalid': fieldState.invalid })} />
                                )} />
                                <label htmlFor="usuario" className={classNames({ ' p-error': errors.name })}>Usuario*</label>
                            </span>
                            {getFormErrorMessage('usuario')}
                        </div>

                        <div className="field mb-5 mt-4">
                            <span className="p-float-label">
                                <Controller name="name" control={control} rules={{ required: 'El nombre es requerido.' }} render={({ field, fieldState }) => (
                                    <InputText id={field.name} {...field} className={classNames({ 'p-invalid': fieldState.invalid })} />
                                )} />
                                <label htmlFor="name" className={classNames({ ' p-error': errors.name })}>Nombre*</label>
                            </span>
                            {getFormErrorMessage('name')}
                        </div>

                        <div className="field mb-5 mt-4">
                            <span className="p-float-label">
                                <Controller name="ap" control={control} rules={{ required: 'El Apellido Paterno es requerido.' }} render={({ field, fieldState }) => (
                                    <InputText id={field.name} {...field} className={classNames({ 'p-invalid': fieldState.invalid })} />
                                )} />
                                <label htmlFor="ap" className={classNames({ ' p-error': errors.name })}>Apellido Paterno*</label>
                            </span>
                            {getFormErrorMessage('ap')}
                        </div>

                        <div className="field mb-5 mt-4">
                            <span className="p-float-label">
                                <Controller name="am" control={control} rules={{ required: 'El Apellido Materno es requerido.' }} render={({ field, fieldState }) => (
                                    <InputText id={field.name} {...field} className={classNames({ 'p-invalid': fieldState.invalid })} />
                                )} />
                                <label htmlFor="am" className={classNames({ ' p-error': errors.name })}>Apellido Materno*</label>
                            </span>
                            {getFormErrorMessage('am')}
                        </div>

                        <div className="field mb-5 mt-4">
                            <span className="p-float-label">
                                <Controller name="correo" control={control} rules={{ required: 'El Correo es requerido.' }} render={({ field, fieldState }) => (
                                    <InputText id={field.name} {...field} className={classNames({ 'p-invalid': fieldState.invalid })} />
                                )} />
                                <label htmlFor="correo" className={classNames({ ' p-error': errors.name })}>Correo*</label>
                            </span>
                            {getFormErrorMessage('correo')}
                        </div>


                        <div className="field mb-5 mt-4">
                            <span className="p-float-label">
                                <Controller name="nac" control={control} rules={{ required: 'La Fecha Nacimiento es requerida.' }} render={({ field, fieldState }) => (
                                    <Calendar id={field.name} {...field} className={classNames({ 'p-invalid': fieldState.invalid })} />
                                )} />
                                <label htmlFor="nac" className={classNames({ ' p-error': errors.name })}>Fecha Nacimiento*</label>
                            </span>
                            {getFormErrorMessage('nac')}
                        </div>

                        <div className="field mb-5 mt-4">
                            <span className="p-float-label">
                                <Controller name="contrasenia" control={control} rules={{ required: 'La Contraseña es requerida.' }} render={({ field, fieldState }) => (
                                    <Password id={field.name} {...field} className={classNames({ 'p-invalid': fieldState.invalid })} />
                                )} />
                                <label htmlFor="contrasenia" className={classNames({ ' p-error': errors.name })}>Contraseña*</label>
                            </span>
                            {getFormErrorMessage('contrasenia')}
                        </div>

                        <div className="field mb-5 mt-4">
                            <span className="p-float-label">
                                <Controller name="status" control={control} rules={{ required: 'Estatus es requerido.' }} render={({ field, fieldState }) => (
                                    <InputText id={field.name} {...field} className={classNames({ 'p-invalid': fieldState.invalid })} />
                                )} />
                                <label htmlFor="status" className={classNames({ ' p-error': errors.name })}>Estatus*</label>
                            </span>
                            {getFormErrorMessage('status')}
                        </div>
                    <Button className="mt-5 center text-center">Guardar</Button>

                    </form>
                </div>

            </div>
        </>
    )
}
export default Registro;