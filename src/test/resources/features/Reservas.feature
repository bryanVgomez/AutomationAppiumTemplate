Feature: Validar ingresos de reservas de habitaciones

  @FlujoCompleto @SCN01
  Scenario: Cliente realiza reserva exitosa de alojamiento
    Given El cliente busca destino "cusco" y lo selecciona
    And El cliente selecciona fechas desde "31 January 2023" hasta "16 February 2023"
    And El cliente ingresa cantidad de habitaciones y pasajeros "5 years old"
    And El cliente presionar buscar
