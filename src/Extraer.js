async function Extraer()
{
  const x=await fetch("http://192.168.1.33:8888/");
  const y= await x.json();
  //console.log(y);
  const z=y.map(person=>({
   
    id: person.id,
    nombre: person.nombre,
    apellido: person.apellido
    
  }))

  return z;
  

}
export default Extraer;