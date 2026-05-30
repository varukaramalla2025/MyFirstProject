package Basetest;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;

public class baseTest {
	
	 public  WebDriver driver;
	 
	 
		 @BeforeMethod
		public void setuppage()
		{
         driver=(WebDriver) new ChromeDriver();
         driver.manage().window().maximize();
         
         driver.get("https://admin-demo.nopcommerce.com/login?returnUrl=%2Fadmin%2F");
         
		}
		 @AfterMethod
         public void teardown()
         {
        	 if(driver!=null)
        		 driver.close();
         }
	 
	

}


