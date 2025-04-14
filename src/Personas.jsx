import Extraer from "./Extraer";
import { useEffect } from "react";

function Personas(){


    useEffect(()=>{
        const ex=Extraer();    
        console.log(ex);
    },[])
return(
<>
<table>
    <thead>
    <tr>
        <td>ID</td>
        <td>
            Nombre
        </td>
        <td>
            Apellido
        </td>
    </tr>



   
    </thead>


</table>
</>


);

}

export default Personas;