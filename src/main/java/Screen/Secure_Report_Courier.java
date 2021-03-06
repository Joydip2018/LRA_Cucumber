package Screen;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.List;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.ui.Select;
import org.testng.Assert;

import configuration.Basesuit;

public class Secure_Report_Courier extends Basesuit
{
	/*****************************************************************/
	/*
	* This bellow constructor helps to call the Driver from Base Class.
	* @author Joydip.Bhattacharjee
	*/
	/*****************************************************************/
	WebDriver Driver;
	public Secure_Report_Courier(WebDriver driver)
	{
		this.Driver=driver;
	}
	/*****************************************************************/
	/*
	* End
	*/
	/*****************************************************************/
	
	/*****************************************************************/
	/*
	* These are the list of the WebElement for Transaction monitor report Screen.
	* @author Joydip.Bhattacharjee
	*/
	/*****************************************************************/
	
	@FindBy(xpath="//img[@alt='Report' and @src='static/images/um/reports.png']")
	@CacheLookup
	WebElement Report;
	
	@FindBy(xpath="//img[@alt='new registration' and @src='static/images/um/courier.png']")
	@CacheLookup
	WebElement SCourier;
	
	@FindBy(id="ProviderId")
	@CacheLookup
	WebElement SelectServiceProvider;
	
	@FindBy(id="fromDate")
	@CacheLookup
	WebElement FromDate;
	
	@FindBy(id="toDate")
	@CacheLookup
	WebElement ToDate;
	
	By Calendar_date=By.xpath("//table[@class='ui-datepicker-calendar']//tbody//td");
	
	@FindBy(xpath="//input[@value='Submit']")
	@CacheLookup
	WebElement Submit;
	
	@FindBy(xpath="//input[@value='Download Report']")
	@CacheLookup
	WebElement Downloadreport;
	/*************************************************************/
	/*
	*  End
	*/
	/*************************************************************/
	
	/*****************************************************************/
	/*
	* These bellow functions take the reference of above WebElements.
	* @author Joydip.Bhattacharjee
	*/
	/*****************************************************************/
	public void Reportchk()
	{
		HighlightOnElement(Report);
		waitForPageLoad(Driver, Report);
		Report.click();
	}
	public void S_Courier()
	{
		HighlightOnElement(SCourier);
		waitForPageLoad(Driver, SCourier);
		SCourier.click();
	}
	public void Select_ServiceProvider()
	{
		HighlightOnElement(SelectServiceProvider);
		waitForPageLoad(Driver, SelectServiceProvider);
		Select SP=new Select(SelectServiceProvider);
		SP.selectByVisibleText("DHL Express");
	}
	public void From_Date() throws Exception
	{
		HighlightOnElement(FromDate);
		FromDate.click();
		Thread.sleep(1000);
		List<WebElement> Daylist= Driver.findElements(Calendar_date);
		int Count= Daylist.size();
		for (int j=0; j<Count; j++)
		{
			String Date= Daylist.get(j).getText();
			if(Date.equalsIgnoreCase("1"))
			{
				Daylist.get(j).click();
				break;				
			}
		}		
	}
	public void To_Date() throws Exception
	{
		HighlightOnElement(ToDate);
		Calendar cal = Calendar.getInstance();
		SimpleDateFormat dateOnly = new SimpleDateFormat("dd");
		String a=dateOnly.format(cal.getTime());
		a=a.replaceFirst("0","");
		
		ToDate.click();
		Thread.sleep(1000);
		List<WebElement> Daylist= Driver.findElements(Calendar_date);
		int Count= Daylist.size();
		for (int j=0; j<Count; j++)
		{
			String Date= Daylist.get(j).getText();
			if(Date.equalsIgnoreCase(a))
			{
				Daylist.get(j).click();
				break;				
			}
		}		
	}
	public void Search()
	{
		HighlightOnElement(Submit);
		Submit.click();
	}
	
	public void Download_report()
	{
		waitForPageLoad(Driver,Downloadreport);
		HighlightOnElement(Downloadreport);
		String str=Downloadreport.getAttribute("value");
		Assert.assertEquals(str, "Download Report");
		Downloadreport.click();
	}
	/*****************************************************************/
	/*
	*  End
	*/
	/*****************************************************************/
	
	/*****************************************************************/
	/*
	* This base function used for search Transaction.
	* @author Joydip.Bhattacharjee
	*/
	/*****************************************************************/
	public void Search_Report() throws Exception
	{
		Reportchk();
		waitForPageLoad(Driver,SCourier);
		S_Courier();
		waitForPageLoad(Driver,SelectServiceProvider);
		Select_ServiceProvider();
		From_Date();
		To_Date();
		Search();
		Download_report();
		Thread.sleep(2000);
		ScroolDown();
	}
	/*****************************************************************/
	/*
	*  End
	*/
	/*****************************************************************/
}
