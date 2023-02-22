import { act, renderHook } from "@testing-library/react"
import { useCounter } from "../../hooks/useCounter"


describe('Pruebas en useCounter', () => { 
    test('debe retornar los valores por defecto', () => { 

        const {result} = renderHook( () => useCounter() );
        const { counter, increment, decrement, reset } = result.current;

        expect( counter ).toBe( 10 );
        expect( typeof increment ).toBe( 'function' );
        expect( typeof decrement ).toBe( 'function' );
        expect( typeof reset ).toBe( 'function' );
    })

    test('debe de generar el counter con el valor de 100', () => { 

        const {result} = renderHook( () => useCounter(100) );
        const { counter, increment, decrement, reset } = result.current;

        expect( counter ).toBe( 100 );
    })

    test('debe aumentar el contador', () => { 

        const {result} = renderHook( () => useCounter() );
        const { counter, increment, decrement, reset } = result.current;

        act( () => {
            increment();
        });

        expect(result.current.counter).toBe(11);

    })

    test('debe disminuir el contador', () => { 

        const {result} = renderHook( () => useCounter() );
        const { counter, increment, decrement, reset } = result.current;

        act( () => {
            decrement();
        });

        expect(result.current.counter).toBe(9);

    })

    test('debe aumentar el contador', () => { 

        const {result} = renderHook( () => useCounter() );
        const { counter, increment, decrement, reset } = result.current;

        act( () => {
            increment();
            reset();
        });

        expect(result.current.counter).toBe(10);

    })
})
