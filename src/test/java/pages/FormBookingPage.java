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

    public void LlenarFormulario2 (String nombre, String apellido, String email, String phone) {
        AndroidElement nombreLbl = (AndroidElement) driver.findElement(By.xpath("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[2]/android.widget.LinearLayout/androidx.recyclerview.widget.RecyclerView/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/javaClass[1]/android.widget.EditText"));
        nombreLbl.sendKeys(nombre);
        AndroidElement lastNameLbl = (AndroidElement) driver.findElement(By.xpath("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[2]/android.widget.LinearLayout/androidx.recyclerview.widget.RecyclerView/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/javaClass[2]/android.widget.EditText"));
        lastNameLbl.sendKeys(apellido);
        AndroidElement emailLbl3 = (AndroidElement) driver.findElement(By.xpath("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[2]/android.widget.LinearLayout/androidx.recyclerview.widget.RecyclerView/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/javaClass[3]/android.widget.EditText"));
        emailLbl3.sendKeys(email);
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

    public void FormTarjetaCredito (String tarjeta, String expiryDate, String cvc) {
        AndroidElement tarjetaCreditoLbl = (AndroidElement) driver.findElement(By.id("com.booking:id/new_credit_card_number_edit"));
        tarjetaCreditoLbl.sendKeys(tarjeta);
        AndroidElement expiryDateLbl = (AndroidElement) driver.findElement(By.id("com.booking:id/new_credit_card_expiry_date_edit"));
        expiryDateLbl.sendKeys(expiryDate);
        AndroidElement cvcCode = (AndroidElement) driver.findElement(By.id("com.booking:id/new_credit_card_cvc_edit_text"));
        cvcCode.sendKeys(cvc);
        Wait.waitXseconds(2);
        AndroidElement nextStepBtn2 = (AndroidElement) driver.findElement(By.id("com.booking:id/action_button"));
        nextStepBtn2.click();
    }

    public void FormTarjetaCredito2 (String tarjeta, String expiryDate,String svc) {
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

    public void clickFormulariosinrelleno () {
        AndroidElement nombreLbl = (AndroidElement) driver.findElement(By.xpath("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[2]/android.widget.LinearLayout/androidx.recyclerview.widget.RecyclerView/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/javaClass[1]/android.widget.EditText"));
        nombreLbl.click();
        AndroidElement lastNameLbl = (AndroidElement) driver.findElement(By.xpath("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[2]/android.widget.LinearLayout/androidx.recyclerview.widget.RecyclerView/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/javaClass[2]/android.widget.EditText"));
        lastNameLbl.click();
        AndroidElement emailLbl3 = (AndroidElement) driver.findElement(By.xpath("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[2]/android.widget.LinearLayout/androidx.recyclerview.widget.RecyclerView/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/javaClass[3]/android.widget.EditText"));
        emailLbl3.click();
        AndroidElement addressLbl = (AndroidElement) driver.findElement(By.xpath("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[2]/android.widget.LinearLayout/androidx.recyclerview.widget.RecyclerView/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.LinearLayout/javaClass[1]/android.widget.EditText"));
        addressLbl.click();
        AndroidElement scrollCountry = (AndroidElement) driver.findElement(MobileBy.AndroidUIAutomator("new UiScrollable(new UiSelector().scrollable(true).instance(0)).scrollIntoView(new UiSelector().text(\"What's the primary purpose of your trip?\").instance(0))"));
        scrollCountry.click();
        AndroidElement zipCodeLbl = (AndroidElement) driver.findElement(By.xpath("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[2]/android.widget.LinearLayout/androidx.recyclerview.widget.RecyclerView/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.LinearLayout/javaClass[2]/android.widget.EditText"));
        zipCodeLbl.click();
        AndroidElement cityLbl = (AndroidElement) driver.findElement(By.xpath("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[2]/android.widget.LinearLayout/androidx.recyclerview.widget.RecyclerView/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.LinearLayout/javaClass[3]/android.widget.EditText"));
        cityLbl.click();
        AndroidElement phoneLbl = (AndroidElement) driver.findElement(By.xpath("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[2]/android.widget.LinearLayout/androidx.recyclerview.widget.RecyclerView/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.LinearLayout/javaClass[2]/android.widget.EditText"));
        phoneLbl.click();
        AndroidElement scrollCountry2 = (AndroidElement) driver.findElement(MobileBy.AndroidUIAutomator("new UiScrollable(new UiSelector().scrollable(true).instance(0)).scrollIntoView(new UiSelector().text(\"Leisure\").instance(0))"));
        scrollCountry2.click();
        AndroidElement purpose = (AndroidElement) driver.findElement(By.id("com.booking:id/business_purpose_leisure"));
        purpose.click();
    }

    public void volverArriba () {
        Wait.waitXseconds(10);
        AndroidElement scrollCountry = (AndroidElement) driver.findElement(MobileBy.AndroidUIAutomator("new UiScrollable(new UiSelector().scrollable(true).instance(0)).scrollIntoView(new UiSelector().text(\"First Name *\").instance(0))"));
        scrollCountry.click();
        Wait.waitXseconds(2);
        AndroidElement nextStepBtn = (AndroidElement) driver.findElement(By.id("com.booking:id/action_button"));
        nextStepBtn.click();

    }

    public boolean isDisplayedMensajeExitoso () {
        AndroidElement mensajeExitoso = (AndroidElement) driver.findElement(By.id("com.booking:id/confirmation_container"));
        return mensajeExitoso.isDisplayed();
    }

    public void clickAddMissingDetailsSinRellenarCampos () {
        Wait.waitXseconds(3);
        AndroidElement nextStepBtn = (AndroidElement) driver.findElement(By.id("com.booking:id/action_button"));
        nextStepBtn.click();

    }

    public String revisarFormularioFirsName () {
        AndroidElement nombreLbl = (AndroidElement) driver.findElement(By.xpath("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[2]/android.widget.LinearLayout/androidx.recyclerview.widget.RecyclerView/android.widget.FrameLayout[3]/android.widget.FrameLayout/android.widget.LinearLayout/javaClass[1]/android.widget.TextView[2]"));
        return nombreLbl.getText();
    }

    public String revisarFormularioLastName () {
        AndroidElement lastNameLbl = (AndroidElement) driver.findElement(By.xpath("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[2]/android.widget.LinearLayout/androidx.recyclerview.widget.RecyclerView/android.widget.FrameLayout[3]/android.widget.FrameLayout/android.widget.LinearLayout/javaClass[2]/android.widget.TextView[2]"));
        return lastNameLbl.getText();
    }

    public String revisarFormularioEmail () {
        AndroidElement emailLbl3 = (AndroidElement) driver.findElement(By.xpath("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[2]/android.widget.LinearLayout/androidx.recyclerview.widget.RecyclerView/android.widget.FrameLayout[3]/android.widget.FrameLayout/android.widget.LinearLayout/javaClass[3]/android.widget.TextView[2]"));
        return emailLbl3.getText();
    }

    public String revisarFormularioAddress () {
        AndroidElement addresslbl = (AndroidElement) driver.findElement(By.xpath("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[2]/android.widget.LinearLayout/androidx.recyclerview.widget.RecyclerView/android.widget.FrameLayout[1]/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.LinearLayout/javaClass[1]/android.widget.TextView[2]"));
        return addresslbl.getText();
    }

    public String revisarFormularioZipCode () {
        AndroidElement zipCodeLbl = (AndroidElement) driver.findElement(By.xpath("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[2]/android.widget.LinearLayout/androidx.recyclerview.widget.RecyclerView/android.widget.FrameLayout[1]/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.LinearLayout/javaClass[2]/android.widget.TextView[2]"));
        return zipCodeLbl.getText();
    }

    public String revisarFormularioCity () {
        AndroidElement zipCodeLbl = (AndroidElement) driver.findElement(By.xpath("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[2]/android.widget.LinearLayout/androidx.recyclerview.widget.RecyclerView/android.widget.FrameLayout[1]/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.LinearLayout/javaClass[3]/android.widget.TextView[2]"));
        return zipCodeLbl.getText();
    }

    public String revisarFormularioPhone () {
        AndroidElement phoneLbl = (AndroidElement) driver.findElement(By.xpath("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[2]/android.widget.LinearLayout/androidx.recyclerview.widget.RecyclerView/android.widget.FrameLayout[1]/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.LinearLayout/javaClass[2]/android.widget.TextView[2]"));
        return phoneLbl.getText();
    }



}
