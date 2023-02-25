import { act, fireEvent, render, renderHook, screen } from "@testing-library/react"
import { MultipleCustomHooks } from "../../03-examples"
import { useFetch } from "../../hooks/useFetch"
import { useCounter } from "../../hooks/useCounter"

jest.mock('../../hooks/useFetch')
jest.mock('../../hooks/useCounter')


describe('Pruebas en MultipleCutomHook', () => { 
    
    const mockIncrement = jest.fn();
    
    useCounter.mockReturnValue({
        counter: 1,
        increment: mockIncrement
    })

    beforeEach( () => {
        jest.clearAllMocks();
    })

    test('debe renderizar el commponente', () => { 
        useFetch.mockReturnValue({
            data: null ,
            isLoading: true,
            hasError: null
        })

        render(<MultipleCustomHooks />)
       
        expect( screen.getByText('Loading...') )
        expect( screen.getByText('BreakingBad Quotes') )
        const nextButton =  screen.getByRole('button', {name: 'Next quote' })

        expect(nextButton.disabled).toBe(true)
    })

    test('debe de mostrar un Quote', () => { 
        
        useFetch.mockReturnValue({
            data: [{ author: 'Fernando', quote: 'Hola Mundo' }],
            isLoading: false,
            hasError: null
        })

        render(<MultipleCustomHooks />)
        // screen.debug();
        expect( screen.getByText('Hola Mundo') )
        expect( screen.getByText('Fernando') )
        
        const nextButton =  screen.getByRole('button', {name: 'Next quote' })
        expect(nextButton.disabled).toBe(false)

    })

    test('debe de llamar la duncion de incrementar', () => { 


        useFetch.mockReturnValue({
            data: [{ author: 'Fernando', quote: 'Hola Mundo' }],
            isLoading: false,
            hasError: null
        })


        render(<MultipleCustomHooks />)
        // screen.debug();

        const nextButton =  screen.getByRole('button', {name: 'Next quote' })
        fireEvent.click(nextButton);

        // expect(increment).toHaveBeenCalled();
    })

})
