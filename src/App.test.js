import { render, screen } from "@testing-library/react";
import App from "./App";

it("renders a heading", () => {
  render(<App />);
  const heading = screen.getByText(/explore beers/i);
  expect(heading).toBeInTheDocument();
});

// it("display name of a beer which has been filtered by user input", () => {
//   render(<App />);

//   const beerInput = screen.getByRole("textbox", {
//     name: /trashy/i,
//   });
//   userEvent.type(nameInput, "trashy");
//   expect(beerInput).toBeInTheDocument();

//   const errorMessage = screen.queryByText(/trashy blonde/i);

//   expect(errorMessage).toBeInTheDocument();
// });
