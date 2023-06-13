import {  getGits } from "../../src/helpers/getGits";
describe("getGifs helper", () => {
test("should return un arreglo de gits", async () => {
    const gits = await  getGits("One Punch");
    // debe evaluar que el arreglo no este vacio
    expect(gits.length).toBeGreaterThan(0);
    // debe evaluar que el arreglo tenga la estructura correcta
    expect(gits[0]).toEqual(
        {   id:expect.any(String),
            titule:expect.any(String),
            url:expect.any(String)
           }
    )
});});