Feature: Casos de prueba para validaciones de mensajes de error, mensajes de exitos, etc

   @SCN02 @allTestCases
  Scenario: Cliente presiona boton search sin llenar ningun campo
    And El cliente presiona x y presionar buscar
    Then Se valida mensaje en pantalla "Please enter your destination"

   @SCN03 @allTestCases
  Scenario: Cliente presiona boton add missing details en formulario de informacion sin llenar ningun campo
    Given El cliente busca destino "cusco" y lo selecciona
    And El cliente selecciona fechas desde "31 January 2023" hasta "18 February 2023"
    And El cliente ingresa cantidad de habitaciones y pasajeros "5 years old"
    And El cliente presionar buscar
    And El cliente realiza click en opcion "[3]"
    And El cliente selecciona la habitacion
    And El cliente presiona add missing details sin rellenar ningun campo
    Then se despliegan mensajes de error en labels "Please enter your first name." "Please enter your last name." "Please enter your email address.""Please enter your address.""Please enter your zip/postal code.""Please enter your city.""Please enter your phone number."

  @SCN04 @allTestCases
  Scenario: Cliente presiona boton add missing details en formulario de informacion sin llenar ningun campo
    Given El cliente busca destino "cusco" y lo selecciona
    And El cliente selecciona fechas desde "31 January 2023" hasta "18 February 2023"
    And El cliente ingresa cantidad de habitaciones y pasajeros "5 years old"
    And El cliente presionar buscar
    And El cliente verifica el valor de la habitacion
    And El cliente realiza click en opcion "[3]"
    And El cliente verifica el valor de la habitacion al seleccionar la habitacion
    And El cliente selecciona la habitacion
    And El cliente vuelve a verificar el precio
    #Then se valida que el precio no cambia al realizar cambios de pantalla

