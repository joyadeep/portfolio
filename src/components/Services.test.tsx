import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Services from "./Services";

describe('services', () => {
    it('should render services components',()=>{
        render(<Services/>)
        expect(screen.getByText(/my services/i)).toBeInTheDocument();
    });

    // it('should render the correct number of service cards',async()=>{
    //     render(<Services/>)
    //     const serviceCards = await screen.findAllByText(/serviceCard/i);
    //     expect(serviceCards).toHaveLength(3);
    // })

})