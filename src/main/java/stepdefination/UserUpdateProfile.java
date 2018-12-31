package stepdefination;

import org.openqa.selenium.support.PageFactory;
import Screen.UpdateUser;
import configuration.Baseclass;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class UserUpdateProfile extends Baseclass
{
	UpdateUser UU=PageFactory.initElements(Driver, UpdateUser.class);
	
	@Given("^Click on Update Profile button$")
	public void click_on_Update_Profile_button() 
	{
		UU.Update_profileLink();	    
	}

	@When("^Enter new Mobile no, Email-ID, Shipping Address$")
	public void enter_new_Mobile_no_Email_ID_Shipping_Address()
	{
		UU.Mobile_Number("9863158406");
		UU.Email_ID("joydip.ilfs@gmail.com");
		UU.shipping_Add("Agartala");
	}

	@Then("^Click on update Button$")
	public void click_on_update_Button()
	{
	   UU.Update_btn();
	   UU.Confirm_btn();
	   UU.acceptAlert();
	}

}
