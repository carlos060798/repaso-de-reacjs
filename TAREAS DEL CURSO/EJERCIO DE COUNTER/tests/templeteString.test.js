import { getSaludo } from '../src/pruebasJs/templeteString';

/* eslint-disable no-undef */
describe(' Pruebas Template String', () => {

test('Template String', () => {
 const nombre = 'Carlos';
 const mensaje = getSaludo(nombre); 

 expect(mensaje).toBe(`Hola ${nombre}`);
});

});