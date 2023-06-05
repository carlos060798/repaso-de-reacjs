import PropTypes from "prop-types";
// eslint-disable-next-line react/prop-types
export function FirstApp({nombre,edad }) {
    // eslint-disable-next-line react/prop-types
    
    return ( <>
      <h1>First App</h1>
    <p data-testid="test-nombre">{nombre}</p>
    <p>{edad}</p>
    </> );
}



FirstApp.propTypes = {
 nombre: PropTypes.string.isRequired,
 edad: PropTypes.number
}

FirstApp.defaultProps = {
    nombre: "Soy un valor por defecto",
    edad: 24
}