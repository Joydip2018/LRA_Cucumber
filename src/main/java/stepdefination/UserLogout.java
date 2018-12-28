package stepdefination;

import org.openqa.selenium.By;
import configuration.Baseclass;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class UserLogout extends Baseclass
{
	
	@Given("^All ready logedin into the user portal\\.$")
	public void all_ready_logedin_into_the_user_portal() throws Exception
	{
		Thread.sleep(1000);
	}

	@Then("^click on Logout\\.$")
	public void click_on_Logout()
	{
		Driver.findElement(By.xpath("//a[contains(text(),'Logout')]")).click();
	}
}
