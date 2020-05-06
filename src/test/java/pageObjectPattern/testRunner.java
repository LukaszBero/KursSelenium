package pageObjectPattern;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)

@CucumberOptions(features = "src/test/java/pageObjectPattern/features", glue = "pageObjectPattern.steps",
        plugin = {"pretty", "html:out"})

public class testRunner {
}