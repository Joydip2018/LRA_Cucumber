package stepdefination;

import org.openqa.selenium.Alert;
import org.openqa.selenium.support.PageFactory;

import Screen.NewCertificate;
import Utility.WriteSheet;
import configuration.Baseclass;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class UserNewCertificateRequest extends Baseclass
{
	NewCertificate NC= PageFactory.initElements(Driver, NewCertificate.class);
	
	@Given("^Click on New Certificate button$")
	public void click_on_New_Certificate_button()
	{
	    NC.New_certificate();
	}

	@When("^Fill the form and click on add$")
	public void fill_the_form_and_click_on_add() throws Exception
	{
		NC.Certificate("N-198839", "5");
		//NC.Certificate("N-314452", "5");
		Thread.sleep(3000);
	}

	@Then("^Certified True Copy should generate requestid$")
	public void certified_True_Copy_should_generate_requestid() throws Exception
	{
		Alert alert=Driver.switchTo().alert();
		String txt=alert.getText();
		String []ID= txt.split(" ");
		RegID=ID[5];
		alert.accept();
		NC.Close_Bank_Details();
		WriteSheet WS=new WriteSheet();
		WS.Writedata(0,RegID,2);
	}

}
