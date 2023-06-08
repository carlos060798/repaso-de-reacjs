/* custom Hook  useFetchGits es un hook personalisado que carga toda la logica  de la consulta del api
y permite trasmitirla acualquier componente solo con su  llamado */



import { useEffect, useState } from "react";
import { getGits } from "../helpers/getGits";
function useFetchGits(category) {
    const [images,setImages]=useState([])  
    const [isLoading, setIsLoading] = useState(true);

    const getImages=async()=>{
      const  newImages=await getGits(category)
      setImages(newImages)
      setIsLoading(false)
    }
    useEffect(() => {
        getImages()
    }, []); 
    return {
     Images:images,
     isLoading: isLoading,

    } ;
}

export default useFetchGits;