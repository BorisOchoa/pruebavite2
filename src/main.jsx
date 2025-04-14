import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import App from './App.jsx'
import Extraer from './Extraer.js'
import Entrada from './Entrada.jsx'
import Listado from './Listado.jsx'
import Prueba from './prueba.jsx'
//createRoot(document.getElementById('root')).render(
ReactDOM.createRoot(document.getElementById('root')).render(
<StrictMode>
  <Prueba/>
  <Listado/>
   
  </StrictMode>
)
//)
