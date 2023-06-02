# Burger Queen (API Client)

## Índice

* [1. Resumen del proyecto](#1-resumen-del-proyecto)
* [2. Objetivos de aprendizaje](#2-objetivos-de-aprendizaje)
* [3. Caracteristicas generales](#3-caracteristicas-generales)
* [4. Funcionalidad](#4-funcionalidad)
* [5. Despliegue](#5-despliegue)
* [6. Recursos](#6-recursos)

***

## 2. Resumen del proyecto

App para uso en restaurante, cuenta con vistas de uso para los meseros, cocineros y administradores.

***

## 3. Herramientas usadas

### HTML

### CSS

### JavaScript

### Git y GitHub

### React

***

## 4. Caracteristicas generales

* Se a usado React como framework.
* El proyecto usa un API Mock para la base de datos.
* Se a considerado principalmente su uso en tablet.
* Cuenta con test unitarios.

***

## 5. Criterios de aceptación del proyecto

El producto cuenta con 4 vistas una para cada cargo (mesero, cocinero y administrador) y otra para hacer "login", cada vista cuenta con su funcionalidad respectiva.

### Login

* Logo de la compañia.
* Casillas de texto para ingresar e-mail y contraseña.
* Mensajes de error comprensibles.
* Te lleva inmediatamente a la vista de menu al ingresar.

### Menu

* Filtro para visualizar solo los productos del desayuno, almuerzo/cena o todos.
* Cuadros para cada producto que cuenta con imagen, nombre del producto, precio y boton para agregar productos de forma unitaria.
* Casilla para nombre del cliente.
* Cuadro para ver el resumen y el total de la compra.
* Una ves agregados los productos se pueden agregar mas y remover del resumen de forma unitaria o remover en su totalidad.
* Boton para enviar productos a la cocina.

### Cocina

* Cuadros para visualizar cada producto que llega a cocina.
* Botones para marcar cuando un producto esta listo para ser enviado a mesa o para marcar si ya a sido entregado a la mesa.

### Oficina

* Header para visualizar trabajadorxs o productos.

### Trabajadores

* Cuadros para ver listado de trabajadorxs.
* Cada cuadro contiene botones para editar datos de los trabajadorxs o eliminarlos.
* Cuadro para agregar trabajadorxs.

### Productos

* Cuadros para ver listado de productos.
* Cada cuadro contiene botones para editar datos de los productos o eliminarlos.
* Cuadro para agregar productos.

***

## 6. Despliegue

El proyecto desplegado y su mock respectivo se puede encontrar en los siguientes links:

* [App](https://burger-queen-api-client-alexa.netlify.app/)
* [Mock](https://burger-queen-api-mock-alexa.glitch.me/)

***

## 7. Pistas / Tips

### Frameworks / libraries

* [Routeing](https://www.youtube.com/watch?v=Ul3y1LXxzdU)
* [Navigate](https://stackoverflow.com/questions/64838587/how-to-properly-use-usehistory-from-react-router-dom)

### Herramientas

* [Style editing with onClick](https://bobbyhadz.com/blog/react-change-style-on-click)
* [Protected routes](https://www.youtube.com/watch?v=2k8NleFjG7I)
* [Solution to testing in React](https://testing-library.com/docs/react-testing-library/intro/#the-problem)
* [Current date](https://stackoverflow.com/questions/43744312/react-js-get-current-date)
* [Data fetch](https://www.developerway.com/posts/how-to-fetch-data-in-react)
* [Loops](https://www.pluralsight.com/guides/how-to-implement-a-component-%22loop%22-with-react)

### PWA

* [Spread operator (...)](https://fjolt.com/article/javascript-three-dots-spread-operator)
* [Router testing](https://testing-library.com/docs/example-react-router/)
* [waitFor](https://testing-library.com/docs/dom-testing-library/api-async/#waitfor)
* []()
