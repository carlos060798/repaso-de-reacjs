import ListHeroes from "./ListHeroe";

function MarvelPages() {
    return (<>
    <div className="container">
     <h2>desde  Marvel</h2>
     <ListHeroes publisher={'Marvel Comics'}/>
     </div>
    </>  );
}

export default MarvelPages;