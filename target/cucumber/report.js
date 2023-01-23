$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Reservas.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: freeautomationlearning@gmail.com"
    }
  ],
  "line": 2,
  "name": "Validate Different Options",
  "description": "",
  "id": "validate-different-options",
  "keyword": "Feature"
});
formatter.before({
  "duration": 11372012748,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Cliente realiza reserva exitosa de alojamiento",
  "description": "",
  "id": "validate-different-options;cliente-realiza-reserva-exitosa-de-alojamiento",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@FlujoCompleto"
    },
    {
      "line": 4,
      "name": "@SCN01"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "El cliente busca destino \"cusco\" y lo selecciona",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "El cliente selecciona fechas desde \"31 January 2023\" hasta \"16 February 2023\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "El cliente ingresa cantidad de habitaciones y pasajeros \"5 years old\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "El cliente presionar buscar",
  "keyword": "And "
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
  "duration": 9769673112,
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
  "duration": 3193695946,
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
  "duration": 34020818922,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.elClientePresionarBuscar()"
});
formatter.result({
  "duration": 981854096,
  "status": "passed"
});
formatter.after({
  "duration": 617971221,
  "status": "passed"
});
});