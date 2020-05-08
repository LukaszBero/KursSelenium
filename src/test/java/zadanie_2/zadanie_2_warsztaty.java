package zadanie_2;

import org.apache.commons.io.FileUtils;
import org.junit.Before;
import org.junit.Test;
import org.openqa.selenium.*;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;

import java.io.File;

public class zadanie_2_warsztaty {
    private WebDriver driver;

    @Before
    public void browserOpenAndLogIn() {
        System.setProperty("webdriver.chrome.driver",
                "src/main/resources/drivers/chromedriver");
        driver = new ChromeDriver();
        driver.manage().window().maximize();
        driver.get("https://prod-kurs.coderslab.pl/");

        WebElement signIn = driver.findElement(By.cssSelector(".user-info > a:nth-child(1)"));
        signIn.click();

        WebElement email = driver.findElement(By.name("email"));
        email.sendKeys("wnhtreubirelboclki@awdrt.org");

        WebElement pass = driver.findElement(By.name("password"));
        pass.sendKeys("haslo666");
        pass.submit();

        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    @Test
    public void buyProcessTest() {
        WebElement clothesCategory = driver.findElement(By.id("category-3"));
        clothesCategory.click();

        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        WebElement hummingbirdPrintedTshirt = driver.findElement(By.xpath("/html/body/main/section/div/div[2]/section/section/div[3]/div/div[1]/article[1]/div/a/img"));
        hummingbirdPrintedTshirt.click();
        Select sizePicking = new Select(driver.findElement(By.id("group_1")));
        sizePicking.selectByVisibleText("M");

        WebElement goToChart = driver.findElement(By.xpath("/html/body/main/section/div/div/section/div[1]/div[2]/div[2]/div[2]/form/div[2]/div/div[2]/button"));
        goToChart.click();

        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        WebElement proceedToCheckout = driver.findElement(By.xpath("/html/body/div[1]/div/div/div[2]/div/div[2]/div/div/a"));
        proceedToCheckout.click();

        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        WebElement quantityInput = driver.findElement(By.xpath("/html/body/main/section/div/div/section/div/div[1]/div/div[2]/ul/li/div/div[3]/div/div[2]/div/div[1]/div/input"));
        quantityInput.click();
        quantityInput.clear();
        quantityInput.sendKeys("5");

        WebElement proceedtoCheckoutInChart = driver. findElement(By.xpath("/html/body/main/section/div/div/section/div/div[2]/div[1]/div[2]/div/a"));
        proceedtoCheckoutInChart.click();

        WebElement goToCheckOut = driver.findElement(By.name("confirm-addresses"));
        goToCheckOut.click();
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        WebElement confirmDeliveryOption = driver.findElement(By.name("confirmDeliveryOption"));
        confirmDeliveryOption.click();
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        WebElement paymentOptionRB = driver.findElement(By.id("payment-option-1"));
        paymentOptionRB.click();

        WebElement termsOfServiceCB = driver.findElement(By.name("conditions_to_approve[terms-and-conditions]"));
        termsOfServiceCB.click();

        WebElement finalConfirm = driver.findElement(By.cssSelector("#payment-confirmation > div.ps-shown-by-js > button"));
        finalConfirm.click();
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        try {
            File screenshot = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);

            FileUtils.copyFile(screenshot, new File("/home/Pulpit/potwierdzanie_zamówienia.png"));

        } catch (Exception e) {
            System.out.println("Failure to take screenshot " + e);
        }

    }
}
