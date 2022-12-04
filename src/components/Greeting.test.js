import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";
describe("Greeting component", () => {
  test("render Hello World as a text", () => {
    render(<Greeting />);

    const helloWorldElement = screen.getByText("Hello World!", {
      expect: false,
    });
    expect(helloWorldElement).toBeInTheDocument();
  });

  test("renders good to see you if the button was NOT clicked", () => {
    render(<Greeting />);

    const outputElement = screen.getByText("It's good to see", {
      exact: false,
    });
    expect(outputElement).toBeInTheDocument();
  });
  test('renders "changed!" if the button was clicked', () => {
    render(<Greeting />);

    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    const outputElement = screen.getByText("Changed!", { exact: false });
    expect(outputElement).toBeInTheDocument();
  });
  test("does not render 'good to see you' if the button was clicked", () => {
    render(<Greeting />);
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    const outputElement = screen.queryByText("good to see you", {
      exact: false,
    });
    expect(outputElement).toBeNull();
  });
});
