import { getGifs } from "../../helpers/getGifs"

describe('Pruebas a helpers de getGifs fetch', () => {
    test('debe traer 10 elementos ', async () => {
        const gifs = await getGifs('futurama');
        expect(gifs.length === 10).toBe(true);
    });

    test('no debe traer gifs, sino tiene categoria ', async () => {
        const gifs = await getGifs('');
        expect(gifs.length).toBe(0);
    })


}) 