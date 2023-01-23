Feature: Validar ingresos de reservas de habitaciones

  @FlujoCompleto @SCN01
  Scenario: Cliente realiza reserva exitosa de alojamiento
    Given El cliente busca destino "cusco" y lo selecciona
    And El cliente selecciona fechas desde "31 January 2023" hasta "16 February 2023"
    And El cliente ingresa cantidad de habitaciones y pasajeros "5 years old"
    And El cliente presionar buscar
    And El cliente realiza click en opcion "[3]"
    And El cliente selecciona la habitacion
    And El cliente llena con sus datos personales "Bryan" "vasquez" "bryan.v.gomez@gmai.com" "juan oto 234" "3344" "santiago" "Chile" "965280478" "Leisure"
    And El cliente ingresa datos de tarjeta de credito "2222400070000005" "03/30"
    Then Se valida reserva exitosa en pantalla
