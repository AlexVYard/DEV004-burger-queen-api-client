import React, { useState/* , useEffect */ } from 'react'
// import { postOrder } from '../scripts/postOrder';
// import { database } from '../scripts/database';
import Products from './products';
import Cart from './cart';

function Menu() {

  const [results, setResults] = useState()
  const [cart, addToCart] = useState([])

  return (
    <main className="PantallaInicio">

      <Products results={results} setResults={setResults} cart={cart} addToCart={addToCart}/* menuToProducts={results}  */ />
      <Cart  results={results} setResults={setResults} cart={cart} addToCart={addToCart} />

    </main>
  )
}

export default Menu
