package pages;

import io.appium.java_client.*;
import io.appium.java_client.android.AndroidDriver;
import io.appium.java_client.android.AndroidElement;
import io.appium.java_client.pagefactory.AndroidFindBy;
import io.appium.java_client.pagefactory.AppiumFieldDecorator;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.touch.TouchActions;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;
import utility.Hook;
import utility.Wait;

import java.util.ArrayList;
import java.util.List;

public class HomePage extends Hook{

    private WebDriver driver;


    public HomePage(WebDriver driver) {
        this.driver = Hook.getDriver();

    }




    @AndroidFindBy(id = "com.booking:id/facet_search_box_accommodation_destination")
    AndroidElement destinolbl;

    @AndroidFindBy(xpath = "//android.widget.ImageButton[@content-desc=\"Navigate up\"]")
    public AndroidElement Xbutton;

    //WebElement xbutton = driver.findElementByXPath("//android.widget.ImageButton[@content-desc=\"Navigate up\"]");

    public void clickXbuttom() throws InterruptedException {
        AndroidElement clickFila = (AndroidElement) driver.findElement(By.xpath("//android.widget.ImageButton[@content-desc=\"Navigate up\"]"));
        clickFila.click();
        //driver.wait(5);

    }

    public void clickDestino() {
        AndroidElement buscador = (AndroidElement) driver.findElement(By.id("com.booking:id/facet_search_box_accommodation_destination"));
        buscador.click();
    }

    public void sendKeysDestino(String destino) {
        AndroidElement buscadorKeys = (AndroidElement) driver.findElement(By.id("com.booking:id/facet_with_bui_free_search_booking_header_toolbar_content"));
        buscadorKeys.sendKeys(destino);
        AndroidElement selectdestino = (AndroidElement) driver.findElement(By.xpath("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/androidx.recyclerview.widget.RecyclerView/android.view.ViewGroup[1]"));
        selectdestino.click();
    }

    public void seleccionarFechas (String inicial, String fechaFinal) {
        AndroidElement dateInitial = (AndroidElement) driver.findElement(By.xpath("//android.view.View[@content-desc=\""+inicial+"\"]"));
        dateInitial.click();
        AndroidElement dateFinal = (AndroidElement) driver.findElement(By.xpath("//android.view.View[@content-desc=\""+fechaFinal+"\"]"));
        //TouchActions action = new TouchActions(driver);
        //action.scroll(dateFinal, 10, 100);
        //action.perform();
        //JavascriptExecutor js = (JavascriptExecutor) driver;
        //js.executeScript("window.scrollBy(0,1000)");
        dateFinal.click();
        AndroidElement dateConfirm = (AndroidElement) driver.findElement(By.id("com.booking:id/facet_date_picker_confirm"));
        dateConfirm.click();
    }

    public void selectHabitaciones(String ninos) {
        AndroidElement selectHabitaciones = (AndroidElement) driver.findElement(By.id("com.booking:id/facet_search_box_accommodation_occupancy"));
        selectHabitaciones.click();
        AndroidElement buttonMasNinos = (AndroidElement) driver.findElement(By.xpath("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.LinearLayout/android.view.ViewGroup[3]/android.widget.LinearLayout/android.widget.Button[2]"));
        buttonMasNinos.click();
        AndroidElement selectHabitacionesw = (AndroidElement) driver.findElement(MobileBy.AndroidUIAutomator("new UiScrollable(new UiSelector().scrollable(true).instance(0)).scrollIntoView(new UiSelector().text(\"" + ninos + "\").instance(0))"));
        selectHabitacionesw.click();
        AndroidElement okButton = (AndroidElement) driver.findElement(By.id("android:id/button1"));
        okButton.click();
        AndroidElement applyButton = (AndroidElement) driver.findElement(By.id("com.booking:id/group_config_apply_button"));
        applyButton.click();
    }

    public void clickSeach() {
        AndroidElement searchButton = (AndroidElement) driver.findElement(By.id("com.booking:id/facet_search_box_cta"));
        searchButton.click();
    }



}
