package uk.harrow.gov.pages;

import com.cucumber.listener.Reporter;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import uk.harrow.gov.utility.Utility;


/**
 * Created by Ankita
 */
public class HomePage extends Utility {
    private static final Logger log = LogManager.getLogger(HomePage.class.getName());



    @FindBy(xpath = "//span[contains(text(),'Coronavirus (COVID-19)')]")
    WebElement covid19Link;

    @FindBy(xpath = "//span[@class='icon-fallback']")
    WebElement _loginAndRegisterLink;

    @FindBy (xpath ="//span[contains(text(),'Council Tax')]" )
    WebElement _councilTaxLink;

    public void clickOnLoginAndRegisterLink (){
        Reporter.addStepLog("clicking on login and register link : " + _councilTaxLink.toString());
        clickOnElement(_loginAndRegisterLink);
        log.info("clicking on login and register link : " + _councilTaxLink.toString());
    }
    public void clickOnCouncilTaxLink(){
        Reporter.addStepLog("clicking on counciltax link : " + _councilTaxLink.toString());
        clickOnElement(_councilTaxLink);
        log.info("clicking on counciltax link : " + _councilTaxLink.toString());
    }

    public void clickOnCovid19Link(){
        Reporter.addStepLog("Clicking On Covid19 Link" + covid19Link.toString());
        clickOnElement(covid19Link);
        log.info("Clicking On Covid19 Link" + covid19Link.toString());
    }


}
