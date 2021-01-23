import { callbackHell } from '../callback'

describe('probando un callback', () => {
    test('Callback', done => {
        function otherCallback(data){
            expect(data).toBe('Hola javaScript')
            done()
        }
        callbackHell(otherCallback)
    })
})