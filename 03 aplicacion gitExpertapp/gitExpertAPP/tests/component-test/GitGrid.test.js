import { render, screen } from "@testing-library/react";
import GitGrid from "../../src/component/GitGrid";
import useFetchGits from "../../src/hooks/useFetchGits";
//simulacion de un hook useFetchGits
jest.mock("../../src/hooks/useFetchGits");
describe("Pruebas en <GitGrid />", () => {
  const category = "One Punch";
  test("debe de mostrar loading", () => {
    // moock  que simula el hook useFetchGits
    useFetchGits.mockReturnValue({
      Images: [],
      isLoading: true,
    });
    render(<GitGrid category={category} />);
    screen.getByText("Loading...");
    expect(screen.getByText(category));
  });

  test("debe de mostrar items cuando se cargan imagenes useFetchGifs", () => {
    // moock de cualquier hook
    const gifs = [
      {
        id: "123",
        title: "cualquier cosa 1",
        url: "https://localhost/cualquier/cosa.jpg",
      },
      {
        id: "456",
        title: "goku vs naruto",
        url: "https://localhost/cualquier2/cosa.jpg",
      },
      {
        id: "789",
        title: "cualquier cosa",
        url: "https://localhost/cualquier2/cosa.jpg",
      },
    ];
    useFetchGits.mockReturnValue({
      Images: gifs,
      isLoading: false,
    });
    render(<GitGrid category={category} />);
    screen.debug();
    // evalua numero de elementos retornados en el arreglo de gifs img
     expect(screen.getAllByRole("img").length).toBe(3);
  });
});
