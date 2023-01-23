package stepdefinations;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.openqa.selenium.WebDriver;
import pages.FormBookingPage;
import pages.HomePage;
import pages.ResultSearchPage;
import utility.Hook;
import utility.Wait;

import static org.testng.Assert.assertEquals;
import static org.testng.Assert.assertTrue;

public class FromBookingPageSteps {

	private WebDriver driver;


	public FromBookingPageSteps() {
		this.driver = Hook.getDriver();
	}

	FormBookingPage formBookingPage = new FormBookingPage(driver);

	@And("^El cliente llena con sus datos personales \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\"$")
	public void elClienteLlenaConSusDatosPersonales(String nombre, String apellido, String email, String address, String zipCode, String city, String country, String phone, String purpose){
		Wait.waitXseconds(5);
		formBookingPage.LlenarFormulario(nombre, apellido, email, address, zipCode, city, phone);
	}

	@And("^El cliente ingresa datos de tarjeta de credito \"([^\"]*)\" \"([^\"]*)\"$")
	public void elClienteIngresaDatosDeTarjetaDeCredito(String tarjeta, String expiryDate) {
		formBookingPage.FormTarjetaCredito(tarjeta,expiryDate);
	}

	@Then("^Se valida reserva exitosa en pantalla$")
	public void seValidaReservaExitosaEnPantalla() {
		Wait.waitXseconds(5);
		formBookingPage.clickX();
		assertTrue(formBookingPage.isDisplayedMensajeExitoso(),"NO se despliega mensaje exitoso en pantalla");
	}

	@And("^El cliente presiona add missing details sin rellenar ningun campo$")
	public void elClientePresionaAddMissingDetailsSinRellenarNingunCampo() {
		formBookingPage.clickAddMissingDetailsSinRellenarCampos();
	}

	@Then("^se despliegan mensajes de error en labels \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"$")
	public void seDesplieganMensajesDeErrorEnLabels(String mensaje1, String mensaje2, String mensaje3, String mensaje4, String mensaje5, String mensaje6, String mensaje7) {
		formBookingPage.clickFormulariosinrelleno();
		assertEquals(mensaje7,formBookingPage.revisarFormularioPhone(),"Mensaje desplegado no es similar al solicitado");
		assertEquals(mensaje6,formBookingPage.revisarFormularioCity(),"Mensaje desplegado no es similar al solicitado");
		assertEquals(mensaje5,formBookingPage.revisarFormularioZipCode(),"Mensaje desplegado no es similar al solicitado");
		assertEquals(mensaje4,formBookingPage.revisarFormularioAddress(),"Mensaje desplegado no es similar al solicitado");
		formBookingPage.volverArriba();
		assertEquals(mensaje3,formBookingPage.revisarFormularioEmail(),"Mensaje desplegado no es similar al solicitado");
		assertEquals(mensaje2,formBookingPage.revisarFormularioLastName(),"Mensaje desplegado no es similar al solicitado");
		assertEquals(mensaje1,formBookingPage.revisarFormularioFirsName(),"Mensaje desplegado no es similar al solicitado");

	}
}

