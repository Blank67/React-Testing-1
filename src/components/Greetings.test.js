import { render, screen } from "@testing-library/react"
import Greetings from "./Greetings"

describe('Greeting component tests', () => {
    test('renders Welcome User as a text', () => {
        //Arrange test
        render(<Greetings />)

        //Act
        //...for now do nothing

        //Assert
        const element = screen.getByText('Welcome user', { exact: false }); //excat false to ignore case 
        expect(element).toBeInTheDocument();
    })
})