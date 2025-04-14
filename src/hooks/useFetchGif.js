import React, { useEffect, useState } from 'react'
import {Giphy} from '../components';

export const useFetchGif = (category) => {
    const [images,setImages]=useState([]);

    let isloading=true;
    
    const getImages=async()=>{
        const newImages=await Giphy(category);
        setImages(newImages);
        isloading=false;
    }
    useEffect(()=>{
        getImages();
    },[setImages])

  return {
    images,
    isloading,
  }
}
