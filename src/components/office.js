// import React, { useState, useEffect } from 'react'
// import { Link, useMatch, useResolvedPath } from "react-router-dom"
import Header from './header';
import './styles.css';
// import { signIn } from '../scripts/signIn';
// import { database } from '../scripts/database';
// import { getElementError } from '@testing-library/react'
// import ReactDOM from "react-dom"
import Workers from './workers';

function Office() {

  return (
    <>
      <Header />
      <main className="officeScreen">

        <Workers />

      </main>
    </>
  )
}

export default Office;