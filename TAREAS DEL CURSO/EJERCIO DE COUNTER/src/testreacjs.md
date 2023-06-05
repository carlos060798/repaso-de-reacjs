#  para hacer testings de reactjs se intala la siguinte de pendencia de jest 

npm install --save-dev react-test-renderer 

#  para hacer testings de reactjs se intala la siguinte de pendencia de jest
--npm install --save-dev jest-environment-jsdom 

--npm install --save-dev @babel/preset-react  


#  para hacer testings de reactjs se intala la siguinte de pendencia de jest
--npm install whatwg-fetch 
npm install --save-dev @testing-library/react
# se deben hacer estas configuraciones en los archivos de babelrc y jest.config.js
/* eslint-disable no-undef */
module.exports = {
    presets: [
      ["@babel/preset-env",{targets:{esmodules:true}}],
      ["@babel/preset-react",{runtime:"automatic"}]
    ]
  }; 

en jest.config.js

# los snapshots son una forma de guardar el estado de un componente en un momento dado y luego compararlo con el estado actual del componente

-- ejemplo de un snapshot como test de compomente FirstApp.js
test("prueba uno hacer macth  snapshot", () => {
 const {container}=render(<FirstApp />);
 expect(container).toMatchSnapshot();
}) 

en este caso se modfico la primera linea eliminando un h1 del componente despues del snapshot se ejecuta el test y se genera un archivo .snap con el estado del componente en ese momento 

    - Snapshot  - 3
    + Received  + 0

    @@ -1,9 +1,6 @@
      <div>
    -   <h1>
    -     First App
    -   </h1>
        <p>
          Soy un valor por defecto
        </p>
        <p>
          24

       7 | test("prueba uno hacer macth  snapshot", () => {
       8 |  const {container}=render(<FirstApp />);
    >  9 |  expect(container).toMatchSnapshot();
         |                    ^
      10 | })
      11 | 

# se debe descomentar el componete FirstApp.js para que el test pase  sus respetivas pruebas