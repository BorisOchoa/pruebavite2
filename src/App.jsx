import './App.css'
import {useState} from 'react';
import Personas from './Personas';

 function App(){

  const [count,setCount]=useState(0);
  return<>
  <button onClick={()=>setCount((co)=>co+1)}> Aumentar conteo</button>
  <p id="conteo">{count}</p>

  <ul>
<li>Prueba 1</li>
<li>Prueba 2</li>

  </ul>
  <Personas/>
  </>


}



export default App;