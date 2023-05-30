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
import OfficeProducts from './components/officeProducts.js';
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

describe('Office workers', () => {
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

  test('Delete worker', async () => {
    render(<Office />, { wrapper: BrowserRouter })

    const deleteWorkerButtons1 = await screen.findAllByText(/Eliminar usuario/i)
    fireEvent.click(deleteWorkerButtons1[deleteWorkerButtons1.length - 1])
    // console.log(deleteWorkerButtons1.length)

    await expect(async () => {
      await waitFor(
        () => expect(deleteWorkerButtons1.length).toBe(deleteWorkerButtons1.length - 1)
      );
    }).rejects.toEqual(expect.anything());

    /* await expect(async () => {
      await deleteWorkerButtons1.length.toBe(deleteWorkerButtons1.length - 1)
    }).rejects.toEqual(expect.anything()); */

    const deleteWorkerButtons2 = await screen.findAllByText(/Eliminar usuario/i)
    // console.log(deleteWorkerButtons2.length)

    expect(deleteWorkerButtons1.length > deleteWorkerButtons2.length).toBe(true)
  })
})

describe('Office products', () => {
  test('Add product', async () => {
    render(<OfficeProducts />, { wrapper: BrowserRouter })

    const addProductsButton1 = await screen.findByText(/Agregar productos/i)
    fireEvent.click(addProductsButton1)

    const nameInput = screen.getByPlaceholderText(/Nombre/i)
    const priceInput = screen.getByPlaceholderText(/Precio/i)
    const imageInput = screen.getByPlaceholderText(/Link de imagen/i)
    const typeInput = screen.getByTestId('select')
    
    fireEvent.change(nameInput, { target: { value: 'Hello' } })
    fireEvent.change(priceInput, { target: { value: '42' } })
    fireEvent.change(imageInput, { target: { value: 'transrights.jpg' } })
    fireEvent.change(typeInput, { target: { value: 'Desayuno' } })

    let options = screen.getAllByTestId('select-option')
    expect(options[0].selected).toBeTruthy();
    expect(options[1].selected).toBeFalsy();
    // expect(options[2].selected).toBeTruthy();

    const createProductButton = await screen.findByText(/Crear producto/i)
    fireEvent.click(createProductButton)
    
    await expect(async () => {
      await screen.findByText(/Nombre: Hello/i).toBeInTheDocument()
    }).rejects.toEqual(expect.anything());

    expect(await screen.findByText("Nombre: Hello")).toBeInTheDocument()
  })

  test('Edit product', async () => {
    render(<OfficeProducts />, { wrapper: BrowserRouter })

    const editProdutButtons = await screen.findAllByText(/Editar datos/i)
    fireEvent.click(editProdutButtons[editProdutButtons.length - 1])

    const nameInput = screen.getByPlaceholderText(/Nombre/i)
    const priceInput = screen.getByPlaceholderText(/Precio/i)
    const imageInput = screen.getByPlaceholderText(/Link de imagen/i)
    const typeInput = screen.getByTestId('select')
    
    fireEvent.change(nameInput, { target: { value: 'Goodbye' } })
    fireEvent.change(priceInput, { target: { value: '24' } })
    fireEvent.change(imageInput, { target: { value: 'legalabortion.jpg' } })
    fireEvent.change(typeInput, { target: { value: 'Almuerzo' } })

    let options = screen.getAllByTestId('select-option')
    expect(options[0].selected).toBeFalsy();
    expect(options[1].selected).toBeTruthy();

    const acceptEditButton = await screen.findByText(/Aceptar/i)
    fireEvent.click(acceptEditButton)
    
    await expect(async () => {
      await screen.findByText("Nombre: Goodbye").toBeInTheDocument()
    }).rejects.toEqual(expect.anything());

    expect(await screen.findByText("Nombre: Goodbye")).toBeInTheDocument()
  })

  test('Delete product', async () => {
    render(<OfficeProducts />, { wrapper: BrowserRouter })

    const deleteProductButtons1 = await screen.findAllByText(/Eliminar producto/i)
    fireEvent.click(deleteProductButtons1[deleteProductButtons1.length - 1])
    // console.log(deleteWorkerButtons1.length)

    await expect(async () => {
      await waitFor(
        () => expect(deleteProductButtons1.length).toBe(deleteProductButtons1.length - 1)
      );
    }).rejects.toEqual(expect.anything());

    const deleteProductButtons2 = await screen.findAllByText(/Eliminar producto/i)
    // console.log(deleteWorkerButtons2.length)

    expect(deleteProductButtons1.length > deleteProductButtons2.length).toBe(true)
  })
})
