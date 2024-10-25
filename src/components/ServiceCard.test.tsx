import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import ServiceCard from "./ServiceCard";

describe('service card', () => {
    it('should render service card component',()=>{
        render(<ServiceCard title="title" />)
        expect(screen.getByText(/title/i)).toBeInTheDocument();
    })
})