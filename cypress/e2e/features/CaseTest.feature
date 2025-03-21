
Feature: Diligenciamiento de Formulario en el Portal
  El objetivo es verificar que el formulario del portal y la encuesta se diligencien y funcionen correctamente.

  Scenario: Acceso a la página web
    Given que el usuario accede a la URL "https://qa.datawifi.co/easyfi/web/app.php/portal?called=288x10750&mac=za7m3xnn7494&test=qxuA4DsqIooDS"
    Then la página debe cargarse correctamente


  Scenario: Diligenciamiento de todos los campos en el formulario
    Given que el formulario está visible
    When el usuario completa todos los campos con los siguientes datos:
      | Campo              | Valor                |
      | Celular            | 3123760189           |
      | Correo             | juanperez@gmail.com  |
      | Identificación     | 120336547            |
      | Nombre             | Jhon                 |
      | Nombres            | Jacobo               |
      | Apellidos          | Rios                 |
      | Código Postal      | 110741               |
      | Mes de Nacimiento  | Mayo                 |
      | Día de Nacimiento  | 16                   |
      | Edad               | 35-44                |
      | País               | Colombia             |
      | Tipo de Sangre     | B+                   |
      | Género             | Masculino            |
    And el usuario acepta los términos y condiciones
    Then el formulario se envía correctamente


  Scenario: Verificación de redirección después de presionar "Continuar"
    Given que el usuario presiona el botón "Continuar"
    Then la URL debe incluir "https://qa.datawifi.co/easyfi/web/app.php/portal_r"


  Scenario: Diligenciamiento del formulario de encuesta
    Given que el usuario accede al formulario de encuesta
    When el usuario selecciona la ocupación "ESTUDIANTE"
    And el usuario selecciona la impresión del producto como "BUENA"
    Then la encuesta se envía correctamente
