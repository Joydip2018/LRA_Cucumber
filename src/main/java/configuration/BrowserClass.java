package configuration;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import io.github.bonigarcia.wdm.WebDriverManager;


public class BrowserClass
{
	/*****************************************************************/
	/*
	* This bellow function helps to open the Browser.
	* It's taking the url from configreaderclass.java and return the driver.
	* @author Joydip.Bhattacharjee
	*/
	/*****************************************************************/
	public static WebDriver BrowserDetails(String browser,WebDriver Driver) throws Exception
	{
		if(browser.equalsIgnoreCase("chrome"))
		{
			//create chrome instance
			//System.setProperty("webdriver.chrome.driver", "./Driver/chromedriver.exe");
			WebDriverManager.chromedriver().setup();
			Driver = new ChromeDriver();
		}
		else if(browser.equalsIgnoreCase("firefox"))
		{
			//create firefox instance
			//System.setProperty("webdriver.gecko.driver", "./Driver/geckodriver.exe");
			WebDriverManager.firefoxdriver().setup();
			Driver = new FirefoxDriver();
		}
		configreaderclass BC=new configreaderclass();
		String[] str=BC.configreader();
		Driver.get(str[0]);
		Driver.manage().window().maximize();
		return Driver;
	}
	/*****************************************************************/
	/*
	* End
	*/
	/*****************************************************************/
}
