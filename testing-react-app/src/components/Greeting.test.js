import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("Greeting component", () => {
    test("renders Hello world as a text", () => {
        // Arrange
        render(<Greeting />);

        // Act
        // ... nothing

        // Assert
        const helloWorldElement = screen.getByText("Hello world", {
            exact: false,
        });
        expect(helloWorldElement).toBeInTheDocument();
    });
	
	test("renders 'It's good to see you' if button was not clicked yet", () => {
		// Arrange
		render(<Greeting />);
		// Act
		// ... nothing

		// Assert
		const buttonNotClicked = screen.getByText("It's good to see you", {exact: true});
		expect(buttonNotClicked).toBeInTheDocument();
	});

    // test("renders 'Changed!' if button clicked", () => {
    //     // Arrange
    //     render(<Greeting />);
    //     // Act
    //     const buttonElement = screen.getByRole("button");
	// 	userEvent.click(buttonElement);

    //     // Assert
    //     const buttonClicked = screen.getByText("Changed!", {exact: true});
	// 	expect(buttonClicked).toBeInTheDocument();
    // });

	test("'It's good to see you' is unvisible if button clicked", () => {
        // Arrange
        render(<Greeting />);
        // Act
        const buttonElement = screen.getByRole("button");
		userEvent.click(buttonElement);

        // Assert
        const buttonClicked = screen.queryByText("It's good to see you", {exact: true});
		expect(buttonClicked).toBeNull();
    });

});
