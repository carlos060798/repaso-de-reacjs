# temas del proyecto


Custom Hooks

Fetch hacia un API

Comunicación entre componentes

Clases de CSS

Animaciones

Enviar métodos como argumentos

Crear listados

keys

Giphy 

# SE CREA UNA CUENTA PARA EL CONSUMO DE API DE  giphy.com para estraer la key para la api 
--z7ZuNe0lFi48cNvlOU1bldOAp2cMaLhQ

# consulta inicial del api key url
api.giphy.com/v1/gifs/search?api_key=z7ZuNe0lFi48cNvlOU1bldOAp2cMaLhQ  
?api_key=z7ZuNe0lFi48cNvlOU1bldOAp2cMaLhQ -parametro del api key
# url de consulta con el parametro de busqueda
api.giphy.com/v1/gifs/search?api_key=z7ZuNe0lFi48cNvlOU1bldOAp2cMaLhQ&q=valorant
&q=valorant - parametro de busqueda 

# configuracion de  de ambiente para test 
# 1-Instalación y configuración de Jest + React Testing Library
En proyectos de React + Vite
Instalaciones:
npm install --save-dev jest babel-jest @babel/preset-env @babel/preset-react
npm install --save-dev @testing-library/react @types/jest jest-environment-jsdom

Opcional: Si usamos Fetch API en el proyecto:
 npm install --save-dev  whatwg-fetch 
Actualizar los scripts del paquete.json
"scripts: {
  ...
  "test": "jest --watchAll"
Crear la configuración de babel babel.config.cjs
module.exports = {
    presets: [
        [ '@babel/preset-env', { targets: { esmodules: true } } ],
        [ '@babel/preset-react', { runtime: 'automatic' } ],
    ],
};
Opcional, pero eventualmente necesario, crear Jest config y setup:
jest.config.cjs

module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    setupFiles: ['./jest.setup.js']
}
jest.setup.js

// En caso de necesitar la implementación del FetchAPI
import 'whatwg-fetch'; // <-- yarn add whatwg-fetch 

para manejo de prototipos
npm install --save-dev prop-types