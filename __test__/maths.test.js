import { TestScheduler } from 'jest'
import { sumar, multiplicar, restar, dividir} from '../maths'

describe('Calculos matematicos', () => {
    test('Prueba de suma', ()=> {
        expect(sumar(1, 1)).toBe(2)
    })
    test('Prueba de multiplicar', () => {
        expect(multiplicar(2, 2)).toBe(4)
    })
    test('Prueba de resta', () => {
        expect(restar(10, 5)).toBe(5)
    })
    test('Prueba de división', () => {
        expect(dividir(20, 5)).toBe(4)
    })
})