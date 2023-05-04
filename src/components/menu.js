// import logo from '../logo.svg';
// import { onNavigate } from './lib/onNavigate.js';
import './styles.css'

function Menu() {
  // onNavigate('/');
  return (
    <main className="PantallaInicio">
      <section className="cajaInicio">
        <img src={require('./img/img_libro_rojo.png')} alt="Imagen de libro"></img>
        <input type="text" placeholder=" Pantalla de menu" className="inputEmail"></input>
        <p id="textoCorreoInvalido" className="textoCorreoInvalido">Escribe un correo valido</p>
        <input type="password" placeholder=" Pantalla de menu" className="inputPassword"></input>
        <button className="botonInicio">Ingresar</button>
      </section>
    </main>
  )
}

export default Menu 



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