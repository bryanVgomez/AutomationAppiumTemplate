Feature: Validar ingresos de reservas de habitaciones

  @FlujoCompleto @SCN01 @allTestCases
  Scenario: Cliente realiza reserva exitosa de alojamiento
    Given El cliente busca destino "cusco" y lo selecciona
    And El cliente selecciona fechas desde "31 January 2023" hasta "18 February 2023"
    And El cliente ingresa cantidad de habitaciones y pasajeros "5 years old"
    And El cliente presionar buscar
    And El cliente realiza click en opcion "[3]"
    And El cliente selecciona la habitacion
    #And El cliente llena con sus datos personales "Bryan" "vasquez" "bryan.v.gomez@gmai.com" "juan oto 234" "3344" "santiago" "Chile" "965280478" "Leisure"
    And El cliente llena con sus datos personales "Bryan" "vasquez" "bryan.v.gomez@gmai.com""965280478"
    And El cliente ingresa datos de tarjeta de credito "4111111145551142" "03/30" "737"
    Then Se valida reserva exitosa en pantalla
