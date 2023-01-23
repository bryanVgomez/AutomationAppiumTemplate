$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Reservas.feature");
formatter.feature({
  "line": 2,
  "name": "Validar ingresos de reservas de habitaciones",
  "description": "",
  "id": "validar-ingresos-de-reservas-de-habitaciones",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@allTestCases"
    }
  ]
});
formatter.before({
  "duration": 8301415101,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Cliente realiza reserva exitosa de alojamiento",
  "description": "",
  "id": "validar-ingresos-de-reservas-de-habitaciones;cliente-realiza-reserva-exitosa-de-alojamiento",
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
  "name": "El cliente selecciona fechas desde \"31 January 2023\" hasta \"18 February 2023\"",
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
formatter.step({
  "line": 10,
  "name": "El cliente realiza click en opcion \"[3]\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "El cliente selecciona la habitacion",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 12,
      "value": "#And El cliente llena con sus datos personales \"Bryan\" \"vasquez\" \"bryan.v.gomez@gmai.com\" \"juan oto 234\" \"3344\" \"santiago\" \"Chile\" \"965280478\" \"Leisure\""
    }
  ],
  "line": 13,
  "name": "El cliente llena con sus datos personales \"Bryan\" \"vasquez\" \"bryan.v.gomez@gmai.com\"\"965280478\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "El cliente ingresa datos de tarjeta de credito \"4111111145551142\" \"03/30\" \"737\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
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
  "duration": 8876227331,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "31 January 2023",
      "offset": 36
    },
    {
      "val": "18 February 2023",
      "offset": 60
    }
  ],
  "location": "HomePageSteps.elClienteSeleccionaFechasDesdeHasta(String,String)"
});
formatter.result({
  "duration": 2995295026,
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
  "duration": 29449703988,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.elClientePresionarBuscar()"
});
formatter.result({
  "duration": 616482674,
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
  "duration": 3233746964,
  "status": "passed"
});
formatter.match({
  "location": "ResultSearchPageSteps.elClienteSeleccionaLaHabitacion()"
});
formatter.result({
  "duration": 14081508283,
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
      "val": "965280478",
      "offset": 85
    }
  ],
  "location": "FromBookingPageSteps.elClienteLlenaConSusDatosPersonales(String,String,String,String)"
});
formatter.result({
  "duration": 13931574913,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4111111145551142",
      "offset": 48
    },
    {
      "val": "03/30",
      "offset": 67
    },
    {
      "val": "737",
      "offset": 75
    }
  ],
  "location": "FromBookingPageSteps.elClienteIngresaDatosDeTarjetaDeCredito(String,String,String)"
});
formatter.result({
  "duration": 9607560462,
  "status": "passed"
});
formatter.match({
  "location": "FromBookingPageSteps.seValidaReservaExitosaEnPantalla()"
});
formatter.result({
  "duration": 15247824146,
  "status": "passed"
});
formatter.after({
  "duration": 555443618,
  "status": "passed"
});
formatter.uri("Validaciones.feature");
formatter.feature({
  "line": 2,
  "name": "Casos de prueba para validaciones de mensajes de error, mensajes de exitos, etc",
  "description": "",
  "id": "casos-de-prueba-para-validaciones-de-mensajes-de-error,-mensajes-de-exitos,-etc",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@allTestCases"
    }
  ]
});
formatter.scenario({
  "line": 5,
  "name": "Cliente presiona boton search sin llenar ningun campo",
  "description": "",
  "id": "casos-de-prueba-para-validaciones-de-mensajes-de-error,-mensajes-de-exitos,-etc;cliente-presiona-boton-search-sin-llenar-ningun-campo",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@SCN02"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "El cliente presiona x y presionar buscar",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Se valida mensaje en pantalla \"Please enter your destination\"",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSteps.elClientePresionaXYPresionarBuscar()"
});
formatter.result({
  "duration": 57001615,
  "error_message": "org.openqa.selenium.NoSuchSessionException: Session ID is null. Using WebDriver after calling quit()?\nBuild info: version: \u00273.1.0\u0027, revision: \u0027b94c902\u0027, time: \u00272017-02-16 12:21:31 -0800\u0027\nSystem info: host: \u0027MacBook-Pro-de-Bryan.local\u0027, ip: \u0027fda5:79f7:5090:1:4e:dcfb:e7fe:a4c1%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.16\u0027, java.version: \u00271.8.0_202\u0027\nDriver info: driver.version: AndroidDriver\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:130)\n\tat io.appium.java_client.remote.AppiumCommandExecutor.execute(AppiumCommandExecutor.java:69)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:601)\n\tat io.appium.java_client.DefaultGenericMobileDriver.execute(DefaultGenericMobileDriver.java:40)\n\tat io.appium.java_client.AppiumDriver.execute(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.execute(AndroidDriver.java:1)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:368)\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:56)\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.findElement(AndroidDriver.java:1)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:473)\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElementByXPath(DefaultGenericMobileDriver.java:134)\n\tat io.appium.java_client.AppiumDriver.findElementByXPath(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.findElementByXPath(AndroidDriver.java:1)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:360)\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:52)\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.findElement(AndroidDriver.java:1)\n\tat pages.HomePage.clickXbuttom(HomePage.java:35)\n\tat stepdefinations.HomePageSteps.elClientePresionaXYPresionarBuscar(HomePageSteps.java:88)\n\tat ✽.And El cliente presiona x y presionar buscar(Validaciones.feature:6)\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Please enter your destination",
      "offset": 31
    }
  ],
  "location": "HomePageSteps.seValidaMensajeEnPantalla(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 66376,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Cliente presiona boton add missing details en formulario de informacion sin llenar ningun campo",
  "description": "",
  "id": "casos-de-prueba-para-validaciones-de-mensajes-de-error,-mensajes-de-exitos,-etc;cliente-presiona-boton-add-missing-details-en-formulario-de-informacion-sin-llenar-ningun-campo",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@SCN03"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "El cliente busca destino \"cusco\" y lo selecciona",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "El cliente selecciona fechas desde \"31 January 2023\" hasta \"18 February 2023\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "El cliente ingresa cantidad de habitaciones y pasajeros \"5 years old\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "El cliente presionar buscar",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "El cliente realiza click en opcion \"[3]\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "El cliente selecciona la habitacion",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "El cliente presiona add missing details sin rellenar ningun campo",
  "keyword": "And "
});
formatter.step({
  "line": 18,
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
  "duration": 520459,
  "error_message": "org.openqa.selenium.NoSuchSessionException: Session ID is null. Using WebDriver after calling quit()?\nBuild info: version: \u00273.1.0\u0027, revision: \u0027b94c902\u0027, time: \u00272017-02-16 12:21:31 -0800\u0027\nSystem info: host: \u0027MacBook-Pro-de-Bryan.local\u0027, ip: \u0027fda5:79f7:5090:1:4e:dcfb:e7fe:a4c1%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.16\u0027, java.version: \u00271.8.0_202\u0027\nDriver info: driver.version: AndroidDriver\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:130)\n\tat io.appium.java_client.remote.AppiumCommandExecutor.execute(AppiumCommandExecutor.java:69)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:601)\n\tat io.appium.java_client.DefaultGenericMobileDriver.execute(DefaultGenericMobileDriver.java:40)\n\tat io.appium.java_client.AppiumDriver.execute(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.execute(AndroidDriver.java:1)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:368)\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:56)\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.findElement(AndroidDriver.java:1)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:473)\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElementByXPath(DefaultGenericMobileDriver.java:134)\n\tat io.appium.java_client.AppiumDriver.findElementByXPath(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.findElementByXPath(AndroidDriver.java:1)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:360)\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:52)\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.findElement(AndroidDriver.java:1)\n\tat pages.HomePage.clickXbuttom(HomePage.java:35)\n\tat stepdefinations.HomePageSteps.elClienteBuscaDestinoYLoSelecciona(HomePageSteps.java:58)\n\tat ✽.Given El cliente busca destino \"cusco\" y lo selecciona(Validaciones.feature:11)\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "31 January 2023",
      "offset": 36
    },
    {
      "val": "18 February 2023",
      "offset": 60
    }
  ],
  "location": "HomePageSteps.elClienteSeleccionaFechasDesdeHasta(String,String)"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "HomePageSteps.elClientePresionarBuscar()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "ResultSearchPageSteps.elClienteSeleccionaLaHabitacion()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "FromBookingPageSteps.elClientePresionaAddMissingDetailsSinRellenarNingunCampo()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.after({
  "duration": 36438,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Cliente presiona boton add missing details en formulario de informacion sin llenar ningun campo",
  "description": "",
  "id": "casos-de-prueba-para-validaciones-de-mensajes-de-error,-mensajes-de-exitos,-etc;cliente-presiona-boton-add-missing-details-en-formulario-de-informacion-sin-llenar-ningun-campo",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 20,
      "name": "@SCN04"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "El cliente busca destino \"cusco\" y lo selecciona",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "El cliente selecciona fechas desde \"31 January 2023\" hasta \"18 February 2023\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "El cliente ingresa cantidad de habitaciones y pasajeros \"5 years old\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "El cliente presionar buscar",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "El cliente verifica el valor de la habitacion",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "El cliente realiza click en opcion \"[3]\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "El cliente verifica el valor de la habitacion al seleccionar la habitacion",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "El cliente selecciona la habitacion",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "El cliente vuelve a verificar el precio",
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
  "duration": 818767,
  "error_message": "org.openqa.selenium.NoSuchSessionException: Session ID is null. Using WebDriver after calling quit()?\nBuild info: version: \u00273.1.0\u0027, revision: \u0027b94c902\u0027, time: \u00272017-02-16 12:21:31 -0800\u0027\nSystem info: host: \u0027MacBook-Pro-de-Bryan.local\u0027, ip: \u0027fda5:79f7:5090:1:4e:dcfb:e7fe:a4c1%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.16\u0027, java.version: \u00271.8.0_202\u0027\nDriver info: driver.version: AndroidDriver\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:130)\n\tat io.appium.java_client.remote.AppiumCommandExecutor.execute(AppiumCommandExecutor.java:69)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:601)\n\tat io.appium.java_client.DefaultGenericMobileDriver.execute(DefaultGenericMobileDriver.java:40)\n\tat io.appium.java_client.AppiumDriver.execute(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.execute(AndroidDriver.java:1)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:368)\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:56)\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.findElement(AndroidDriver.java:1)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:473)\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElementByXPath(DefaultGenericMobileDriver.java:134)\n\tat io.appium.java_client.AppiumDriver.findElementByXPath(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.findElementByXPath(AndroidDriver.java:1)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:360)\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:52)\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.findElement(AndroidDriver.java:1)\n\tat pages.HomePage.clickXbuttom(HomePage.java:35)\n\tat stepdefinations.HomePageSteps.elClienteBuscaDestinoYLoSelecciona(HomePageSteps.java:58)\n\tat ✽.Given El cliente busca destino \"cusco\" y lo selecciona(Validaciones.feature:22)\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "31 January 2023",
      "offset": 36
    },
    {
      "val": "18 February 2023",
      "offset": 60
    }
  ],
  "location": "HomePageSteps.elClienteSeleccionaFechasDesdeHasta(String,String)"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "HomePageSteps.elClientePresionarBuscar()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ResultSearchPageSteps.elClienteVerificaElValorDeLaHabitacion()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "ResultSearchPageSteps.elClienteVerificaElValorDeLaHabitacionAlSeleccionarLaHabitacion()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ResultSearchPageSteps.elClienteSeleccionaLaHabitacion()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ResultSearchPageSteps.elClienteVuelveAVerificarElPrecio()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 33686,
  "status": "passed"
});
});