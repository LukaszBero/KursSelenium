package pageObjectPattern.pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class HeaderComponent {
    private static WebDriver driver;

    @FindBy(xpath = "//a[@class='account']")
    WebElement userName;

    public HeaderComponent(WebDriver driver) {
        HeaderComponent.driver = driver;
        PageFactory.initElements(driver, this);
    }

    public void goToUserInformationView(){
        userName.click();
    }
}