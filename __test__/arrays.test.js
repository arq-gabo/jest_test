import { arrayFruits, arrayColors } from '../arrays'

describe('Comprobar que existe un elemento', () => {
    test('Contiene banana', () => {
        expect(arrayFruits()).toContain('banana')
    })
    test('No contiene platano', () => {
        expect(arrayFruits()).not.toContain('platano')
    })
    test('Comprobar tamaño de un arreglo', () => {
        expect(arrayFruits()).toHaveLength(6)
    })
    test('Comprobar que existe un color', () => {
        expect(arrayColors()).toContain('azul')
    })
})
