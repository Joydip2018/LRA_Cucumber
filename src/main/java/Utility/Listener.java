package Utility;

import org.testng.ITestContext;
import org.testng.ITestListener;
import org.testng.ITestResult;
//import com.aventstack.extentreports.ExtentTest;
import configuration.Basesuit;
import stepdefination.Hook;

public class Listener extends Hook implements ITestListener

{
	// ExtentTest logger;
	public void onFinish(ITestContext arg0) {
		// TODO Auto-generated method stub
		
	}

	public void onStart(ITestContext arg0) {
		// TODO Auto-generated method stub
		
	}

	public void onTestFailedButWithinSuccessPercentage(ITestResult arg0) {
		// TODO Auto-generated method stub
		
	}

	public void onTestFailure(ITestResult result) 
	{    
		try 
		{
			Snapshot shot= new Snapshot();
			String img="Fail "+rawFeatureName;
			System.out.println(img);
			shot.takescreen(img, Basesuit.Driver);
		} 
		catch (Exception e) 
		{
			e.printStackTrace();
		}
	}

	public void onTestSkipped(ITestResult arg0) {
		// TODO Auto-generated method stub
		
	}

	public void onTestStart(ITestResult arg0) {
		// TODO Auto-generated method stub
		
	}

	public void onTestSuccess(ITestResult result) 
	{    		
		try 
		{
			Snapshot shot= new Snapshot();
			String img="Pass "+rawFeatureName;
			System.out.println(img);
			shot.takescreen(img, Basesuit.Driver);
		} 
		catch (Exception e) 
		{
			e.printStackTrace();
		}
	}

}
