import React from 'react';
import PropTypes from 'prop-types';

const Cita = ({cita, eliminarCita}) => {
    
    return (

        <div className="cita">
            <p>Animale: <span>{cita.mascota}</span></p>
            <p>Proprietario: <span>{cita.propietario}</span></p>
            <p>Data: <span>{cita.fecha}</span></p>
            <p>Ora: <span>{cita.hora}</span></p>
            <p>Sintomi: <span>{cita.sintomas}</span></p>

            <button
                className="button eliminar"
                onClick={() => {
                    eliminarCita(cita.id)
                }}
            >Cancella &times;</button>
        </div>
    );
}

Cita.propTypes = {
    cita : PropTypes.object.isRequired,
    eliminarCita : PropTypes.func.isRequired
}

export default Cita;