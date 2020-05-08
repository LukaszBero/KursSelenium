package OLD.Zadanie_1;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)

@CucumberOptions(features = "src/cucumber/features", glue = "cucumber.OLD.steps",
        plugin = {"pretty", "html:out"})

public class addAddressTest {
}
