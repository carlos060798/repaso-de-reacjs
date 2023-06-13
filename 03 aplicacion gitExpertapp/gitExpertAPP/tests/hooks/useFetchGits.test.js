import { renderHook, waitFor } from "@testing-library/react";
import useFetchGits from "../../src/hooks/useFetchGits";

describe( " pruebas en el useFetchGits", (
// renderHook es una funcion que permite renderizar un hook sin nesesidad de renderizar un componente que lo contenga 
) => {
 test( " debe de retornar el estado inicial", () => {
const { result } = renderHook( () => useFetchGits( "One Punch" ) );
const { Images, isLoading } = result.current;   
expect( Images.length ).toBe( 0)
expect( isLoading ).toBeTruthy();
 })

    test( " debe de retornar un arreglo de imagenes y el loading en false", async () => {
        const { result } = renderHook( () => useFetchGits( "One Punch" ) );
        // await waitFor( ()=> result.current.Images.length > 0 ) para evaluar la ejecucion de la promesa de carga de imagenes
        await waitFor(  ()=> expect( result.current.Images.length ).toBeGreaterThan( 0 ))
        const { Images, isLoading } = result.current;
        expect( Images.length ).toBeGreaterThan(0);
        expect( isLoading ).toBeFalsy();
    } );

} );
