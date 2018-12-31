package stepdefination;

import org.openqa.selenium.support.PageFactory;

import Screen.Transection_monitor;
import configuration.Baseclass;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class UserTransectionreport extends Baseclass
{
	Transection_monitor  TM=PageFactory.initElements(Driver, Transection_monitor.class);
	
	@Given("^Click on Transection Monitor button$")
	public void click_on_Transection_Monitor_button()
	{
		TM.T_monitor();
	}

	@When("^Enter the Reference Number$")
	public void enter_the_Reference_Number() throws Exception
	{
		String Data3=Cellread(0,1,2);
		TM.Refarence_no(Data3);
		
	}

	@Then("^Click on search Button$")
	public void click_on_search_Button()
	{
		TM.Search();
		TM.ScroolDown();
	}
	

}
