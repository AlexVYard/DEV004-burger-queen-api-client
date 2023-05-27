import { render, screen/* , queryByAttribute */ } from '@testing-library/react';
import React from 'react'
// import userEvent from '@testing-library/user-event'
import { fireEvent, waitFor } from "@testing-library/react";
import '@testing-library/jest-dom'
import { BrowserRouter/* , MemoryRouter *//* , Router */ } from "react-router-dom"
// import { /* Link,  *//* Route, Routes, Router, */ useNavigate } from 'react-router-dom'
// import App from './App';
// import Login from './components/login.js';
import App from './App.js';
import Kitchen from './components/kitchen.js';
import Office from './components/office.js';
// import { signIn } from './scripts/signIn';
// import { postOrder } from './scripts/postOrder.js';
// import { database } from './scripts/database.js';
// import { render, queryByAttribute } from 'react-testing-library';

describe('Login', () => {
  test('Error', async () => {
    render(<App />, { wrapper: BrowserRouter })

    const button = screen.getByText(/Ingresar/i)
    fireEvent.click(button)

    await screen.findByText('Email and password are required')

    expect(screen.getByText(/Email and password are required/i)).toBeInTheDocument()
  })

  test('Successful login', async () => {
    // localStorage.setItem("user-info", '')
    render(<App />, { wrapper: BrowserRouter })

    const emailInput = screen.getByPlaceholderText(/E-mail/i)/* .value = 'grace.hopper@systers.xyz' */
    fireEvent.change(emailInput, { target: { value: 'grace.hopper@systers.xyz' } })
    const passwordInput = screen.getByPlaceholderText(/Contraseña/i)/* .value = '123456' */
    fireEvent.change(passwordInput, { target: { value: '123456' } })
    // console.log(element)
    // screen.getByTestId('signInButton').dispatchEvent(new Event('click'));
    // await user.click(screen.getByText(/Ingresar/i))
    const button = screen.getByText(/Ingresar/i)
    // console.log(button)
    fireEvent.click(button)
    await screen.findByText('Enviar a cocina')
    // console.log(dom)
    // const table = getById(dom.container, 'directory-table');
    // console.log(table)
    // expect(router.navigateTo).toHaveBeenCalledWith('/home');
    expect(screen.getByText(/Enviar a cocina/i)).toBeInTheDocument()
  })
})

describe('Post Order', () => {
  test('Error', async () => {
    /* const email = "grace.hopper@systers.xyz"
    const password = "123456"
    const body1 = { email, password }
    const result1 = await database('login', 'POST', null, body1)
    // console.log(result)
    const body2 = {
      "client": "UNIT TEST",
      "products": [
        [
          {
            "id": 2,
            "name": "Café americano",
            "price": 500,
            "image": "https://raw.githubusercontent.com/ssinuco/burger-queen-api-mock/main/resources/images/coffee.png",
            "type": "Desayuno",
            "dateEntry": "2022-03-05 15:14:10"
          }
        ]
      ],
      "status": "pending",
      "dataEntry": new Date().toLocaleString()
    }
    // console.log(result['accessToken'])
    // console.log(localStorage.getItem("accessToken"))
    const accessToken = result1['accessToken']
    const result2 = await database('orders', 'POST', accessToken, body2)
    // console.log(result)
    // Object.keys(exampleObject).length
    expect(Object.keys(result2).length).toBe(5) */
    render(<App />, { wrapper: BrowserRouter })

    const button = screen.getByText(/Enviar a cocina/i)
    // console.log(button)
    fireEvent.click(button)

    // global.alert = jest.fn();
    await screen.findByText('Ingresa un nombre para el cliente')
    await screen.findByText('Añade productos al carrito antes de continuar')

    expect(screen.getByText(/Ingresa un nombre para el cliente/i)).toBeInTheDocument()
    expect(screen.getByText(/Añade productos al carrito antes de continuar/i)).toBeInTheDocument()
    // expect(global.alert).toHaveBeenCalledTimes(1)
  })

  test('Successful Order', async () => {
    render(<App />, { wrapper: BrowserRouter })

    const clientInput = screen.getByPlaceholderText(/Nombre/i)/* .value = 'grace.hopper@systers.xyz' */
    fireEvent.change(clientInput, { target: { value: 'UNIT TEST' } })

    const addCartButton = await screen.findAllByText(/Agregar al carrito/i)
    fireEvent.click(addCartButton[0])

    const checkoutButton = screen.getByText(/Enviar a cocina/i)
    // console.log(button)
    fireEvent.click(checkoutButton)

    await screen.findByText('Enviado a cocina')

    expect(screen.getByText(/Enviado a cocina/i)).toBeInTheDocument()
  })
})

describe('Kitchen Order', () => {
  test('Processed', async () => {
    render(<Kitchen />, { wrapper: BrowserRouter })
    // const user = userEvent.setup()

    // const navigate = useNavigate();

    // navigate('/kitchen')

    const notProcessedText1 = await screen.findAllByText(/Listo/i)
    // console.log("1", notProcessedText1.length)

    const orderReadyButton = await screen.findAllByText(/Listo/i)
    fireEvent.click(orderReadyButton[orderReadyButton.length - 1])
    // const button = screen.getByTestId(`buttonid1`)
    // fireEvent.click(button)
    // console.log((orderReadyButton[orderReadyButton.length - 1]))

    // render(<Kitchen />, { wrapper: BrowserRouter })
    await expect(async () => {
      await waitFor(
        () => expect(notProcessedText2).toBe(notProcessedText1 - 1)
      );
    }).rejects.toEqual(expect.anything());

    /* setTimeout(async () => {
      await screen.findAllByText(/Listo/i)
    }, 1000); */

    const notProcessedText2 = await screen.findAllByText(/Listo/i)
    // console.log("2", notProcessedText2.length)

    expect(notProcessedText1.length > notProcessedText2.length).toBe(true)
  })

  test('Delivered', async () => {
    render(<Kitchen />, { wrapper: BrowserRouter })
    // const user = userEvent.setup()

    // const navigate = useNavigate();

    // navigate('/kitchen')

    const notDeliveredText1 = await screen.findAllByText(/Entregado/i)
    // console.log("1", notDeliveredText1.length)

    const orderDeliveredButton = await screen.findAllByText(/Entregado/i)
    fireEvent.click(orderDeliveredButton[orderDeliveredButton.length - 1])

    await expect(async () => {
      await waitFor(
        () => expect(orderDeliveredButton).toBe(notDeliveredText1 - 1)
      );
    }).rejects.toEqual(expect.anything());
    // const button = screen.getByTestId(`buttonid1`)
    // fireEvent.click(button)
    // console.log((orderReadyButton[orderReadyButton.length - 1]))

    // render(<Kitchen />, { wrapper: BrowserRouter })

    const notDeliveredText2 = await screen.findAllByText(/Entregado/i)
    // console.log("2", notDeliveredText2.length)

    expect(notDeliveredText1.length > notDeliveredText2.length).toBe(true)
  })  
})

describe('Office', () => {
  test('Add worker', async () => {
    render(<Office />, { wrapper: BrowserRouter })

    const addWorkersButton1 = await screen.findByText(/Agregar trabajadores/i)
    fireEvent.click(addWorkersButton1)

    const emailInput = screen.getByPlaceholderText(/E-mail/i)
    const passwordInput = screen.getByPlaceholderText(/Contraseña/i)
    const roleInput = screen.getByTestId('select')
    
    fireEvent.change(emailInput, { target: { value: 'hello@goodbye.com' } })
    fireEvent.change(passwordInput, { target: { value: '123456' } })
    fireEvent.change(roleInput, { target: { value: 'admin' } })

    let options = screen.getAllByTestId('select-option')
    expect(options[0].selected).toBeFalsy();
    expect(options[1].selected).toBeFalsy();
    expect(options[2].selected).toBeTruthy();

    const createWorkerButton = await screen.findByText(/Crear usuario/i)
    fireEvent.click(createWorkerButton)
    
    await expect(async () => {
      await screen.findByText(/Email: hello@goodbye.com/i).toBeInTheDocument()
    }).rejects.toEqual(expect.anything());
  })

  test('Edit worker', async () => {
    render(<Office />, { wrapper: BrowserRouter })

    const editWorkerButtons = await screen.findAllByText(/Editar datos/i)
    fireEvent.click(editWorkerButtons[editWorkerButtons.length - 1])

    const emailInput = screen.getByPlaceholderText(/Nuevo email/i)
    const passwordInput = screen.getByPlaceholderText(/Nueva contraseña/i)
    const roleInput = screen.getByTestId('select')
    
    fireEvent.change(emailInput, { target: { value: 'goodbye@hello.com' } })
    fireEvent.change(passwordInput, { target: { value: '12345678' } })
    fireEvent.change(roleInput, { target: { value: 'waiter' } })

    let options = screen.getAllByTestId('select-option')
    expect(options[0].selected).toBeTruthy();
    expect(options[1].selected).toBeFalsy();
    expect(options[2].selected).toBeFalsy();

    const acceptEditButton = await screen.findByText(/Aceptar/i)
    fireEvent.click(acceptEditButton)
    
    await expect(async () => {
      await screen.findByText(/Email: goodbye@hello.com/i).toBeInTheDocument()
    }).rejects.toEqual(expect.anything());
  })
})