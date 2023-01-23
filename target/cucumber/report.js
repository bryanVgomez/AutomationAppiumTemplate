$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Reservas.feature");
formatter.feature({
  "line": 1,
  "name": "Validar ingresos de reservas de habitaciones",
  "description": "",
  "id": "validar-ingresos-de-reservas-de-habitaciones",
  "keyword": "Feature"
});
formatter.before({
  "duration": 8551549214,
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
    },
    {
      "line": 3,
      "name": "@allTestCases"
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
  "name": "El cliente selecciona fechas desde \"31 January 2023\" hasta \"18 February 2023\"",
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
  "comments": [
    {
      "line": 11,
      "value": "#And El cliente llena con sus datos personales \"Bryan\" \"vasquez\" \"bryan.v.gomez@gmai.com\" \"juan oto 234\" \"3344\" \"santiago\" \"Chile\" \"965280478\" \"Leisure\""
    }
  ],
  "line": 12,
  "name": "El cliente llena con sus datos personales \"Bryan\" \"vasquez\" \"bryan.v.gomez@gmai.com\"\"965280478\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "El cliente ingresa datos de tarjeta de credito \"4111111145551142\" \"03/30\" \"737\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
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
  "duration": 10413292271,
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
  "duration": 3242349608,
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
  "duration": 28985459434,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.elClientePresionarBuscar()"
});
formatter.result({
  "duration": 728376082,
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
  "duration": 2902372244,
  "status": "passed"
});
formatter.match({
  "location": "ResultSearchPageSteps.elClienteSeleccionaLaHabitacion()"
});
formatter.result({
  "duration": 17320585242,
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
  "duration": 13205505484,
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
  "duration": 8782056889,
  "status": "passed"
});
formatter.match({
  "location": "FromBookingPageSteps.seValidaReservaExitosaEnPantalla()"
});
formatter.result({
  "duration": 17634546310,
  "status": "passed"
});
formatter.after({
  "duration": 708198721,
  "status": "passed"
});
formatter.uri("Validaciones.feature");
formatter.feature({
  "line": 1,
  "name": "Casos de prueba para validaciones de mensajes de error, mensajes de exitos, etc",
  "description": "",
  "id": "casos-de-prueba-para-validaciones-de-mensajes-de-error,-mensajes-de-exitos,-etc",
  "keyword": "Feature"
});
formatter.before({
  "duration": 6384477608,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Cliente presiona boton search sin llenar ningun campo",
  "description": "",
  "id": "casos-de-prueba-para-validaciones-de-mensajes-de-error,-mensajes-de-exitos,-etc;cliente-presiona-boton-search-sin-llenar-ningun-campo",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@SCN02"
    },
    {
      "line": 3,
      "name": "@allTestCases"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "El cliente presiona x y presionar buscar",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Se valida mensaje en pantalla \"Please enter your destination\"",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSteps.elClientePresionaXYPresionarBuscar()"
});
formatter.result({
  "duration": 5051038532,
  "status": "passed"
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
  "duration": 799001377,
  "status": "passed"
});
formatter.after({
  "duration": 292098463,
  "status": "passed"
});
formatter.before({
  "duration": 6218718283,
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
      "name": "@SCN03"
    },
    {
      "line": 8,
      "name": "@allTestCases"
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
  "name": "El cliente selecciona fechas desde \"31 January 2023\" hasta \"18 February 2023\"",
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
  "duration": 10010954693,
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
  "duration": 2910024960,
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
  "duration": 28919377960,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.elClientePresionarBuscar()"
});
formatter.result({
  "duration": 613659283,
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
  "duration": 3664804917,
  "status": "passed"
});
formatter.match({
  "location": "ResultSearchPageSteps.elClienteSeleccionaLaHabitacion()"
});
formatter.result({
  "duration": 22916240400,
  "status": "passed"
});
formatter.match({
  "location": "FromBookingPageSteps.elClientePresionaAddMissingDetailsSinRellenarNingunCampo()"
});
formatter.result({
  "duration": 3095043024,
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
  "duration": 52194673021,
  "error_message": "org.openqa.selenium.NoSuchElementException: An element could not be located on the page using the given search parameters. (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 50.01 seconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.1.0\u0027, revision: \u0027b94c902\u0027, time: \u00272017-02-16 12:21:31 -0800\u0027\nSystem info: host: \u0027MacBook-Pro-de-Bryan.local\u0027, ip: \u0027fda5:79f7:5090:1:4e:dcfb:e7fe:a4c1%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.16\u0027, java.version: \u00271.8.0_202\u0027\nDriver info: io.appium.java_client.android.AndroidDriver\nCapabilities [{app\u003d/Users/bvasquez/Downloads/AutomationAppiumTemplate//App//booking.apk, appPackage\u003dcom.booking, deviceScreenSize\u003d1440x3120, networkConnectionEnabled\u003dtrue, statBarHeight\u003d136, warnings\u003d{}, viewportRect\u003d{top\u003d136, left\u003d0, width\u003d1440, height\u003d2680}, databaseEnabled\u003dfalse, deviceName\u003demulator-5554, platform\u003dLINUX, deviceUDID\u003demulator-5554, desired\u003d{app\u003d/Users/bvasquez/Downloads/AutomationAppiumTemplate//App//booking.apk, platformName\u003dAndroid, deviceName\u003dpixel-device}, platformVersion\u003d11, pixelRatio\u003d3.5, webStorageEnabled\u003dfalse, locationContextEnabled\u003dfalse, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, deviceScreenDensity\u003d560, deviceModel\u003dAndroid SDK built for x86, platformName\u003dAndroid, deviceApiLevel\u003d30, deviceManufacturer\u003dunknown}]\nSession ID: cd3a873d-e187-4b98-a30a-1209bdb4e851\n*** Element info: {Using\u003dxpath, value\u003d/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[2]/android.widget.LinearLayout/androidx.recyclerview.widget.RecyclerView/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.LinearLayout/javaClass[1]/android.widget.EditText}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:216)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:168)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:635)\n\tat io.appium.java_client.DefaultGenericMobileDriver.execute(DefaultGenericMobileDriver.java:40)\n\tat io.appium.java_client.AppiumDriver.execute(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.execute(AndroidDriver.java:1)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:368)\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:56)\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.findElement(AndroidDriver.java:1)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:473)\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElementByXPath(DefaultGenericMobileDriver.java:134)\n\tat io.appium.java_client.AppiumDriver.findElementByXPath(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.findElementByXPath(AndroidDriver.java:1)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:360)\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:52)\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.findElement(AndroidDriver.java:1)\n\tat pages.FormBookingPage.clickFormulariosinrelleno(FormBookingPage.java:107)\n\tat stepdefinations.FromBookingPageSteps.seDesplieganMensajesDeErrorEnLabels(FromBookingPageSteps.java:49)\n\tat ✽.Then se despliegan mensajes de error en labels \"Please enter your first name.\" \"Please enter your last name.\" \"Please enter your email address.\"\"Please enter your address.\"\"Please enter your zip/postal code.\"\"Please enter your city.\"\"Please enter your phone number.\"(Validaciones.feature:17)\n",
  "status": "failed"
});
formatter.after({
  "duration": 539886021,
  "status": "passed"
});
formatter.before({
  "duration": 6444969003,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Cliente presiona boton add missing details en formulario de informacion sin llenar ningun campo",
  "description": "",
  "id": "casos-de-prueba-para-validaciones-de-mensajes-de-error,-mensajes-de-exitos,-etc;cliente-presiona-boton-add-missing-details-en-formulario-de-informacion-sin-llenar-ningun-campo",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 19,
      "name": "@SCN04"
    },
    {
      "line": 19,
      "name": "@allTestCases"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "El cliente busca destino \"cusco\" y lo selecciona",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "El cliente selecciona fechas desde \"31 January 2023\" hasta \"18 February 2023\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "El cliente ingresa cantidad de habitaciones y pasajeros \"5 years old\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "El cliente presionar buscar",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "El cliente verifica el valor de la habitacion",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "El cliente realiza click en opcion \"[3]\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "El cliente verifica el valor de la habitacion al seleccionar la habitacion",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "El cliente selecciona la habitacion",
  "keyword": "And "
});
formatter.step({
  "line": 29,
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
  "duration": 7895974425,
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
  "duration": 2955152664,
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
  "duration": 30819859320,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.elClientePresionarBuscar()"
});
formatter.result({
  "duration": 1514214548,
  "status": "passed"
});
formatter.match({
  "location": "ResultSearchPageSteps.elClienteVerificaElValorDeLaHabitacion()"
});
formatter.result({
  "duration": 2290743731,
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
  "duration": 688221760,
  "status": "passed"
});
formatter.match({
  "location": "ResultSearchPageSteps.elClienteVerificaElValorDeLaHabitacionAlSeleccionarLaHabitacion()"
});
formatter.result({
  "duration": 4569619387,
  "status": "passed"
});
formatter.match({
  "location": "ResultSearchPageSteps.elClienteSeleccionaLaHabitacion()"
});
formatter.result({
  "duration": 26639502877,
  "status": "passed"
});
formatter.match({
  "location": "ResultSearchPageSteps.elClienteVuelveAVerificarElPrecio()"
});
