# prubas de testing en aplicacion de counter 
se instala con el comando
-- npm install --save-dev jest

# se crea la carpeta __test__ y dentro de ella el archivo counter.test.js 
 se crea el archivo demo.test.js para hacer la primera prueba 
-- ejemplo de modelo de prueba
 test ("esta prueba no hace nada", () => {
 // eslint-disable-next-line no-constant-condition
 if( 2===2){
     throw new Error("algo anda mal")
 }
}) 

# se instala la siguiente dependencia para mejorar el testeo
-- npm add -D @types/jest 

# se instala la siguiente dependencia para  manejo de babel y poder usar las ultimas caracteristicas de js en el testeo
npm install --save-dev babel-jest @babel/core @babel/preset-env 

# para evitar errores como este en futuros test se renombra la carpeta babel.config.cjs  

-- Ejemplo de Error
You appear to be using a native ECMAScript module configuration file, which is only supported when running Babel asynchronously.