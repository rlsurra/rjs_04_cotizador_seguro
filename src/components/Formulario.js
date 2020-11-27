import React, {useState} from 'react';
import styled from '@emotion/styled';
import {obtenerDiferenciaAnio,obtenerPorcentajeMarca,obtenerPorcentajePlan} from '../helper'

const Campo = styled.div`
    display: flex;
    margin-bottom: 1rem;
    align-items: center;
`

const Label = styled.label`
    flex: 0 0 100px;
`;

const Select = styled.select`
    display: block;
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #e1e1e1;
    -webkit-appearance: none;
`;

const InputRadio = styled.input`
    margin: 0 1rem;
`;

const BotonCotizar = styled.button`
    margin-top: 10px;
    padding: 0.5rem;
    width: 100%;
    background-color: #00838F;
    font-size: 16px;
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    border: none;
    transition: background-color .3s ease;

    &:hover {
        cursor: pointer;
        background-color: #26C6DA;
    }
`;

const Error = styled.div`
    background-color: red;
    width: 100%;
    color: white;
    text-align: center;
    margin-top: 1rem;
    padding: 0.5rem;
    box-sizing: border-box;
`;

const Formulario = ({setResumen,setCargando}) => {

    const [datos,setDatos] = useState({
        marca: '',
        anio: '',
        plan: ''
    })

    const [error,setError] = useState(false);

    const {marca,anio,plan} = datos;

    const actualizarDatos = e => {
        setDatos({
            ...datos,
            [e.target.name] : e.target.value
        })
    }

    //Submit del formulario
    const cotizarSeguro = e => {

        e.preventDefault();

        //Validar formulario
        if(marca.trim() === '' || anio.trim() === '' || plan.trim() === ''){
            setError(true);
            return;
        }
        setError(false);

        //Realizamos la logica del calculo
        //Bse de 2000
        //Por cada año, restamos 3%
        //Americano 15%, Asiatico 5%, Europeo 30%
        //Basico 20%, Completo 50%

        let resultado = 2000
        const difAnios = obtenerDiferenciaAnio(anio);
        const porcentajeMarca = obtenerPorcentajeMarca(marca);
        const porcentajePlan = obtenerPorcentajePlan(plan)
        resultado = resultado
            + resultado * porcentajeMarca 
            - resultado * (difAnios * 0.03)
            + resultado * porcentajePlan;
        resultado = parseFloat(resultado).toFixed(2); //2 decimales
        
        setCargando(true);

        setTimeout(() => {
            //Eliminar spinner
            setCargando(false);
            //Pasar valor al componente
            setResumen({
                resultado,
                datos
            });
        },2000);
    }


    return ( 
        <form
            onSubmit={cotizarSeguro}
        >
            <Campo>
                <Label>Marca</Label>
                <Select
                    name="marca"
                    value={marca}
                    onChange={actualizarDatos}
                >
                    <option value="">-- Seleccione --</option>
                    <option value="americano">Americano</option>
                    <option value="europeo">Europeo</option>
                    <option value="asiatico">Asiatico</option>
                </Select>
            </Campo>
            <Campo>
                <Label>Año</Label>
                <Select
                    name="anio"
                    value={anio}
                    onChange={actualizarDatos}
                >
                <option value="">-- Seleccione --</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>
                </Select>
            </Campo>
            <Campo>
                <Label>Plan</Label>
                <InputRadio
                    type="radio"
                    name="plan"
                    value="basico"
                    checked={plan === "basico"}
                    onChange={actualizarDatos}
                /> Basico

                <InputRadio
                    type="radio"
                    name="plan"
                    value="completo"
                    checked={plan === "completo"}
                    onChange={actualizarDatos}
                /> Completo
            </Campo>

            <BotonCotizar type="submit">Cotizar</BotonCotizar>

            {   error
                ? 
                (
                    <Error> Todos los campos son obligatorios </Error>
                )
                :
                null
            }

        </form>
     );
}
 
export default Formulario;