package stepdefination;

import configuration.Baseclass;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hook extends Baseclass
{
	public static String rawFeatureName;
	@Before
	public void setUP() throws Exception
	{
		OpenBrowser();
		
	}
	@Before
	public void Screenshot(Scenario scenario)
	{
			
	}

	@After
	public void tearDown(Scenario scenario) throws Exception
	{		
		if (scenario.isFailed())
		{
			rawFeatureName = scenario.getId().split(";")[0].replace("-"," ");
		   	System.out.println(rawFeatureName);	
		}
		else
		{
			rawFeatureName = scenario.getId().split(";")[0].replace("-"," ");
		   	System.out.println(rawFeatureName);	
		}
	}
}
