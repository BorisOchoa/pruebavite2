import { useState,useEffect } from "react"
function Prueba(){

const [p,setP]=useState(0);

useEffect(()=>{
let timer=setTimeout(()=>{
    setP((x)=>(x+1));
},1000)
    return(()=>clearTimeout(timer));
}


)
return(
<>
<div>
    <button onClick={()=>{setP(first=>(first*2))}
    }>Prueba</button>
    {p}
    <p></p>
</div>

</>
)

}

export default  Prueba;