package OLD.pageObjectPattern;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)

@CucumberOptions(features = "src/test/java/OLD.pageObjectPattern/features", glue = "OLD.pageObjectPattern.OLD.steps",
        plugin = {"pretty", "html:out"})

public class testRunner {
}