import React, {useState,Fragment} from 'react';
import Header from './components/Header'
import styled from '@emotion/styled';
import Formulario from './components/Formulario'
import Resumen from './components/Resumen'
import Resultado from './components/Resultado'
import Spinner from './components/Spinner'

const Contenedor = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const ContenedorFormulario = styled.div`
  background-color: #FFF;
  padding: 3rem;
`;


function App() {

  const [resumen,setResumen] = useState({
      datos: {
        marca: '',
        plan: '',
        anio: ''
      },
      resultado: 0
  });

  //El resumen contiene datos + cotizacion
  const {datos,resultado} = resumen;

  const [cargando,setCargando] = useState(false);

  return (
    <Contenedor>

        <Header titulo="Cotizador de seguros" />

        <ContenedorFormulario>
            <Formulario 
                setResumen = {setResumen}
                setCargando = {setCargando}
            />
            {cargando 
            ?
            <Spinner/>
            : null
            }

            {cargando
            ? null
            :(
            <Fragment>
              <Resumen 
                  datos = {datos}
              />
              <Resultado 
                    resultado = {resultado}
              />
            </Fragment>
            )}

        </ContenedorFormulario>

    </Contenedor>

  );
}

export default App;
