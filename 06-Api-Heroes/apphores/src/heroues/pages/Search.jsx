import { useLocation, useNavigate } from "react-router-dom";
import CardHeroe from "../../componet/CardHeroe";
import { useForm } from "../hooks/useForm";
import queryString from 'query-string'
import getHeroeByName from "../helpers/getHeroesByName";

function Search() {
   const navige=useNavigate()
  const  location=useLocation()
  const{ q=""} =queryString.parse(location.search)
  const heroes=getHeroeByName(q)

    const{searchText,onInputChange} =useForm({
        searchText:q
    })

    const handleSubmit=(e)=>{
        e.preventDefault()
        if(searchText.trim().length<=1)return
        navige(`?q=${searchText}`)
      

    }
  return (
    <>
      <div className="container row">
        <div className="col-5">
          <h1>busqueda</h1>
          <hr />
          <form onSubmit={handleSubmit}>
            <input
              className="form-control"

           
                type="text"
              name="searchText"
            
                value={searchText}
                onChange={onInputChange}
            />
          
            <button className="btn btn-online-primary mt-1">Buscar</button>
          </form>
        </div>
        <div className="col-7">
            <h1>Resultados</h1>
            <hr/>
            {(q==='') ?<div className=" alert alert-primary "> 
              search results a hero
            </div>:(heroes.length === 0)&& (<div className=" alert alert-danger "> 
              search results not <b>{q}</b>
            </div> )}
           
        {heroes.map(heroe=>(<CardHeroe key={heroe.id} {... heroe}/>))}
      </div>
      </div>
    </>
  );
}

export default Search;
