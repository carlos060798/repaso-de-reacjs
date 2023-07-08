import getHeroesByPublisher from "../helpers/getHeroes";
import CardHeroe from "../../componet/CardHeroe";
import { useMemo } from "react";

function ListHeroes({publisher}) {
// useMemo memoriza el resultado de la funcion y solo se ejecuta cuando cambia el id
 const HeroeDc=useMemo(()=> getHeroesByPublisher( publisher) ,[publisher]);
    return ( <>
    
       <div className="row  rows-col-1 row-cols-md-3 g-3">
        {HeroeDc.map(heroe=> (
            <CardHeroe key={heroe.id} {... heroe} />
        ))}
       </div>
    </> );
}

export default ListHeroes;