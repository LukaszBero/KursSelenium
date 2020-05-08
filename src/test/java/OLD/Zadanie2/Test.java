package OLD.Zadanie2;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.By;
import org.junit.*;
import static org.junit.Assert.*;

import java.util.List;

public class Test {
    private WebDriver driver;

    @Before
    public void setUp() {
        // Uruchom nowy egzemplarz przeglądarki Chrome
        System.setProperty("webdriver.chrome.driver",
                "src/main/resources/drivers/chromedriver");
        driver = new ChromeDriver();

        // Zmaksymalizuj okno przeglądarki
        driver.manage().window().maximize();
        // Przejdź do strony
        driver.get("https://katalon-test.s3.amazonaws.com/demo-aut/dist/html/form.html");
    }
    @org.junit.Test
    public void test() {

        // Znajdź element wprowadzania tekstu na podstawie jego nazwy
        WebElement firstNameImput = driver.findElement(By.name("firstName"));
        firstNameImput.isDisplayed();
        // Wyczyść teskst zapisany w elemencie
        firstNameImput.clear();
        // Wpisz
        firstNameImput.sendKeys("Karol");
        assertEquals("Karol", firstNameImput.getAttribute("value"));
        assertNotNull(firstNameImput);

        WebElement lastNameInput = driver.findElement(By.name("lastName"));
        lastNameInput.isDisplayed();
        lastNameInput.clear();
        lastNameInput.sendKeys("Kowalski");
        assertNotNull(lastNameInput);
        assertEquals("Kowalski", lastNameInput.getAttribute("value"));

        List<WebElement> listOfGenders = driver.findElements(By.name("gender"));
        listOfGenders.get(0).click();

        WebElement dobImput = driver.findElement(By.name("dob"));
        dobImput.isDisplayed();
        dobImput.clear();
        dobImput.sendKeys("05/22/2010");
        assertEquals("05/22/2010", dobImput.getAttribute("value"));
        assertNotNull(dobImput);

        WebElement addressImput = driver.findElement(By.name("address"));
        addressImput.isDisplayed();
        addressImput.clear();
        addressImput.sendKeys("Prosta 51");
        assertEquals("Prosta 51", addressImput.getAttribute("value"));
        assertNotNull(addressImput);

        WebElement emailImput = driver.findElement(By.name("email"));
        emailImput.isDisplayed();
        emailImput.clear();
        emailImput.sendKeys("karol.kowalski@mailinator.com");
        assertEquals("karol.kowalski@mailinator.com", emailImput.getAttribute("value"));
        assertNotNull(emailImput);

        WebElement passwordImput = driver.findElement(By.name("password"));
        passwordImput.isDisplayed();
        passwordImput.clear();
        passwordImput.sendKeys("Pass123");
        assertEquals("Pass123", passwordImput.getAttribute("value"));
        assertNotNull(passwordImput);

        WebElement companyImput = driver.findElement(By.name("company"));
        companyImput.isDisplayed();
        companyImput.clear();
        companyImput.sendKeys("Coders Lab");
        assertEquals("Coders Lab", companyImput.getAttribute("value"));
        assertNotNull(companyImput);

        WebElement commentImput = driver.findElement(By.name("comment"));
        commentImput.isDisplayed();
        commentImput.clear();
        commentImput.sendKeys("To jest mój pierwszy automat testowy");
        assertEquals("To jest mój pierwszy automat testowy", commentImput.getAttribute("value"));
        assertNotNull(commentImput);

        // Prześlij formularz
        WebElement submit = driver.findElement(By.id("submit"));
        submit.isDisplayed();
        submit.submit();
    }
    @After
    public void tearDown() throws Exception {
        // Zamknij przeglądarkę
        driver.quit();
    }
}
