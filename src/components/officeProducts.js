import React, { useState, useEffect } from 'react'
import { /* Navigate,  */useNavigate } from "react-router-dom"
// import { postOrder } from '../scripts/postOrder';
import { database } from '../scripts/database';
import Header from './officeHeader';

function OfficeProducts() {

  const [addProductBox, setAddProductBox] = useState(true)
  const [addProductForm, setAddProductForm] = useState(false)

  let [results, setResults] = useState()

  const navigate = useNavigate();

  async function reloadDatabase() {
    results = await database('users', 'GET', localStorage.getItem("accessToken"))
    setResults(results)
  }

  useEffect(() => {  // getting info from database
    // fetch data
    const resultsFetch = async () => {
      const results = await database('products', 'GET', localStorage.getItem("accessToken"))
      setResults(results);
      if (results === 'jwt expired') {
        localStorage.setItem("accessToken", results['accessToken'])
        localStorage.setItem("user-info", JSON.stringify(results))
        navigate('/login')
      }
    }
    resultsFetch()
    // console.log("results", results)
  }, [navigate, setResults]);
  // console.log("results", results)

  async function addProduct() {
    /* if (body["role"] === "") {
      setErrorPosition(true)
      setErrorPositionText('Selecciona una posición')
      return
    } else {
      setErrorPosition(false)
    } */
    /* const result = await database('users', 'POST', localStorage.getItem("accessToken"), body) */
    /* if (typeof result === 'object') {
      // navigate('/menu')
      setAddUserForm(false)
      setAddUserBox(true)
    } else {
      setError(true)
      setErrorText(result)
      // this.setState({ text: 'result' });
    } */
    // console.log(result)    
    reloadDatabase()
  }

  return (
    <>
      <Header />
      <main className="officeScreen">
        {results && results.map((e, index) => { // renders products
          return (
            // results && results.map((e, index) => (
            <section className="cajaInicio">
              <img src={e['image']} alt={e['name']}></img><br></br>
              <p id="textoCorreoInvalido" className="textoCorreoInvalido">{e['name']}</p><br></br>
              <p id="textoCorreoInvalido" className="textoCorreoInvalido">Precio: {e['price']}</p><br></br>
              <div className="amountBox">
                {/* <p id={index} onClick={() => { setCounter(counter - 1); console.log(index) }}>{'<'}</p>
            <p id={`counter${index}`}>{counter}</p> */}

                <button
                  onClick={() => { }}
                  className="checkoutBoxButtons"
                >Editar datos</button> <br></br><br></br>

                <button
                  onClick={() => { }}
                  className="checkoutBoxButtons"
                >Eliminar datos</button>

              </div>
            </section>
          )
        })}
        {addProductBox && <section className="cartBox">
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
              onClick={() => { setAddProductForm(true); setAddProductBox(false) }}
              className="checkoutBoxButtons"
            >Agregar productos</button>{/* <br></br><br></br> */}

            {/* <button
            onClick={() => { setEditUser(true); setUserData(false) }}
            className="checkoutBoxButtons"
          >Editar datos</button> */}

          </div>
        </section>}
        {addProductForm && <section className="cartBox">
          {/* <input
          // data-testid="emailInput"
          type="text"
          placeholder="E-mail"
          onChange={(e) => setEmail(e.target.value)}
        ></input><br></br> */}

          {/* {error && <p
          id="textoCorreoInvalido"
          className="textoCorreoInvalido"
          style={{ visibility: error ? 'visible' : 'hidden' }}
        >{errorText}<br></br><br></br></p>} */}

          {/* <input
          // data-testid="passwordInput"
          type="password"
          placeholder="Contraseña"
          onChange={(e) => setPassword(e.target.value)}
        ></input><br></br> */}

          {/* <input
          // data-testid="passwordInput"
          type="text"
          placeholder="Rol"
          onChange={(e) => setRole(e.target.value)}
        ></input><br></br> */}

          {/* <select data-testid="select" defaultValue="" onChange={(e) => setRole(e.target.value)}>
          <option value="">Selecciona una posición</option>
          <option data-testid="select-option" value="waiter">Mesero</option>
          <option data-testid="select-option" value="chef ">Cocinero</option>
          <option data-testid="select-option" value="admin">Administrador</option>
        </select ><br></br> */}

          {/* {errorPosition && <p
          id="textoCorreoInvalido"
          className="textoCorreoInvalido"
          style={{ visibility: errorPosition ? 'visible' : 'hidden' }}
        >{errorPositionText}<br></br><br></br></p>} */}

          <button
            // data-testid="signInButton"
            onClick={() => { addProduct() }}
            className="checkoutBoxButtons"
          >Crear producto</button><br></br>

          <button
            // data-testid="signInButton"
            onClick={() => {/*  setError(true); setErrorText(); */ setAddProductForm(false); setAddProductBox(true) }}
            className="checkoutBoxButtons"
          >Cancelar</button>
        </section>}
      </main>
    </>
  )
}

export default OfficeProducts
