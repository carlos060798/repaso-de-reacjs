# manejo de  prop-types  para obligar ha pasar los valores de los components 
--npm add prop-types
se inporta en el componente que se tarbaja asi
--import PropTypes from "prop-types";

-- asis emanejasn los tipos de datos que se vayan ha  almacenar en las props maejando los con las propTypes
FirstApp.propTypes = {
 nombre: PropTypes.string.isRequired
}