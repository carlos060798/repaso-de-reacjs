import PropTypes from "prop-types";
// eslint-disable-next-line react/prop-types
function FirstApp({nombre }) {
    // eslint-disable-next-line react/prop-types
    
 
    return ( <>
    <h1>First App</h1>
    <p>{nombre}</p>
    </> );
}

export default FirstApp;

FirstApp.propTypes = {
 nombre: PropTypes.string.isRequired
}