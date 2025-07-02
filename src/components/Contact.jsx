import { useNavigate } from "react-router-dom";
import "../styles/Contact.css";
import { useForm } from 'react-hook-form';
import { useState } from "react";

function Contact() {

    const navegarA = useNavigate();

    const enviarCorreo = (nombre, email, asunto, mensaje) => {
        let url = "";
        url += "mailto:";
        url += email;
        url += "?subject=";
        url += asunto;
        url += "&body"
        url += mensaje;
        url += `Mensaje enviado por: ${nombre}`;

        url = url.replace(" ", "%20");

        // navegarA(url);
        window.location.href = url;
    }

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = handleSubmit((data) => {
        console.log(data); // Submitted form data
        enviarCorreo(data.name, data.email, data.sub, data.msg);
    });

    return (
        <div className="contactCont">
            <h2>¡Contactame!</h2>

            <div className="formCont">
                <form onSubmit={onSubmit} >
                    <strong>Llena los campos y lo mas pronto posible me contactare contigo.</strong>
                    <label htmlFor="name">
                        <input {...register("name", {required:true})} id="name" placeholder="Nombre" className={errors.name ? "input-error" : ""}/>
                        {errors.name && <span>Debe llenar el campo</span> }
                        
                    </label>
                    <label htmlFor="email">
                        <input {...register("email", { pattern: /^\S+@\S+$/i, required:true } )} placeholder="Email" id="email" className={errors.email ? "input-error" : ""} />
                        {errors.email && errors.email.type === "pattern" && <span>Debe ser un email valido</span>}
                        {errors.email && errors.email.type === "required" && <span>Debe llenar el campo</span>}
                    </label>
                    <label htmlFor="subject">
                        <input {...register("sub", {required:true})} id="subject" placeholder="Titulo" className={errors.sub ? "input-error" : ""}/>
                        {errors.sub && <span>Debe llenar el campo</span>}
                    </label>
                    <label htmlFor="mess">
                        <input {...register("msg", {required:true})} id="mess" placeholder="Mensaje" className={errors.msg ? "input-error" : ""}/>
                        {errors.msg && <span>Debe llenar el campo</span>}
                    </label>

                    <button type="submit">Enviar</button>
                </form>
            </div>
        </div>
    )
}

export default Contact