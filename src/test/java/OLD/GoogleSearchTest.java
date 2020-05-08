package OLD;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)

@CucumberOptions(features = "src/cucumber/features", glue = "src.test.OLD.steps",
        plugin = {"pretty", "html:out"})

public class GoogleSearchTest {
}