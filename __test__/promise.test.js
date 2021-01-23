'use strict'

import { getDataFromApi } from '../promise'

describe('Probando promesas', () => {
    test('Haciendo una petición a una API', done => {
        const api = 'https://rickandmortyapi.com/api/character/'
        getDataFromApi(api).then(data => {
            expect(data.results.length).toBeGreaterThan(0)
            done()
        })
    })
})