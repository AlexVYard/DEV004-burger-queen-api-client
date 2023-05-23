import React, { useState, useEffect } from 'react'
import { /* Navigate,  */useNavigate } from "react-router-dom"
import './styles.css';
// import { signIn } from '../scripts/signIn';
import { database } from '../scripts/database';
// import { getElementError } from '@testing-library/react'
// import ReactDOM from "react-dom"

function Office() {

  let [results, setResults] = useState()
  // const [cart, addToCart] = useState([]);
  const [userData, setUserData] = useState(true)
  const [editUser, setEditUser] = useState(false)
  const [addUserBox, setAddUserBox] = useState(true)
  const [addUserForm, setAddUserForm] = useState(false)
  const [email, setEmail] = useState('')
  const [error, setError] = useState(false)
  const [errorText, setErrorText] = useState("Error");
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('')

  const navigate = useNavigate();

  useEffect(() => {  // getting info from database
    // fetch data
    const resultsFetch = async () => {
      const results = await database('users', 'GET', localStorage.getItem("accessToken"))
      setResults(results);
      if (results === 'jwt expired') {
        localStorage.setItem("accessToken", results['accessToken'])
        localStorage.setItem("user-info", JSON.stringify(results))
        navigate('/login')
      }
    }
    resultsFetch()
    // console.log("results", results)
  }, [navigate]);
  // console.log("results", results)

  const body = { // body will be used by postOrder
    "email": email,
    "password": password,
    "role": role
  }

  async function addUser() {
    const result = await database('users', 'POST', localStorage.getItem("accessToken"), body)
    // console.log(result)
    if (typeof result === 'object') {
      // navigate('/menu')
      setAddUserForm(false)
      setAddUserBox(true)
    } else {
      setErrorText(result)
      // this.setState({ text: 'result' });
    }
    results = await database('users', 'GET', localStorage.getItem("accessToken"))
    setResults(results)
  }

  /* function cancel() {

  } */

  async function deleteUser(id) {
    const result = await database(`users/${id}`, 'DELETE', localStorage.getItem("accessToken"))
    console.log(result)
    results = await database('users', 'GET', localStorage.getItem("accessToken"))
    setResults(results)
  }

  return (
    <main className="officeScreen">
      {results && results.map((e, index) => { // renders products
        return (
          // results && results.map((e, index) => (
          <section className="officeBox">
            {/* <img src={e['image']} alt={e['name']}></img> */}
            {userData && <><p
              id="textoCorreoInvalido"
              className="textoCorreoInvalido">
              Email: {e['email']}<br></br>
              Role: {e['role']}
            </p><br></br>

              <button
                onClick={() => { deleteUser(e.id) }}
                className="checkoutBoxButtons"
              >Eliminar usuario</button></>}

            {/* <div className="amountBox"> */}
            {/* <p id={index} onClick={() => { setCounter(counter - 1); console.log(index) }}>{'<'}</p>
            <p id={`counter${index}`}>{counter}</p> */}

            {editUser && <><input
              // data-testid="emailInput"
              type="text"
              placeholder={`Email: ${e['email']}`}
              onChange={(e) => setEmail(e.target.value)}
            ></input><br></br>

              {error && <p
                id="textoCorreoInvalido"
                className="textoCorreoInvalido"
                style={{ visibility: error ? 'visible' : 'hidden' }}
              >{errorText}<br></br></p>}

              <input
                // data-testid="passwordInput"
                type="password"
                placeholder="Nueva contraseña"
                onChange={(e) => setPassword(e.target.value)}
              ></input><br></br>

              <input
                // data-testid="passwordInput"
                type="text"
                placeholder={`Rol: ${e['role']}`}
                onChange={(e) => setRole(e.target.value)}
              ></input><br></br>

              <button
                onClick={() => { }}
                className="checkoutBoxButtons"
              >Aceptar</button><br></br>

              <button
                onClick={() => { setEditUser(false); setUserData(true) }}
                className="checkoutBoxButtons"
              >Cancelar</button></>}



            {/* </div> */}
          </section>
        )
      })}
      {addUserBox && <section className="cartBox">
        {/* <img src={e['image']} alt={e['name']}></img> */}
        {/* <p
              id="textoCorreoInvalido"
              className="textoCorreoInvalido">
              Email: {e['email']}<br></br>
              Role: {e['role']}
            </p> */}
        <div className="amountBox">
          {/* <p id={index} onClick={() => { setCounter(counter - 1); console.log(index) }}>{'<'}</p>
            <p id={`counter${index}`}>{counter}</p> */}

          <button
            onClick={() => { setAddUserForm(true); setAddUserBox(false) }}
            className="checkoutBoxButtons"
          >Agregar trabajadores</button><br></br><br></br>

          <button
            onClick={() => { setEditUser(true); setUserData(false) }}
            className="checkoutBoxButtons"
          >Editar datos</button>

        </div>
      </section>}

      {addUserForm && <section className="cartBox">
        <input
          // data-testid="emailInput"
          type="text"
          placeholder="E-mail"
          onChange={(e) => setEmail(e.target.value)}
        ></input><br></br>

        {error && <p
          id="textoCorreoInvalido"
          className="textoCorreoInvalido"
          style={{ visibility: error ? 'visible' : 'hidden' }}
        >{errorText}<br></br></p>}

        <input
          // data-testid="passwordInput"
          type="password"
          placeholder="Contraseña"
          onChange={(e) => setPassword(e.target.value)}
        ></input><br></br>

        <input
          // data-testid="passwordInput"
          type="text"
          placeholder="Rol"
          onChange={(e) => setRole(e.target.value)}
        ></input><br></br>

        <button
          // data-testid="signInButton"
          onClick={() => { setError(true); setErrorText(); addUser() }}
          className="checkoutBoxButtons"
        >Crear usuario</button><br></br>

        <button
          // data-testid="signInButton"
          onClick={() => {/*  setError(true); setErrorText(); */ setAddUserForm(false); setAddUserBox(true) }}
          className="checkoutBoxButtons"
        >Cancelar</button>
      </section>}
    </main>
  )
}

export default Office;