import { describe, expect, it } from "vitest";
import { render, screen, userEvent } from "../testUtils";


import App from "./App";


describe("Render App component", () => {
  it("the title is visible", () => {
    render(<App />);


    const welcomeText = screen.getByText(/Ready to deploy to aws/i);


    screen.debug(welcomeText);


    expect(screen.getByText(/Ready to deploy to aws/i)).toBeInTheDocument();
  });


});
