package Utility;

import java.io.File;
import java.util.ArrayList;
import java.util.List;
import net.masterthought.cucumber.Configuration;
import net.masterthought.cucumber.ReportBuilder;
import net.masterthought.cucumber.Reportable;

public class Reporter
{
	
	public static void after() throws Throwable
	{
	    File reportOutputDirectory = new File("target/Advance HTML Report");

	    List<String> jsonFiles = new ArrayList<>();
	    jsonFiles.add("target/cucumber-reports/CucumberTestReport.json");
	    
	    String buildNumber = "1";
	    String projectName = "Land Registration Authority";
	    boolean runWithJenkins = false;

	    Configuration configuration = new Configuration(reportOutputDirectory, projectName);
	    configuration.setRunWithJenkins(runWithJenkins);
	    configuration.setBuildNumber(buildNumber);
	    configuration.addClassifications("Platform", "Windows 10");
	    configuration.addClassifications("Browser", "Chrome");
	    configuration.addClassifications("Branch", "Masters/1.0");
	    
	    ReportBuilder reportBuilder = new ReportBuilder(jsonFiles, configuration);
	    //Reportable result = reportBuilder.generateReports();
	    reportBuilder.generateReports();

	}
	

}
