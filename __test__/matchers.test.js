describe('Comparadores comunes', () => {
    const user = {
        name: "aaron",
        lastname: "guerra"
    }

    const user2 = {
        name: "aaron",
        lastname: "guerra"
    }

    const user3 = {
        name: "aaron2",
        lastname: "guerra2"
    }

    test('Igualdad de elementos', () => {
        expect(user).toEqual(user2)
    })

    test('No son iguales', () => {
        expect(user).not.toEqual(user3)
    })
})