import React from "react";
import Entrada  from "./Entrada";
import {GiphyListado} from "./components";
import {useState} from 'react';
function Listado(){
   const [category, setCategory]=useState([]);

    function setCat(props){
      setCategory([...category,props]);
    }
    return(
        <>
        <Entrada setCat={setCat}/>

          {category.map(cat=>(
            <div key={cat} >
            <GiphyListado category={cat}/>
            </div>
          )


          )}
       
        </>
    );

}

export default Listado;