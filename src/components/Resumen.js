import React from 'react';
import styled from '@emotion/styled';
import {primerMayuscula} from '../helper';

const ContenedorResumen = styled.div`
    padding: 1rem;
    text-align: center;
    background-color: #00838F;
    color: #FFF;
    margin-top: 1rem;

`;

const Resumen = ({datos}) => {

    const {marca,anio,plan} = datos;

    if(marca===''||anio===''||plan===''){
        return null;
    }

    return (
        <ContenedorResumen>
            <h2>Resumen de cotizacion</h2>
            <ul>
                <li>Marca: {primerMayuscula(marca)}</li>
                <li>Año: {anio}</li>
                <li>Plan: {primerMayuscula(plan)}</li>
            </ul>
        </ContenedorResumen>
     );
}
 
export default Resumen;