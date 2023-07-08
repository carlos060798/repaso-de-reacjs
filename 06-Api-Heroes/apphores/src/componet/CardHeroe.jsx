import { Link } from "react-router-dom";

const  CharactersByHeroe=({ characters, alter_ego })=>{
    return (alter_ego===characters)? <></>:<p className="card-text">{characters}</p>
}

function CardHeroe({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}) {
  const heroImageURL = `/assets/heroes/${id}.jpg`;
  
  return (
    <div className="col animate__animated animate__fadeIn">
      <div className="card">
        <div className="row no-gutters">
          <div className="col-4">
            <img src={heroImageURL}  className="card-img"alt={superhero} />
          </div>
          <div className="col-8">
            <div className="card-body">
              <h5 className="card-title">{superhero}</h5>
              <p className="card-text">{alter_ego}</p>
                <CharactersByHeroe characters={characters} alter_ego={alter_ego} />
              <p className="card-text">
                <small className="text-muted">{first_appearance}</small>
              </p>
            
              <Link to={`/heroe/${id}`}    > Mas...</Link> 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardHeroe;
