import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import '@testing-library/jest-dom';
import Timeline from "./Timeline";


describe('timeline',()=>{
    it('should render timeline component',()=>{
        render(<Timeline/>);
        expect(screen.getByText(/my journey/i)).toBeInTheDocument();
    })
})