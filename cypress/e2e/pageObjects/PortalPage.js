class PortalPage {
    clickContinuar() {
        cy.get('button.continuar')
            .should('be.visible')  
            .and('not.be.disabled') 
            .eq(0)                 
            .click();
    }

    verificarCambioDeURL() {
        cy.url().should('include', 'https://qa.datawifi.co/easyfi/web/app.php/portal_r'); 
        
    }
}

export default new PortalPage();





