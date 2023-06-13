import { fireEvent, render, screen } from "@testing-library/react";
import AddCategory from "../../src/component/AddCategory";

describe("Pruebas en <AddCategory />", () => {
  test("debe de mostrarse correctamente el cambio de valor los del input", () => {
    render(<AddCategory onNewCategory={() => {}} />);
    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "saitama" } });
    //screen.debug(); mirar cambios simulado
    expect(input.value).toBe("saitama");
  });
  test("debe mostar  el  valor enviado por el form", () => {
    const inputValue = "saitama";
  // ejemplo de mock que es una simulacion de funcion   
   const onNewCategory = jest.fn();
    render(<AddCategory onNewCategory={onNewCategory} />);
    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");
    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit(form);
    //para saber el valor del input es un string
    expect(input.value).toBe("");
    // para saber si la funcion se llamo
    expect(onNewCategory).toHaveBeenCalled();
    // para saber cuantas veces se llamo caso 1
    expect(onNewCategory).toHaveBeenCalledTimes(1);
    // para saber que se llamo con un argumento del inputValue
    expect(onNewCategory).toHaveBeenCalledWith(inputValue);
  });
  test('no debe de llamar la funcion onNewCategory si esta vacio el input', () => {
   
    const onNewCategory = jest.fn();
    render(<AddCategory onNewCategory={onNewCategory} />);
    const form = screen.getByRole("form");
    fireEvent.submit(form);
    expect(onNewCategory).toHaveBeenCalledTimes(0);
    expect(onNewCategory).not.toHaveBeenCalled();
  })
});
