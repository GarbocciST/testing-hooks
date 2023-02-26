import { fireEvent, render, screen } from "@testing-library/react"
import { TodoItem } from "../../08-useReducer/TodoItem"

describe('Pruebas en TodoItem', () => { 
  
  const todo = {
    id: 1,
    description: 'Aprender React',
    done: false
  }

  const onDeleteTodoMock = jest.fn();
  const onToggleTodoMock = jest.fn();

  beforeEach( () => {
    jest.clearAllMocks();
  })

  test('debe recibir un todo', () => { 

    render(<TodoItem todo={todo} />)
    // screen.debug();
    expect( screen.getByText( todo.description ) );
    expect( screen.getByText( 'Borrar' ) );

  })
  

  test('debe tachar un todo como completado', () => { 

    const todo2 = {
      id: 1,
      description: 'Aprender React',
      done: true
    }

    render(<TodoItem todo={todo2} onDeleteTodo={onDeleteTodoMock} onToggleTodo={onToggleTodoMock} />)
    
    const span = screen.getByText( todo2.description );

    expect(span.className).toBe('align-self-center text-decoration-line-through');

  })

  test('debe llamar la fn onToggleTodo al hacer click en el span', () => { 

    render(<TodoItem todo={todo} onDeleteTodo={onDeleteTodoMock} onToggleTodo={onToggleTodoMock} />)
    // screen.debug();
    
    const span = screen.getByText( todo.description );
    fireEvent.click( span );
    
    expect( onToggleTodoMock).toHaveBeenCalledTimes(1);

  })
  
  test('debe llamar la fn onDeleteTodo al hacer click en el button', () => { 

    render(<TodoItem todo={todo} onDeleteTodo={onDeleteTodoMock} onToggleTodo={onToggleTodoMock} />)
    // screen.debug();
    
    const button = screen.getByText( 'Borrar' );
    fireEvent.click( button );
    
    expect( onDeleteTodoMock).toHaveBeenCalledTimes(1);

  })

})