package stepdefination;

import org.openqa.selenium.support.PageFactory;
import Screen.Login;
import configuration.Baseclass;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class UserLogin extends Baseclass
{
	Login ln=PageFactory.initElements(Driver, Login.class);

	@Given("^I have open the browser and enter the LRA URL$")
	public void i_have_open_the_browser_and_enter_the_LRA_URL() throws Exception
	{		
		ln.login_link();
	}

	@When("^I give the valid \"([^\"]*)\" and \"([^\"]*)\"$")
	public void i_give_the_valide_and(String arg1, String arg2) throws Throwable 
	{
		ln.logintest(arg1, arg2);
	}
	
	@Then("^Home page apper in screen$")
	public void home_page_apper_in_screen() throws Exception
	{
		Thread.sleep(1000);
	}
}
