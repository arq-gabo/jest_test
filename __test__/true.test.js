import { TestScheduler } from 'jest'
import {  isNull,
          isTrue,
          isFalse,
          isUndefined } from '../true'

describe('Probar resultados nulos', () => {
    test('null', () => {
        expect(isNull()).toBeNull()
    })
})

describe('Probar resultados verdaderos', () => {
    test('true', () => {
        expect(isTrue()).toBeTruthy()
    })
})

describe('Probar resultados falsos', () => {
    test('false', () => {
        expect(isFalse()).toBeFalsy()
    })
})

describe('Probar resultados indefinidos', () => {
    test('undefined', () => {
        expect(isUndefined()).toBeUndefined()
    })
})

describe('Probar resultados no verdaderos', () => {
    test('false or true', () => {
        expect(isFalse()).not.toBeTruthy()
    })
})