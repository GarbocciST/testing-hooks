import { act, renderHook } from "@testing-library/react"
import { useForm } from "../../hooks/useForm"


describe('Pruebas en useForm', () => { 

    const initialForm = {
        name: 'Juancito',
        id: '123456',
    }
    
    const event = {
        target: {
            name: 'name',
            value: 'Stefano',
        }
    }
    
    test('debe retornar los valores iniciales', () => { 

        const {result} = renderHook( () => useForm() );

        const { formState, onInputChange, onResetForm } = result.current;

        expect( formState ).toEqual( {} );

    })
    
    test('debe tener un valor inicial el formstate', () => { 

        const {result} = renderHook( () => useForm(initialForm) );

        const { formState, onInputChange, onResetForm } = result.current;

        expect( formState ).toEqual( {
            name: 'Juancito',
            id: '123456',
        });

    })
    
    test('debe cambiar el valor del formulario', () => { 

        const {result} = renderHook( () => useForm(initialForm) );

        const { formState, onInputChange, onResetForm } = result.current;

        act( () => {
        onInputChange( event );
        });

        expect( result.current.formState ).toEqual( {
            name: 'Stefano',
            id: '123456',
        });
    })

    test('debe cambiar el valor del formulario', () => { 

        const {result} = renderHook( () => useForm() );

        const { formState, onInputChange, onResetForm } = result.current;

        act( () => {
        onInputChange( event );
        onResetForm()
        });

        expect( result.current.formState ).toEqual( {} );
    })



    
})