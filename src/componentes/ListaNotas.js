import React, { useState } from "react";
import FormularioNota from './FormularioNota';
import Nota from './Nota';
import '../style/listanotas.css';


function ListaNotas() {
    const [notas, setNotas] = useState([]);

    const añadirnota = nota => {
        if (nota.texto.trim()) {
            nota.texto = nota.texto.trim();
            const notasActualizada = [nota, ...notas];
            setNotas(notasActualizada);
        }
    };

    const eliminarNota = id =>{
        const notasActualizada =notas.filter(nota=> nota.id !== id);
        setNotas(notasActualizada);
    };

    const marcarNotaLista= id =>{
        const notasActualizada = notas.map(nota => {
            if (nota.id === id) {
                nota.notalista = !nota.notalista;
            }        
            return nota;
        });
        setNotas(notasActualizada);
    };
    
    return (
        <>
            <FormularioNota onSubmit={añadirnota} />
            <div className="contenedor-lista">
                {
                    notas.map((nota) =>
                        <Nota
                            key={nota.id}
                            id={nota.id}
                            texto={nota.texto}
                            notalista={nota.notalista}
                            marcarNotaLista={marcarNotaLista}
                            eliminarNota={eliminarNota}

                        />
                    )
                }
            </div>
        </>
    )
}

export default ListaNotas;