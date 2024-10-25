import { describe, expect, it } from "vitest";
import Projects from "./Projects";
import { render, screen } from "@testing-library/react";

describe('projects',()=>{
    it('should render projects component',()=>{
        render(<Projects/>)
        expect(screen.getByText(/my works/i)).toBeInTheDocument();
    })
})