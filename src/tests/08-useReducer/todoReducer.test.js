
import { todoReducer } from "../../08-useReducer/todoReducer";


describe('Pruebas en todoReducer', () => { 

    const initialState = [{
        id: 1,
        description: 'Demo Todo',
        done: false
    }]

    test('debe regresar el estado inicial', () => { 

        const newState = todoReducer(initialState, {});
        expect(newState).toBe(initialState);
    })

    test('debe agregar un todo', () => { 

        const action = {
            type: '[TODO] Add Todo',
            payload: {
                id: 2,
                description: 'Aprender React',
                done: false
            }
        }

        const newState = todoReducer(initialState, action);

        expect(newState.length).toBe(2);
        expect( newState ).toContain( action.payload );
        
    })

    test('debe quitar un todo', () => { 

        const action = {
            type: '[TODO] Remove Todo',
            payload: 1
        }

        const newState = todoReducer(initialState, action);

        expect(newState.length).toBe(0);
        
    })

    test('debe marcar un todo como done', () => { 

        const action = {
            type: '[TODO] Toggle Todo',
            payload: 1
        }

        const newState = todoReducer(initialState, action);

        const {done} = newState[0];

        expect(newState.length).toBe(1);
        expect(done).toBe(true);

        const newState2 = todoReducer(newState, action);
        const {done: done2} = newState2[0];

        expect(done2).toBe(false);
        
    })


})