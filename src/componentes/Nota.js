import React from 'react';
import '../style/nota.css';
import { AiFillCloseCircle } from "react-icons/ai";

function Nota({ id, texto, notalista, marcarNotaLista, eliminarNota }) {
    return (
        <div className={notalista ? 'contenedor notalista' : 'contenedor'}>
            <div className='texto-nota'
                onClick={() => marcarNotaLista(id)}>
                {texto}
            </div>
            <div className='contenedor-icono'
                onClick={() => eliminarNota(id)}>
                <AiFillCloseCircle className='icono' />
            </div>

        </div>

    );
}

export default Nota;