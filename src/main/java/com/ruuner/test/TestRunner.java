package com.ruuner.test;

import java.io.File;

import org.junit.runner.RunWith;
import org.testng.annotations.AfterClass;

import com.vimalselvam.cucumber.listener.Reporter;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "C:\\Github\\E-CommerceTest\\src\\test\\java\\E-Commerce.feature",
		//features = "C:\\Users\\nehaashokj\\E-CommerceTest\\src\\test\\java\\E-Commerce.feature",
		//plugin = {"com.cucumber.listener.ExtentCucumberFormatter:target/cucumber-reports/report.json"},//extent report
		glue ={"com.StepDEfinition.test"},
		format = {"pretty","html:html_ouput/cucumber.html","json:json_output/cucumber.json",
				"html:target/cucumber-reports/cucumber-pretty",
				"json:target/cucumber-reports/CucumberTestReport.json",
				"rerun:target/cucumber-reports/rerun.txt"
				},
			plugin={"com.vimalselvam.cucumber.listener.ExtentCucumberFormatter:target/html/ExtentReport.html"},
		
		monochrome = true,
		strict = true,
		dryRun = false
		
		)
public class TestRunner {
	@AfterClass
	public static void setup()
	{
	Reporter.loadXMLConfig(new File("C:\\Users\\nehaashokj\\E-CommerceTest\\src\\main\\java\\com\\ruuner\\test\\extent-config.xml"));
	//Reporter.setSystemInfo("Test User", System.getProperty("user.name"));
	Reporter.setSystemInfo("User Name", "NJ");
	Reporter.setSystemInfo("Application Name", "Test App ");
	Reporter.setSystemInfo("Operating System Type", System.getProperty("os.name").toString());
	Reporter.setSystemInfo("Environment", "Production");
	Reporter.setTestRunnerOutput("Test Execution Cucumber Report");
	}

//	private TestNGCucumberRunner testNGCucumberRunner;
//	 
//    @BeforeClass(alwaysRun = true)
//    public void setUpClass() throws Exception {
//        testNGCucumberRunner = new TestNGCucumberRunner(this.getClass());
//    }
// 
//    @Test(groups = "cucumber", description = "Runs Cucumber Feature", dataProvider = "features")
//    public void feature(CucumberFeatureWrapper cucumberFeature) {
//        testNGCucumberRunner.runCucumber(cucumberFeature.getCucumberFeature());
//    }
// 
//    @DataProvider
//    public Object[][] features() {
//        return testNGCucumberRunner.provideFeatures();
//    }
// 
//    @AfterClass(alwaysRun = true)
//    public void tearDownClass() throws Exception {
//        testNGCucumberRunner.finish();
//    }
}
