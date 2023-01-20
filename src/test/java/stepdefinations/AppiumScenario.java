package stepdefinations;

import cucumber.api.PendingException;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.testng.Assert;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import utility.Hook;

public class AppiumScenario {

private WebDriver driver;
	
	public AppiumScenario() {
		this.driver = Hook.getDriver();
	}
	
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
		driver.findElement(By.xpath("//android.widget.ImageButton[@content-desc=\"Navigate up\"]")).click();
		driver.findElement(By.id("com.booking:id/facet_search_box_accommodation_destination")).click();
		driver.findElement(By.id("com.booking:id/facet_with_bui_free_search_booking_header_toolbar_content")).sendKeys(destino);


	}
}
