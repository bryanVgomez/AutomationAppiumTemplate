package stepdefinations;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.testng.Assert;
import pages.HomePage;
import pages.ResultSearchPage;
import utility.Hook;
import utility.Wait;

public class ResultSearchPageSteps {

	private WebDriver driver;


	public ResultSearchPageSteps() {
		this.driver = Hook.getDriver();
	}

	HomePage homepage = new HomePage(driver);
	ResultSearchPage resultSearchPage = new ResultSearchPage(driver);


	@And("^El cliente realiza click en opcion \"([^\"]*)\"$")
	public void elClienteRealizaClickEnOpcion(String numero) {
		resultSearchPage.selectOpcion(numero);

	}
	@And("^El cliente selecciona la habitacion$")
	public void elClienteSeleccionaLaHabitacion() {
		Wait.waitXseconds(3);
		resultSearchPage.selectHabitacion2();
		Wait.waitXseconds(3);
	}

	@And("^El cliente verifica el valor de la habitacion$")
	public void elClienteVerificaElValorDeLaHabitacion() {
		resultSearchPage.guardarValor();

	}

	@And("^El cliente verifica el valor de la habitacion al seleccionar la habitacion$")
	public void elClienteVerificaElValorDeLaHabitacionAlSeleccionarLaHabitacion() {
		resultSearchPage.guardarValor2();
	}

	@And("^El cliente vuelve a verificar el precio$")
	public void elClienteVuelveAVerificarElPrecio() {
		resultSearchPage.guardarValor3();
		System.out.println(resultSearchPage.guardarValor());
		System.out.println(resultSearchPage.guardarValor2());
		System.out.println(resultSearchPage.guardarValor3());
		Assert.assertEquals(resultSearchPage.guardarValor(),resultSearchPage.guardarValor2());
		Assert.assertEquals(resultSearchPage.guardarValor2(),resultSearchPage.guardarValor3());
		Assert.assertEquals(resultSearchPage.guardarValor(),resultSearchPage.guardarValor3());

	}

	@Then("^se valida que el precio no cambia al realizar cambios de pantalla$")
	public void seValidaQueElPrecioNoCambiaAlRealizarCambiosDePantalla() {
		System.out.println(resultSearchPage.guardarValor());
		System.out.println(resultSearchPage.guardarValor2());
		//System.out.println(resultSearchPage.guardarValor3());
		Assert.assertEquals(resultSearchPage.guardarValor(),resultSearchPage.guardarValor2());
	}
}

