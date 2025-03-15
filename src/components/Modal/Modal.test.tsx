import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Modal from "../Modal/Modal";
import { MOCK_MOVIES } from "../../api/mocks";

describe("Modal", () => {
  const movie = MOCK_MOVIES[0];

  it("renders Modal component when open", () => {
    render(<Modal isOpen={true} onClose={vi.fn()} title={movie.title} />);
    expect(screen.getByText(movie.title)).toBeInTheDocument();
  });

  it("does not render Modal component when closed", () => {
    render(<Modal isOpen={false} onClose={vi.fn()} title={movie.title} />);
    expect(screen.queryByText("movie.title")).not.toBeInTheDocument();
  });

  it("calls onClose when close button is clicked", () => {
    const onClose = vi.fn();
    render(<Modal isOpen={true} onClose={onClose} title={movie.title} />);
    fireEvent.click(screen.getByTestId("modal-close-button"));
    expect(onClose).toHaveBeenCalled();
  });
});
