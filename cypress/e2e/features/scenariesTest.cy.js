import { ContactForm } from '../pageObjects/ContactForm';
import PortalPage from '../pageObjects/PortalPage';
import SurveyForm from '../pageObjects/SurveyForm';

let ocupacion = "ESTUDIANTE";
const contactForm = new ContactForm();

describe('Acceso a página y diligenciamiento de Formulario', () => {
    before(() => {
        cy.visit('https://qa.datawifi.co/easyfi/web/app.php/portal?called=288x10750&mac=za7m3xnn7494&test=qxuA4DsqIooDS');
    });

    it('Diligenciar y validar todos los campos del formulario', () => {
        const userData = {
            celular: '3123760189',
            correo: 'juanperez@gmail.com',
            identificacion: '120336547',
            nombre: 'Jhon',
            nombres: 'Jacobo',
            apellidos: 'Rios',
            codigoPostal: '110741',
            mesNacimiento: 'Mayo',
            diaNacimiento: '16',
            edad: '35-44',
            fechaNacimiento: '19',
            pais: 'Colombia',
            tipoSangre: 'B+',
            genero: 'Masculino',
        };

        contactForm.fillFirstForm(userData);
        contactForm.submitFirstForm();
    });

    it('Verificar si el botón Continuar redirige correctamente', () => {
        PortalPage.verificarCambioDeURL(); // Valida la redirección
        SurveyForm.fillSurveyForm(ocupacion);
        SurveyForm.submitSurveyForm();
    });
});





