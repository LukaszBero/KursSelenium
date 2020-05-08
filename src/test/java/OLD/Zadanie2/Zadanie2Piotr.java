package OLD.Zadanie2;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;

import java.util.List;

public class Zadanie2Piotr {
    private WebDriver driver;
    private WebElement firstNameInput;
    private WebElement lastNameInput;
    private List<WebElement> gendersRadioButtons;
    private WebElement dateOfBirthPicker;
    private WebElement address;
    private WebElement email;
    private WebElement password;
    private WebElement company;
    private WebElement comment;
    private WebElement submit;
    private Select role;



    @Before
    public void setUp() {
        // Uruchom nowy egzemplarz przeglądarki Chrome
        System.setProperty("webdriver.chrome.driver",
                "src/main/resources/drivers/chromedriver");
        driver = new ChromeDriver();
        // Zmaksymalizuj okno przeglądarki
        driver.manage().window().maximize();
        // Przejdź do Google
        driver.get("https://katalon-test.s3.amazonaws.com/demo-aut/dist/html/form.html");

        firstNameInput = driver.findElement(By.id("first-name"));
        lastNameInput = driver.findElement(By.id("last-name"));
        gendersRadioButtons = driver.findElements(By.name("gender"));
        dateOfBirthPicker = driver.findElement(By.id("dob"));
        address = driver.findElement(By.id("address"));
        email = driver.findElement(By.id("email"));
        password = driver.findElement(By.id("password"));
        company = driver.findElement(By.id("company"));
        comment = driver.findElement(By.id("comment"));
        submit = driver.findElement(By.id("submit"));
        role = new Select(driver.findElement(By.id("role")));
    }

    @Test
    public void fillForm() {
        firstNameInput.sendKeys("Karol");
        lastNameInput.sendKeys("Kowalski");
        gendersRadioButtons.get(0).click();
        dateOfBirthPicker.sendKeys("05/22/2010");
        address.sendKeys("Prosta 51");
        email.sendKeys("karol.kowalski@mailinator.com");
        password.sendKeys("Pass123");
        company.sendKeys("Coders Lab");
        role.selectByVisibleText("Manager");
        comment.sendKeys("To jest mój pierwszy automat testowy");
        submit.click();
    }

    @After
    public void tearDown() throws Exception {
        // Zamknij przeglądarkę
        driver.quit();
    }
}
