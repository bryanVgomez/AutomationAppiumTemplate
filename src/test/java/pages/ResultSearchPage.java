package pages;

import io.appium.java_client.MobileBy;
import io.appium.java_client.android.AndroidElement;
import io.appium.java_client.pagefactory.AndroidFindBy;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import utility.Hook;
import utility.Wait;

public class ResultSearchPage extends Hook{

    private WebDriver driver;


    public ResultSearchPage(WebDriver driver) {
        this.driver = Hook.getDriver();

    }

    public void selectOpcion (String numero) {
        AndroidElement selectOpcion = (AndroidElement) driver.findElement(By.xpath("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.widget.LinearLayout/android.view.ViewGroup/android.widget.FrameLayout/androidx.recyclerview.widget.RecyclerView/android.view.ViewGroup"+numero));
        selectOpcion.click();
    }
    public void selectHabitacion () {
        AndroidElement selectHabitacion = (AndroidElement) driver.findElement(By.id("com.booking:id/select_room_cta"));
        selectHabitacion.click();
        AndroidElement ReservarHabitacion = (AndroidElement) driver.findElement(By.id("com.booking:id/recommended_block_reserve_button"));
        ReservarHabitacion.click();
    }

    public void selectHabitacion2 () {
        AndroidElement selectHabitacion = (AndroidElement) driver.findElement(By.id("com.booking:id/select_room_cta"));
        selectHabitacion.click();
        //AndroidElement buttonSelectCustomize = (AndroidElement) driver.findElement(By.id("com.booking:id/rooms_item_select_layout"));
        //buttonSelectCustomize.click();
        //AndroidElement buttonConfirm = (AndroidElement) driver.findElement(By.id("com.booking:id/room_pref_select"));
        //buttonConfirm.click();
        Wait.waitXseconds(5);
        AndroidElement buttonReserve = (AndroidElement) driver.findElement(By.xpath("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[2]/android.widget.RelativeLayout/android.widget.LinearLayout[2]/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.Button"));
        buttonReserve.click();
    }

    public String guardarValor () {
        AndroidElement selectOpcion = (AndroidElement) driver.findElement(By.id("com.booking:id/price_view_price"));
        return selectOpcion.getText();
    }

    public String guardarValor2 () {
        AndroidElement selectOpcion = (AndroidElement) driver.findElement(By.id("com.booking:id/price_view_price"));
        return selectOpcion.getText();
    }

    public String guardarValor3 () {
        AndroidElement selectOpcion = (AndroidElement) driver.findElement(By.id("com.booking:id/price_view_price"));
        return selectOpcion.getText();
    }


}
