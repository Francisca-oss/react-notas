import React, { useState } from 'react';
import '../style/formularionota.css';
import { v4 as uuidv4 } from 'uuid';

function FormularioTarea(props) {

    const [input, setInput] = useState('');

    const cambionota = e => {
        /* obtiene el valor de cambio, el actualizado */
        setInput(e.target.value);
    };

    const añadirEnvio = e => {
        e.preventDefault();
        const notanueva = {
            id: uuidv4(),
            texto: input,
            notalista: false
        };
        props.onSubmit(notanueva);
    };

    return (
        <form
            className='form-nota'
            onSubmit={añadirEnvio}>
            <input
                className='input-nota'
                type='text'
                placeholder='Escribe ...'
                name='texto'
                onChange={cambionota}
            />
            <buttom className='boton'>
                Agregar
            </buttom>
        </form>
    )
}
export default FormularioTarea;