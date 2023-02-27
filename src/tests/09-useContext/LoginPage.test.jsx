import { fireEvent, render, screen } from "@testing-library/react";
import { UserContext } from "../../09-useContext/context/UserContext";
import { LoginPage } from "../../09-useContext/LoginPage";


describe('Pruebas en <LoginPAge />', () => { 

  const user = {
    id: 1,
    name: 'Stefano'
  }

  const setUserMock = jest.fn();

  test('debe mostar el componente con el usuario', () => { 

    render( 
      <UserContext.Provider value={{ user, setUser: setUserMock }} >
        <LoginPage />
      </UserContext.Provider>
    )

    const preTag = screen.getByLabelText('pre');
    expect(preTag.innerHTML).toContain(user.name);

  })

  test('debe llamar la funcion setUserMock haciendo click en el boton', () => { 

    render( 
      <UserContext.Provider value={{ user, setUser: setUserMock }} >
        <LoginPage />
      </UserContext.Provider>
    )

    screen.debug();

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(setUserMock).toHaveBeenCalledWith({ id: 123, name: 'Juan', email: 'juan@google.com' });

  })


})