$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Reservas.feature");
formatter.feature({
  "line": 1,
  "name": "Validar ingresos de reservas de habitaciones",
  "description": "",
  "id": "validar-ingresos-de-reservas-de-habitaciones",
  "keyword": "Feature"
});
formatter.before({
  "duration": 8577615631,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Cliente realiza reserva exitosa de alojamiento",
  "description": "",
  "id": "validar-ingresos-de-reservas-de-habitaciones;cliente-realiza-reserva-exitosa-de-alojamiento",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@FlujoCompleto"
    },
    {
      "line": 3,
      "name": "@SCN01"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "El cliente busca destino \"cusco\" y lo selecciona",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "El cliente selecciona fechas desde \"31 January 2023\" hasta \"16 February 2023\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "El cliente ingresa cantidad de habitaciones y pasajeros \"5 years old\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "El cliente presionar buscar",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "El cliente realiza click en opcion \"[3]\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "El cliente selecciona la habitacion",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "El cliente llena con sus datos personales \"Bryan\" \"vasquez\" \"bryan.v.gomez@gmai.com\" \"juan oto 234\" \"3344\" \"santiago\" \"Chile\" \"965280478\" \"Leisure\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "El cliente ingresa datos de tarjeta de credito \"2222400070000005\" \"03/30\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Se valida reserva exitosa en pantalla",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "cusco",
      "offset": 26
    }
  ],
  "location": "HomePageSteps.elClienteBuscaDestinoYLoSelecciona(String)"
});
formatter.result({
  "duration": 8058414526,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "31 January 2023",
      "offset": 36
    },
    {
      "val": "16 February 2023",
      "offset": 60
    }
  ],
  "location": "HomePageSteps.elClienteSeleccionaFechasDesdeHasta(String,String)"
});
formatter.result({
  "duration": 2618994996,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5 years old",
      "offset": 57
    }
  ],
  "location": "HomePageSteps.elClienteIngresaCantidadDeHabitacionesYPasajeros(String)"
});
formatter.result({
  "duration": 29117129333,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.elClientePresionarBuscar()"
});
formatter.result({
  "duration": 615473948,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "[3]",
      "offset": 36
    }
  ],
  "location": "ResultSearchPageSteps.elClienteRealizaClickEnOpcion(String)"
});
formatter.result({
  "duration": 3726285243,
  "status": "passed"
});
formatter.match({
  "location": "ResultSearchPageSteps.elClienteSeleccionaLaHabitacion()"
});
formatter.result({
  "duration": 8471206434,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bryan",
      "offset": 43
    },
    {
      "val": "vasquez",
      "offset": 51
    },
    {
      "val": "bryan.v.gomez@gmai.com",
      "offset": 61
    },
    {
      "val": "juan oto 234",
      "offset": 86
    },
    {
      "val": "3344",
      "offset": 101
    },
    {
      "val": "santiago",
      "offset": 108
    },
    {
      "val": "Chile",
      "offset": 119
    },
    {
      "val": "965280478",
      "offset": 127
    },
    {
      "val": "Leisure",
      "offset": 139
    }
  ],
  "location": "FromBookingPageSteps.elClienteLlenaConSusDatosPersonales(String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 18476825368,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2222400070000005",
      "offset": 48
    },
    {
      "val": "03/30",
      "offset": 67
    }
  ],
  "location": "FromBookingPageSteps.elClienteIngresaDatosDeTarjetaDeCredito(String,String)"
});
formatter.result({
  "duration": 5776911410,
  "status": "passed"
});
formatter.match({
  "location": "FromBookingPageSteps.seValidaReservaExitosaEnPantalla()"
});
formatter.result({
  "duration": 15956683382,
  "status": "passed"
});
formatter.after({
  "duration": 664617108,
  "status": "passed"
});
});