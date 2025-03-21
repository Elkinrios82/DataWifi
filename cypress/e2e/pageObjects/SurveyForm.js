class SurveyForm {

    elements = {
        ocupacionDropdown: () => cy.get('select.form-control.input-lg').eq(5),
        impresionProductoRadio: () => cy.get('input[type="radio"][value="BUENA"]'),
        navegarAhoraButton: () => cy.contains('button', 'Navegar ahora'),
    }

    fillSurveyForm(data) {
        cy.wait(5000)
        this.elements.ocupacionDropdown()
            .select(data).should('have.value', data);

        this.elements.impresionProductoRadio()
            .check()
            .should('be.checked');
    }

    submitSurveyForm() {
        this.elements.navegarAhoraButton()
            .should('be.visible')
            .and('not.be.disabled')
            .invoke('removeAttr', 'target')
            .click({ force: true });
        // cy.location('href', { timeout: 15000 }).should('include', 'google.com');
    }
}

export default new SurveyForm();



