package runner;

import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.BeforeSuite;
import org.testng.annotations.DataProvider;
import org.testng.annotations.Optional;
import org.testng.annotations.Parameters;
import org.testng.annotations.Test;

import configuration.Basesuit;
import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;
import cucumber.api.testng.CucumberFeatureWrapper;
import cucumber.api.testng.TestNGCucumberRunner;

@CucumberOptions(features = ".//src//main//java//features//UserLogin.feature",
				 glue={"stepdefination"},
				 format= {"pretty","html:test-outout", "junit:junit_xml/cucumber.xml",
						 "json:target/cucumber-reports/CucumberTestReport.json"},
				 plugin = "json:target/cucumber-reports/CucumberTestReport.json",
				 monochrome=true,
				 dryRun=false
				 ) 
//@Test
public class TestRunner //extends AbstractTestNGCucumberTests
{
	private TestNGCucumberRunner testNGCucumberRunner;
	
    @BeforeClass(alwaysRun = true)
    public void setUpClass() throws Exception 
    {
        testNGCucumberRunner = new TestNGCucumberRunner(this.getClass());
    }
 
    @Test(groups = "cucumber", description = "Runs Cucumber Feature", dataProvider = "features")
    public void feature(CucumberFeatureWrapper cucumberFeature) 
    {
        testNGCucumberRunner.runCucumber(cucumberFeature.getCucumberFeature());
    }
 
    @DataProvider
    public Object[][] features() 
    {
        return testNGCucumberRunner.provideFeatures();
    }
 
    @AfterClass(alwaysRun = true)
    public void tearDownClass() throws Exception 
    {
        testNGCucumberRunner.finish();
    }
}

//{".//src//main//java//features//UserLogin.feature",
//".//src//main//java//features//UserLogout.feature",
//".//src//main//java//features//UserNewCertificate.feature",
//".//src//main//java//features//UserMakepayment.feature"},