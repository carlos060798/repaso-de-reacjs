import {render,screen} from "@testing-library/react"
import GitItem from "../../src/component/GifItem"

describe("pruebas de GifItem", () => {
   const title="un titulo"
   const url="https://www.google.com/url?sa=i&url=https%3A%2F%2Fonepunchman.fandom.com%2Fes%2Fwiki%2FSaitama&psig=AOvVaw29qFZIdcFzWNibrFhR9oi3&ust=1686432259440000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCOjUqO-Pt_8CFQAAAAAdAAAAABAE"
 /*test("debe hacer match con el snapshot", () => {
   const{container}= render(<GitItem  title={title} url={url}/>)
    expect (container).toMatchSnapshot();
 })*/
 test("debe mostart la imagen con la url y el titulo", () => {
   render(<GitItem  title={title} url={url}/>)
   //screen.debug()
   // desestruturacion del objeto  screen.getByRole('img')
   const {src,alt}=screen.getByRole('img')
   expect(src).toBe(url)
   expect(alt).toBe(title)

 })
 test("debe mostar el titulo en el componente", () => {
   render(<GitItem  title={title} url={url}/>)
   expect(screen.getByText(title)).toBeTruthy()
 })
})