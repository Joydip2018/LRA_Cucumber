package stepdefination;

import configuration.Baseclass;
import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hook extends Baseclass
{
	@Before
	public void setUP() throws Exception
	{
		OpenBrowser();
	}

	@After
	public void tearDown() throws Exception
	{
		closebrowser();
	}
}
