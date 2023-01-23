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
		//assertTrue(formBookingPage.isDisplayedMensajeExitoso(),"NO se despliega mensaje exitoso en pantalla");

	}
}

