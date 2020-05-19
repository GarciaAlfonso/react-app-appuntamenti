import React, {Fragment, useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';


const Formulario = ({crearCita}) => {

    //Crear el State de Citas

    const [cita, actualizarCita] = useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''
    });

    const [error, actualizarError] = useState(false);

    //Función que se ejecuta cuando el usuario escribe en el input

    const actualizarState = e => { //le pasamos como parametro a la funcion el evento e
        
        //Quitar error de campos obligatorios al escribir en alguno de los campos

        error && actualizarError(false); //Viene siendo ( error ? actualizarError(false) : null; )  

        actualizarCita({
            ...cita, //hacemos una copia del array cita ya que no se puede modificar directamente el State
            [e.target.name]: e.target.value //
        });
    }

    //Extraer los Valores del State cita

    const {mascota, propietario, fecha, hora, sintomas} = cita;

    //Accion del Boton Crear Cita

    const submitCita = e => {
        e.preventDefault();
        
        //Validar los datos
        if (mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === '') {
            actualizarError(true);
        }

        //quitar error de campos al enviar el formulario
        /* error && actualizarError(false); */

        //Asignar ID

        cita.id = uuidv4();

        //Crear la Cita

        crearCita(cita);

        //Reiniciar Formulario

        actualizarCita({
            mascota: '',
            propietario: '',
            fecha: '',
            hora: '',
            sintomas: ''
        })
        
    }
 

    return (
        <Fragment>

            <h2>Creare Appuntamento</h2>

            {error && <p className="alerta-error">Tutti i campi sono obbligatori</p>}
            <form
                onSubmit={submitCita}  
            >
                <label>Nome dell'animale</label>
                <input
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Nome dell'animale"
                    onChange = {actualizarState}//Evento e onChange
                    value={mascota}
                />

                <label>Proprietario</label>
                <input
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nome e Cognome"
                    onChange = {actualizarState}
                    value={propietario}
                />

                <label>Data</label>
                <input
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange = {actualizarState}
                    value={fecha}
                />

                <label>Ora</label>
                <input
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange = {actualizarState}
                    value = {hora}
                />
                <label>Sintomi</label>
                <textarea
                    className="u-full-width"
                    name="sintomas"
                    onChange = {actualizarState}
                    value = {sintomas}
                ></textarea>

                <button
                    type="submit"
                    className="button-primary"
                    onChange = {actualizarState}
                >Crea Appuntamento</button>

            </form>

        </Fragment>
    );
}

Formulario.propTypes = {
    crearCita: PropTypes.func.isRequired
}

export default Formulario;