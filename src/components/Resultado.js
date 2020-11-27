import React from 'react';
import styled from '@emotion/styled';

const Resultado = ({resultado}) => {

    //Alternativa al ternario del error
    if(resultado === 0) return null;

    const ContenedorResultado = styled.div`
        text-align: center;
        padding: .5rem;
        border: 1px solid #26C6DA;
        background-color: rgb(127,224,237);
        margin-top: 1rem;
        position: relative;
    `;

    const TextoResultado = styled.p`
        color: #00838F;
        padding: 1rem;
        text-transform: uppercase;
        font-weight: bold;
        margin: 0;
    `;

    return ( 
        <ContenedorResultado>
                <TextoResultado> El total es $ {resultado} </TextoResultado>
        </ContenedorResultado>
        
     );
}
 
export default Resultado;