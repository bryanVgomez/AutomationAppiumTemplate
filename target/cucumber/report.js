$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Validaciones.feature");
formatter.feature({
  "line": 1,
  "name": "Casos de prueba para validaciones de mensajes de error, mensajes de exitos, etc",
  "description": "",
  "id": "casos-de-prueba-para-validaciones-de-mensajes-de-error,-mensajes-de-exitos,-etc",
  "keyword": "Feature"
});
formatter.before({
  "duration": 34445535241,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Cliente presiona boton add missing details en formulario de informacion sin llenar ningun campo",
  "description": "",
  "id": "casos-de-prueba-para-validaciones-de-mensajes-de-error,-mensajes-de-exitos,-etc;cliente-presiona-boton-add-missing-details-en-formulario-de-informacion-sin-llenar-ningun-campo",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 8,
      "name": "@FlujoCompleto"
    },
    {
      "line": 8,
      "name": "@SCN03"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "El cliente busca destino \"cusco\" y lo selecciona",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "El cliente selecciona fechas desde \"31 January 2023\" hasta \"16 February 2023\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "El cliente ingresa cantidad de habitaciones y pasajeros \"5 years old\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "El cliente presionar buscar",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "El cliente realiza click en opcion \"[3]\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "El cliente selecciona la habitacion",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "El cliente presiona add missing details sin rellenar ningun campo",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "se despliegan mensajes de error en labels \"Please enter your first name.\" \"Please enter your last name.\" \"Please enter your email address.\"\"Please enter your address.\"\"Please enter your zip/postal code.\"\"Please enter your city.\"\"Please enter your phone number.\"",
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
  "duration": 9526242035,
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
  "duration": 2866043360,
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
  "duration": 28562303200,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.elClientePresionarBuscar()"
});
formatter.result({
  "duration": 607052656,
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
  "duration": 3452151073,
  "status": "passed"
});
formatter.match({
  "location": "ResultSearchPageSteps.elClienteSeleccionaLaHabitacion()"
});
formatter.result({
  "duration": 8186083803,
  "status": "passed"
});
formatter.match({
  "location": "FromBookingPageSteps.elClientePresionaAddMissingDetailsSinRellenarNingunCampo()"
});
formatter.result({
  "duration": 3142035208,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Please enter your first name.",
      "offset": 43
    },
    {
      "val": "Please enter your last name.",
      "offset": 75
    },
    {
      "val": "Please enter your email address.",
      "offset": 106
    },
    {
      "val": "Please enter your address.",
      "offset": 140
    },
    {
      "val": "Please enter your zip/postal code.",
      "offset": 168
    },
    {
      "val": "Please enter your city.",
      "offset": 204
    },
    {
      "val": "Please enter your phone number.",
      "offset": 229
    }
  ],
  "location": "FromBookingPageSteps.seDesplieganMensajesDeErrorEnLabels(String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 32255588531,
  "status": "passed"
});
formatter.after({
  "duration": 523137121,
  "status": "passed"
});
});