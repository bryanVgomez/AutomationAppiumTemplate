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
  "duration": 11168171198,
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
formatter.match({
  "arguments": [
    {
      "val": "cusco",
      "offset": 26
    }
  ],
  "location": "AppiumScenario.elClienteBuscaDestinoYLoSelecciona(String)"
});
formatter.result({
  "duration": 8480861452,
  "status": "passed"
});
formatter.after({
  "duration": 1531551844,
  "status": "passed"
});
});