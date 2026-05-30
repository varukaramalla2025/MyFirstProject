package Pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class Loginpage {
    
    public WebDriver driver;
    
    By usernametextbox = By.id("Email");
    By userpwdtextbox = By.id("Password");
    By loginbutton = By.xpath("//*[@id='main']/div/section/div/div[2]/div[1]/div/form/div[3]/button");
    
    public Loginpage(WebDriver driver) {
        this.driver = driver;
    }
    
    public void enterusername(String usname) {
    	
    	driver.findElement(usernametextbox).clear();
        driver.findElement(usernametextbox).sendKeys(usname);
    }
    
    public void enterpassword(String pwd) {
      	driver.findElement(usernametextbox).clear();
        driver.findElement(userpwdtextbox).sendKeys(pwd);
    }
    
    public void clickonbutton() {
        driver.findElement(loginbutton).click();
    }
}
