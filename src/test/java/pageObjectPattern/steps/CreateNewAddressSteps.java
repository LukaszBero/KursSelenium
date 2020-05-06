package pageObjectPattern.steps;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import pageObjectPattern.pages.HeaderComponent;
import pageObjectPattern.pages.LoginPage;
import pageObjectPattern.pages.MyAccountPage;
import pageObjectPattern.pages.UserAddressPage;


import java.util.concurrent.TimeUnit;

public class CreateNewAddressSteps {
    MyAccountPage myAccountPage;
    HeaderComponent headerComponent;
    LoginPage loginPage;
    UserAddressPage userAddressPage;
    WebDriver driver;

    @Given("^Create new address after login$")
    public void CreateNewAddressAfterLogin() {
        System.setProperty("webdriver.chrome.driver",
                "src/main/resources/drivers/chromedriver");
        driver = new ChromeDriver();
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        driver.manage().window().maximize();

        driver.get("https://prod-kurs.coderslab.pl/index.php?controller=authentication");
        loginPage = new LoginPage(driver);
        userAddressPage = new UserAddressPage(driver);
        myAccountPage = new MyAccountPage(driver);
        headerComponent = new HeaderComponent(driver);
        loginPage.loginAs("michal.dobrzycki@coderslab.pl", "CodersLab");
    }

    @When("^User goes to UserInformationAddressesPage$")
    public void userGoesToUserInformationAddressesPage() {
        headerComponent = new HeaderComponent(driver);
        userAddressPage = new UserAddressPage(driver);
    }

    @And("^User added new address$")
    public void userAddedNewAddress() {
    }

    @And("^User saves new address$")
    public void userSavesNewAddress() {
    }
}
