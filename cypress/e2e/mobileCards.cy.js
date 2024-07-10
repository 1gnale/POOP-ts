describe('mobile cards render', () => {
    const mobileWidth = 375;
    const mobileHeight = 667;
  
    it('should render one card in mobile', () => {
      cy.viewport(mobileWidth, mobileHeight); // Establece el tamaño de la ventana para simular un dispositivo móvil
      cy.visit('http://localhost:5173/'); // Ajusta la URL según sea necesario
  
      // Aquí puedes agregar aserciones específicas para verificar la renderización en móvil
      // Por ejemplo, verificar la existencia de MobileCard
      cy.get('.mobileCard').should('exist');
      cy.get('.mobileCard').should('have.length', 1);
    });
});