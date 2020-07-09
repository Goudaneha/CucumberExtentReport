package com.business.test;

import org.openqa.selenium.WebDriver;

import com.utility.test.BrowserConfig;

public class Business extends BrowserConfig {

	//provide browser name 
		private static WebDriver driver;
			
			public static void setupbrowser() {
				 driver= browsername("gecko"); 
			}
			
			//return webdriver driver
			public static WebDriver getobject() {
				return driver;	
			}
}
