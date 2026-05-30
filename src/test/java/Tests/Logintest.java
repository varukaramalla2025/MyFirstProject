package Tests;

import org.openqa.selenium.WebDriver;
import org.testng.Assert;
import org.testng.annotations.Test;

import Basetest.baseTest;
import Pages.Loginpage;

public class Logintest extends baseTest {
	
	
	@Test 
	public void testloginpage() 
	{
		Loginpage lg=new Loginpage(driver);
		
		lg.enterusername("admin@yourstore.com");
		lg.enterpassword("admin");
		lg.clickonbutton();
		Assert.assertEquals(driver.getTitle(), "nopCommerce demo store. Login");
		
	}
	
	

}
