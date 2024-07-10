describe("desktop cards render", () => {
    it("should render at least one card in desktop", () => {   
        cy.visit("http://localhost:5173/"); // Ajusta la URL según sea necesario

        // Aquí puedes agregar aserciones específicas para verificar la renderización en escritorio
        // Por ejemplo, verificar la existencia de DesktopCard
        cy.get(".desktopCard").should("exist");
        cy.get(".desktopCard").should("have.length.greaterThan", 1);
    });
})