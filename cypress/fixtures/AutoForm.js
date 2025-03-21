import FormPage from '../../pages/FormPage';

describe('Automatización del formulario utilizando POM', () => {
    const formPage = new FormPage();

    beforeEach(() => {
        // Navegar al sitio web antes de cada prueba
        cy.visit('https://qa.datawifi.co/easyfi/web/app.php/portal?called=288x10750&mac=za7m3xnn7494&test=qxuA4DsqIooDS');
        cy.fixture('formData').as('formData'); // Cargar datos del archivo JSON
    });

    it('Completar y enviar el formulario', function () {
        // Validar que el formulario esté visible
        formPage.getNombreField().should('be.visible');

        // Completar el formulario con los datos
        formPage.fillForm(this.formData);

        // Enviar el formulario
        formPage.submitForm();

        // Validar que el flujo ha sido completado
        cy.url().should('include', '/finalizado'); // Cambiar según URL de éxito
    });

    it('Validar errores al dejar campos vacíos', () => {
        // Intentar enviar el formulario sin completar
        formPage.submitForm();

        // Validar que los mensajes de error se muestran
        formPage.getNombreField().then(($el) => {
            cy.wrap($el).should('have.attr', 'required'); // Validación HTML5
        });
        cy.get('.error-nombre').should('contain', 'Campo obligatorio'); // Validación personalizada
    });
});
