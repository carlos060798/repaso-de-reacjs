 import { useEffect, useState } from "react";
 import GifItem from "./GifItem";
import useFetchGits from "../hooks/useFetchGits";

function GitGrid({ category }) { 

const {Images, isLoading}= useFetchGits(category)
 console.log( isLoading);
  return (
    <>
      <h3>{category}</h3> 
      {
      isLoading && <p>Loading...</p>
      }

     <div className="card-grid"> 
         {Images.map((Image) => (
      
         <GifItem key={Image.id}
         {...Image}
         />
         ))
          

         }
     </div>
    </>
  );
}

export default GitGrid;
