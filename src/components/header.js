// import React, { useState, useEffect } from 'react'
import { Link, useMatch, useResolvedPath } from "react-router-dom"
import './styles.css';
// import { signIn } from '../scripts/signIn';
// import { database } from '../scripts/database';
// import { getElementError } from '@testing-library/react'
// import ReactDOM from "react-dom"
// import Workers from './workers';

function Header() {

  return (
    <main className="header">

      <CustomLink to="/office">Office</CustomLink>
      <CustomLink to="/officeProducts">Products</CustomLink>

    </main>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? 'active' : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}

export default Header;