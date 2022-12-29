import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import Greetings from "./Greetings"

describe('Greeting component tests', () => {
    test('renders Welcome User as a text', () => {
        //Arrange test
        render(<Greetings />);

        //Act
        //...for now do nothing

        //Assert
        const element = screen.getByText('Welcome user', { exact: false }); //excat false to ignore case 
        expect(element).toBeInTheDocument();
    })

    test('renders logged in if button is not clicked', () => {
        render(<Greetings />);

        const element = screen.getByText('You are logged in.', { exact: false });
        expect(element).toBeInTheDocument();
    })

    test('renders changed when button is clicked', () => {
        //Arrange
        render(<Greetings />);

        //Act
        const button = screen.getByRole('button');
        userEvent.click(button);

        //Asert
        const element = screen.getByText('Changed.', { exact: false });
        expect(element).toBeInTheDocument();
    })

    test('does not renders logged in if button is clicked', () => {
        render(<Greetings />);

        const button = screen.getByRole('button');
        userEvent.click(button);

        const element = screen.queryByText('You are logged in.', { exact: false }); //because getByText throw error if element is not found
        expect(element).not.toBeInTheDocument();
    })
})