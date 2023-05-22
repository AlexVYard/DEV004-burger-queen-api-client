import React, { useState/* , useEffect */ } from 'react'
// import { /* Navigate,  */useNavigate } from "react-router-dom"
import './styles.css';
// import { signIn } from '../scripts/signIn';
import { database } from '../scripts/database';
// import { getElementError } from '@testing-library/react'
// import ReactDOM from "react-dom"

function Cart({ cart, addToCart }/* { menuToProducts } */) {

  const [client, setClient] = useState('')
  // const [clientText, setClientText] = useState('')
  // const [results, setResults] = useState()
  // const [cart, addToCart] = useState([])
  const [errorClient, setErrorClient] = useState(false)
  // const [errorTextClient, setErrorTextClient] = useState("Error");
  const [errorCart, setErrorCart] = useState(false)
  // const [errorTextCart, setErrorTextCart] = useState("Error");
  const [successfulOrder, setSuccessfulOrder] = useState(false);
  // const [successfulOrderText, setSuccessfulOrderText] = useState("Error");
  /* let error = false
  let errorText = 'Error' */

  // const navigate = useNavigate()

  const body = { // body will be used by postOrder
    "client": client,
    "products": cart,
    "status": "pending",
    "dataEntry": new Date().toLocaleString(),
    "dateProcessed": "not processed",
    "dateDelivered": "not delivered"
  }

  function postOrder() {
    if (client === '') {
      setErrorClient(true)
      // setErrorTextClient('Ingresa un nombre para el cliente')
      // alert('Ingresa un nombre para el cliente')
    }
    if (cart.length === 0) {
      setErrorCart(true)
      // setErrorTextCart('Añade productos al carrito antes de continuar')
      // alert('Añade productos al carrito antes de continuar')
    }
    if (client.length > 0 && cart.length > 0) {
      database('orders', 'POST', localStorage.getItem("accessToken"), body)
      setErrorClient(false)
      setErrorCart(false)
      setSuccessfulOrder(true)
      // setSuccessfulOrderText('Enviado a Cocina')
      setTimeout(() => {
        // navigate('/menu')
        window.location.reload(false)
      }, "3000");
      // alert('Enviado a la cocina')
    }
  }

  return (
    <>
      <section className="cartBox">  {/* checkout cart box */}
        <div className="cart-list">

          <h1>Cliente:</h1> {/* getting client name */}
          <input
            type="text"
            placeholder="Nombre"
            className="inputBox"
            onChange={(e) => setClient(e.target.value)}
          >{/* {clientText} */}</input>
          <br></br><br></br>

          {errorClient && <p
            id="textoCorreoInvalido"
            className="textoCorreoInvalido"
            style={{ visibility: errorClient ? 'visible' : 'hidden' }}
          >Ingresa un nombre para el cliente<br></br><br></br></p>}

          <h1>Carrito:</h1><br></br>  {/* rendering products inside the cart */}
          {/* cart items */}
          {cart.map((item, index) => {
            //console.log(item)
            return (
              <div className="cart">
                <h3>{item.product.name}</h3>
                <section className="quantitybuttons">

                  <h4
                    onClick={() => {
                      if (item.qty !== 0) {
                        let itemTemp = item
                        item.qty -= 1;
                        cart.splice(index, 1);
                        // console.log("cart", cart)
                        // addToCart([...cart])
                        addToCart([...cart, itemTemp])
                        console.log(item)
                      }
                      if (item.qty === 0) {
                        cart.splice(index, 1);
                        /* let x = cart; */
                        addToCart([...cart]);
                      }
                    }}>-</h4>

                  <h4>&nbsp;&nbsp;{item.qty}&nbsp;&nbsp;</h4>

                  <h4
                    onClick={() => {
                      let itemTemp = item
                      item.qty += 1;
                      cart.splice(index, 1);
                      // console.log("cart", cart)
                      // addToCart([...cart])
                      addToCart([...cart, itemTemp])
                      console.log(item)
                    }}>+</h4>
                    
                </section>
                <p>Precio: {item.product.price * item.qty}</p>
                <button
                  className="checkoutBoxButtons"
                  onClick={() => {
                    // remove item from cart
                    cart.splice(index, 1);
                    /* let x = cart; */
                    addToCart([...cart]);
                  }}
                >Quitar del carrito</button>
                <br></br><br></br>
              </div>
            );
          })}


          {errorCart && <p
            id="textoCorreoInvalido"
            className="textoCorreoInvalido"
            style={{ visibility: errorCart ? 'visible' : 'hidden' }}
          >Añade productos al carrito antes de continuar<br></br><br></br></p>}

          <h1>Total: {cart.reduce((a, b) => a + (b.product.price * b.qty), 0)}</h1><br></br>  {/* price total */}
          {/* <p>{cart.reduce((a, b) => a + b.price, 0)}$</p> */}
          <button
            className="checkoutBoxButtons"
            onClick={() => { postOrder() }}
          >Enviar a cocina</button>

          {successfulOrder && <p
            id="textoCorreoInvalido"
            className="textoCorreoInvalido"
            style={{ visibility: successfulOrder ? 'visible' : 'hidden' }}
          ><br></br>Enviado a cocina<br></br><br></br></p>}

        </div>
      </section >
    </>
  )
}

export default Cart;