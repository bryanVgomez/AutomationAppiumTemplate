package pages;

import io.appium.java_client.MobileBy;
import io.appium.java_client.android.AndroidElement;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import utility.Hook;
import utility.Wait;

public class FormBookingPage extends Hook{

    private WebDriver driver;


    public FormBookingPage(WebDriver driver) {
        this.driver = Hook.getDriver();

    }

    public void LlenarFormulario (String nombre, String apellido, String email, String address, String zipCode, String city, String phone) {
        AndroidElement nombreLbl = (AndroidElement) driver.findElement(By.xpath("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[2]/android.widget.LinearLayout/androidx.recyclerview.widget.RecyclerView/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/javaClass[1]/android.widget.EditText"));
        nombreLbl.sendKeys(nombre);
        AndroidElement lastNameLbl = (AndroidElement) driver.findElement(By.xpath("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[2]/android.widget.LinearLayout/androidx.recyclerview.widget.RecyclerView/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/javaClass[2]/android.widget.EditText"));
        lastNameLbl.sendKeys(apellido);
        AndroidElement emailLbl3 = (AndroidElement) driver.findElement(By.xpath("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[2]/android.widget.LinearLayout/androidx.recyclerview.widget.RecyclerView/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/javaClass[3]/android.widget.EditText"));
        emailLbl3.sendKeys(email);
        AndroidElement addressLbl = (AndroidElement) driver.findElement(By.xpath("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[2]/android.widget.LinearLayout/androidx.recyclerview.widget.RecyclerView/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.LinearLayout/javaClass[1]/android.widget.EditText"));
        addressLbl.sendKeys(address);
        AndroidElement zipCodeLbl = (AndroidElement) driver.findElement(By.xpath("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[2]/android.widget.LinearLayout/androidx.recyclerview.widget.RecyclerView/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.LinearLayout/javaClass[2]/android.widget.EditText"));
        zipCodeLbl.sendKeys(zipCode);
        AndroidElement cityLbl = (AndroidElement) driver.findElement(By.xpath("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[2]/android.widget.LinearLayout/androidx.recyclerview.widget.RecyclerView/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.LinearLayout/javaClass[3]/android.widget.EditText"));
        cityLbl.sendKeys(city);
        AndroidElement scrollPhone = (AndroidElement) driver.findElement(MobileBy.AndroidUIAutomator("new UiScrollable(new UiSelector().scrollable(true).instance(0)).scrollIntoView(new UiSelector().text(\"Mobile Phone *\").instance(0))"));
        scrollPhone.click();
        Wait.waitXseconds(2);
        AndroidElement phoneLbl = (AndroidElement) driver.findElement(By.xpath("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[2]/android.widget.LinearLayout/androidx.recyclerview.widget.RecyclerView/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.LinearLayout/javaClass[2]/android.widget.EditText"));
        phoneLbl.sendKeys(phone);
        //emailLbl.sendKeys("sr3fwedkjjdideied");
        //Actions action = new Actions(driver);
        //action.sendKeys("iphone").perform();
        Wait.waitXseconds(2);
        AndroidElement nextStepBtn = (AndroidElement) driver.findElement(By.id("com.booking:id/action_button"));
        nextStepBtn.click();
        Wait.waitXseconds(2);
        AndroidElement nextStepBtn2 = (AndroidElement) driver.findElement(By.id("com.booking:id/action_button"));
        nextStepBtn2.click();
    }

    public void FormTarjetaCredito (String tarjeta, String expiryDate) {
        AndroidElement tarjetaCreditoLbl = (AndroidElement) driver.findElement(By.id("com.booking:id/new_credit_card_number_edit"));
        tarjetaCreditoLbl.sendKeys(tarjeta);
        AndroidElement expiryDateLbl = (AndroidElement) driver.findElement(By.id("com.booking:id/new_credit_card_expiry_date_edit"));
        expiryDateLbl.sendKeys(expiryDate);
        Wait.waitXseconds(2);
        AndroidElement nextStepBtn2 = (AndroidElement) driver.findElement(By.id("com.booking:id/action_button"));
        nextStepBtn2.click();
    }

    public void clickX () {
        AndroidElement buttonX = (AndroidElement) driver.findElement(By.id("com.booking:id/bui_bottom_sheet_close"));
        buttonX.click();
    }

    public boolean isDisplayedMensajeExitoso () {
        AndroidElement mensajeExitoso = (AndroidElement) driver.findElement(By.id("com.booking:id/bp_processing_screen_spinner_container"));
        return mensajeExitoso.isDisplayed();
    }



}
