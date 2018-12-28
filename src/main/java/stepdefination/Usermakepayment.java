package stepdefination;

import org.openqa.selenium.support.PageFactory;

import Screen.MyRequest_Makepayment;
import configuration.Baseclass;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Usermakepayment extends Baseclass
{
	MyRequest_Makepayment MM=PageFactory.initElements(Driver, MyRequest_Makepayment.class);
	
	@Given("^Click on My reques button$")
	public void click_on_My_reques_button()
	{
		MM.MyRequest();
	}

	@When("^Search your requestid$")
	public void search_your_requestid() throws Exception
	{
		String Data3=Cellread(0,1,2);
		MM.Search_Item(Data3);
	}

	@When("^Click on make payment$")
	public void click_on_make_payment()
	{
		MM.makepayment_link();
	}

	@When("^Select Bank and click on process$")
	public void select_Bank_and_click_on_process()
	{
		MM.Bank_name();
		MM.Process_btn();
	}

	@When("^Fill your cardn details and click on confirm payment$")
	public void fill_your_cardn_details_and_click_on_confirm_payment()
	{
		MM.Card_Number("4111111111111111");
		MM.CVV2_Number("250");
		MM.EMonth();
		MM.EYear();
		MM.Submit_btn();
	}

	@Then("^Payment successfull page should apper$")
	public void payment_successfull_page_should_apper() throws Exception
	{
		String CurUrl=Driver.getCurrentUrl();
		System.out.println(CurUrl);
		ScroolDown();
		MM.no_success();
		/*configreaderclass BC=new configreaderclass();
		String[] str=BC.configreader();
		String NewUrl=CurUrl.replace("http://125.19.63.165:9094",str[8]);
		System.out.println(NewUrl);
		Driver.get(NewUrl);*/
		Thread.sleep(3000);
		MM.Click_here();
	}

}
