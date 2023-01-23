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
		resultSearchPage.selectHabitacion();
	}
}

