import React from "react";
import { useState } from "react";
function Entrada({setCat}){


function enviar(event)
{
    event.preventDefault();
    setCat(category);

}

    const [category,setCategory]=useState("");
return(
    <>
    <form onSubmit={event=>enviar(event)}>
    <label htmlFor="category">Categoria
         <input type="text" id="category" onChange={(event)=>{ setCategory(event.target.value)}} value={category}></input>
    </label>
    </form>
    </>
)

}
export default Entrada;