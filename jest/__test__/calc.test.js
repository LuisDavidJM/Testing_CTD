const { suma, resta, multiplicacion, division } = require('../calc.js')

describe('Pruebas de suma', ()=>{
    test('Sumar dos numeros', ()=>{
        expect(suma(1,2)).toBe(3)
    })
    test('Sumar dos ceros', ()=>{
        expect(suma(0,0)).toBe(0)
    })
    test('Sumar no numeros', ()=>{
        expect(suma('a','b')).toBe(0)
    })
})
describe('Pruebas de resta', ()=>{
    test('Restar dos numeros', ()=>{
        expect(resta(3,2)).toBe(1)
    })
    test('Restar dos ceros', ()=>{
        expect(resta(0,0)).toBe(0)
    })
    test('Restar no numeros', ()=>{
        expect(resta('a','b')).toBe(0)
    })
})
describe('Pruebas de multiplicacion', ()=>{
    test('Multiplicar dos numeros', ()=>{
        expect(multiplicacion(4,2)).toBe(8)
    })
    test('Multiplicar dos ceros', ()=>{
        expect(multiplicacion(0,0)).toBe(0)
    })
    test('Multiplicar no numeros', ()=>{
        expect(multiplicacion('a','b')).toBe(0)
    })
})
describe('Pruebas de division', ()=>{
    test('Dividir dos numeros', ()=>{
        expect(division(10,2)).toBe(5)
    })
    test('Dividir no numeros', ()=>{
        expect(division('a','b')).toBe(0)
    })
})