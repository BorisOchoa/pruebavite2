import { GifItem } from "./GifItem";
import {Giphy} from "./Giphy";
import { useEffect,useState } from "react";
import { useFetchGif } from "../hooks/useFetchGif";
export function GiphyListado({category}){

 
    
    const {images, isLoading}=useFetchGif(category);
    return(
        <>
       <h1>{category}</h1>
       {
        isLoading && <h2>Cargando...</h2> 

       }
       
       <div className="card-grid" >
        {images.map((image)=>{
            return(
            <GifItem key={image.id} {...image} />
            )
        }
           )}
       </div>
        </>
    )
}

