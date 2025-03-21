class ContactForm {

    elements = {
        celularInput: () => cy.get('input[placeholder="Celular"]'),
        correoInput: () => cy.get('input[placeholder="Correo"]'),
        identificacionInput: () => cy.get('input[data-tipodato="Identificacion"]'),
        nombreInput: () => cy.get('input[placeholder="Nombre"]'),
        nombresInput: () => cy.get('input[placeholder="Nombres"]'),
        apellidosInput: () => cy.get('input[placeholder="Apellidos"]'),
        codigoPostalInput: () => cy.get('input[placeholder="Código postal"]'),
        mesNacimientoDropdown: () => cy.get('select.form-control').first(),
        diaNacimientoDropdown: () => cy.get('select.form-control').eq(1),
        edadDropdown: () => cy.get('select.form-control.input-lg').eq(0),
        birthdateInput: () => cy.get('input[title="Fechanacimiento"]').first(),
        calendarWidget: () => cy.get('.bootstrap-datetimepicker-widget'),
        birthdateDaySelector: (day) => cy.get('.bootstrap-datetimepicker-widget .day').contains(day),
        paisDropdown: () => cy.get('.select2-selection--single'),
        paisOption: (pais) => cy.get('.select2-results__option').contains(pais),
        tipoSangreDropdown: () => cy.get('select.form-control.input-lg').eq(4),
        generoDropdown: () => cy.get('select.form-control.input-lg').eq(1),
        terminosCheckbox: () => cy.contains('Al continuar acepta nuestros términos y condiciones').parent().find('input[type="checkbox"]'),
        continuarButton: () => cy.get('button.continuar').eq(0),
    }

    fillFirstForm(userData) {
        this.elements.celularInput().type(userData.celular).should('have.value', userData.celular);
        this.elements.correoInput().type(userData.correo).should('have.value', userData.correo);
        this.elements.identificacionInput().type(userData.identificacion).should('have.value', userData.identificacion);
        this.elements.nombreInput().type(userData.nombre).should('have.value', userData.nombre);
        this.elements.nombresInput().type(userData.nombres).should('have.value', userData.nombres);
        this.elements.apellidosInput().type(userData.apellidos).should('have.value', userData.apellidos);
        this.elements.codigoPostalInput().type(userData.codigoPostal).should('have.value', userData.codigoPostal);
        this.elements.mesNacimientoDropdown().select('05').should('have.value', '05'); // Mayo
        this.elements.diaNacimientoDropdown().select('16').should('have.value', '16');
        this.elements.edadDropdown().select(userData.edad).should('have.value', userData.edad);
        this.selectBirthdate(userData.fechaNacimiento);
        this.selectPais(userData.pais);
        this.elements.tipoSangreDropdown().select(userData.tipoSangre).should('have.value', userData.tipoSangre);
        this.elements.generoDropdown().select(userData.genero).should('have.value', userData.genero);
        this.elements.terminosCheckbox().check().should('be.checked');
    }

    selectBirthdate(day) {
        this.elements.birthdateInput().click();
        this.elements.calendarWidget().should('be.visible');
        this.elements.birthdateDaySelector(day).click();
        this.elements.birthdateInput().should('contain.value', day);
    }

    selectPais(pais) {
        this.elements.paisDropdown().click();
        this.elements.paisOption(pais).click();
        this.elements.paisDropdown().should('contain', pais);
    }

    submitFirstForm() {
        this.elements.continuarButton().should('be.visible').click();
        cy.url().should('include', 'https://qa.datawifi.co/easyfi/web/app.php/portal_r');
    }
}

export { ContactForm };




