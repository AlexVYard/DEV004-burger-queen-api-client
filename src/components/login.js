// import logo from '../logo.svg';
// import { onNavigate } from './lib/onNavigate.js';
import React, { useState, useEffect } from 'react'
import { /* Navigate,  */useNavigate } from "react-router-dom"
import './styles.css';
import { signIn } from '../scripts/signIn';
// import { getElementError } from '@testing-library/react'
// import ReactDOM from "react-dom"

function Login() {
  
  /* const Results = () => (
    <div>
      <p
        id="textoCorreoInvalido"
        className="textoCorreoInvalido"
        style={{visibility: this.state.showButton ? 'visible' : 'hidden' }}
      >Escribe un correo valido</p>
    </div>
  ) */
  // onNavigate('/');
  // const showError = React.useState(false)
  const [error, setError] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorText, setErrorText] = useState("Error");
  // console.log(localStorage.getItem("user-info").length)
  const navigate = useNavigate()

  useEffect(() => {
    if (localStorage.getItem('user-info') > '200') {
      navigate('/menu')
    }
  })

  async function login() {
    let item = { email, password }
    const result = await signIn(item)
    // console.log(result)
    // console.log('accessToken: ', result['accessToken'])

    if (typeof result === 'object') {
      navigate('/menu')
    } else {
      setErrorText(result)
      // this.setState({ text: 'result' });
    }
  }

  return (
    <main className="PantallaInicio">
      <section className="cajaInicio">
        <img src={require('./img/img_libro_rojo.png')} alt="Imagen de libro"></img>

        <input
          type="text"
          placeholder=" E-mail"
          onChange={(e) => setEmail(e.target.value)}
        ></input>

        {error && <p
          id="textoCorreoInvalido"
          className="textoCorreoInvalido"
          style={{ visibility: error ? 'visible' : 'hidden' }}
        >{errorText}</p>}

        <input
          type="password"
          placeholder=" Password"
          onChange={(e) => setPassword(e.target.value)}
        ></input>

        <button onClick={() => { setError(true); setErrorText(); login() }} className="botonInicio">Log-in</button>
      </section>
    </main>
  )
}

export default Login;



/* export const login = () => {
  const root = document.getElementById('pantallaMostrada');
  root.innerHTML = `
    <main class="PantallaInicio">
      <section class="cajaInicio">
        <img src="img/img_libro_rojo.png" alt="Imagen de libro">
        <input type="text" placeholder=" Correo Electronico" id="inputEmail">
        <p id="textoCorreoInvalido" class="textoCorreoInvalido">Escribe un correo valido</p>
        <input type="password" placeholder=" Contraseña" id="inputPassword">
        <button id="botonInicio">Ingresar</button>
        <hr style="width:100%;text-align:center">
        <button id="botonInicioGoogleLogin"><img src="./img/btn_google_signin.png" alt="boton de google" class="imgButton"></button>
        <p class="textoCrearCuenta">¿No tienes una cuenta?
        <a id="botonRegistrar" href="#" onclick="console.log('hola mundo')"> Registrate</a></p>
      </section>
    </main>
  `;
};
 */