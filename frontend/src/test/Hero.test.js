import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Hero from "../landing_page/home/Hero";

describe("Hero Component", () => {
  test("renders hero image", () => {
    render(<Hero />);
    const heroImage = screen.getByAltText("Home Image");

    // Check image exists
    expect(heroImage).toBeInTheDocument();

    // Check src is defined (mocked value)
    expect(heroImage.src).toBeTruthy();
  });
});
