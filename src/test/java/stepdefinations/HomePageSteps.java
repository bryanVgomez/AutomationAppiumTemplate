package stepdefinations;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import io.appium.java_client.MobileElement;
import io.appium.java_client.android.AndroidDriver;
import io.appium.java_client.android.AndroidElement;
import io.appium.java_client.pagefactory.AndroidFindBy;
import io.appium.java_client.pagefactory.AppiumFieldDecorator;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.testng.Assert;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pages.HomePage;
import utility.Hook;
import utility.Wait;

public class HomePageSteps {

private WebDriver driver;


	public HomePageSteps() {
		this.driver = Hook.getDriver();
	}

	HomePage homepage = new HomePage(driver);

	
	@Given("^I open the application$")
	public void i_open_the_application() throws Throwable {
	    Assert.assertTrue(driver.findElement(By.xpath("//*[@text='Accessibility']")).isDisplayed());   
	}

	@When("^I tap on Accessibility$")
	public void i_tap_on_Accessibility() throws Throwable {
		driver.findElement(By.xpath("//*[@text='Accessibility']")).click();
	}

	@Then("^I validate Custom View$")
	public void i_validate_Custom_View() throws Throwable {
	  Assert.assertTrue(driver.findElement(By.xpath("//*[@text='Custom View']")).isDisplayed(), "Custom View is not displayed");
	  
	}

	@Given("^El cliente busca destino \"([^\"]*)\" y lo selecciona$")
	public void elClienteBuscaDestinoYLoSelecciona(String destino) throws Throwable {
		homepage.clickXbuttom();
		homepage.clickDestino();
		homepage.sendKeysDestino(destino);
		//homepage.selectDestino();
	}


	@And("^El cliente selecciona fechas desde \"([^\"]*)\" hasta \"([^\"]*)\"$")
	public void elClienteSeleccionaFechasDesdeHasta(String inicial, String fechaFinal)  {
		homepage.seleccionarFechas(inicial,fechaFinal);
	}

	@And("^El cliente ingresa cantidad de habitaciones y pasajeros \"([^\"]*)\"$")
	public void elClienteIngresaCantidadDeHabitacionesYPasajeros(String ninos){
		homepage.selectHabitaciones(ninos);
	}

	@And("^El cliente presionar buscar$")
	public void elClientePresionarBuscar() {
		homepage.clickSeach();
	}
}
