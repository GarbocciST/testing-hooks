import { render, screen } from "@testing-library/react";
import { TodoApp } from "../../08-useReducer/TodoApp";
import { useTodos } from "../../hooks/useTodos"

jest.mock('../../hooks/useTodos');


describe('Pruebas en TodoApp', () => { 
    
    useTodos.mockReturnValue({
        todos: [
            { id: 1, description: 'Todo #1', done: false },
            { id: 2, description: 'Todo #2', done: true }
        ],
        todosCount: 2,
        pendingTodosCount: 1,
        handleDeleteTodo: jest.fn(),
        handleToggleTodo: jest.fn(),
        handleNewTodo: jest.fn()
    })

    beforeEach(() => {
        jest.clearAllMocks();
    })

    test('debe mostrar el componente correctamente', () => { 

        render(<TodoApp />)
        // screen.debug();
        const h1 = screen.getAllByRole('heading', { name: "TodoApp: 2, pendientes: 1" });
        const span1 = screen.getByText('Todo #1');
        const span2 = screen.getByText('Todo #2');

        expect(h1).toBeTruthy();
        expect(span1).toBeTruthy();
        expect(span2).toBeTruthy();
    })

})