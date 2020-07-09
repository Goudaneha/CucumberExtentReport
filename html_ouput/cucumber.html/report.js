$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Github/E-CommerceTest/src/test/java/E-Commerce.feature");
formatter.feature({
  "line": 1,
  "name": "Welcome to online shopping",
  "description": "",
  "id": "welcome-to-online-shopping",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Welcome to E-Commerce Website",
  "description": "",
  "id": "welcome-to-online-shopping;welcome-to-e-commerce-website",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User is on Registration page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User clicks on Signin \u003c\"signin\"\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User has to provide \"\u003cemail\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "click on \u003c\"createacc\"\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User enters \"\u003cfirstname\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "name \"\u003clastname\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "clicks on \u003c\"Reg\"\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "welcome-to-online-shopping;welcome-to-e-commerce-website;",
  "rows": [
    {
      "cells": [
        "signin",
        "email",
        "createacc",
        "firstname",
        "lastname",
        "Reg"
      ],
      "line": 14,
      "id": "welcome-to-online-shopping;welcome-to-e-commerce-website;;1"
    },
    {
      "cells": [
        "signin",
        "apples77@gamil.com",
        "createacc",
        "Smith",
        "Tom",
        "Reg"
      ],
      "line": 15,
      "id": "welcome-to-online-shopping;welcome-to-e-commerce-website;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 15,
  "name": "Welcome to E-Commerce Website",
  "description": "",
  "id": "welcome-to-online-shopping;welcome-to-e-commerce-website;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User is on Registration page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User clicks on Signin \u003c\"signin\"\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User has to provide \"apples77@gamil.com\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "click on \u003c\"createacc\"\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User enters \"Smith\"",
  "matchedColumns": [
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "name \"Tom\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "clicks on \u003c\"Reg\"\u003e",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_is_on_Registration_page()"
});
formatter.result({
  "duration": 47825882400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "signin",
      "offset": 24
    }
  ],
  "location": "StepDefinition.user_clicks_on_Signin(String)"
});
formatter.result({
  "duration": 5865605400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "apples77@gamil.com",
      "offset": 21
    }
  ],
  "location": "StepDefinition.user_has_to_provide(String)"
});
formatter.result({
  "duration": 2102055200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "createacc",
      "offset": 11
    }
  ],
  "location": "StepDefinition.click_on(String)"
});
formatter.result({
  "duration": 4313890400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Smith",
      "offset": 13
    }
  ],
  "location": "StepDefinition.user_enters(String)"
});
formatter.result({
  "duration": 2029302000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tom",
      "offset": 6
    }
  ],
  "location": "StepDefinition.name(String)"
});
formatter.result({
  "duration": 46336000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Reg",
      "offset": 12
    }
  ],
  "location": "StepDefinition.clicks_on(String)"
});
formatter.result({
  "duration": 20079949700,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to locate element: //sp[contains(text(),\u0027Registe\u0027)]\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027BRTL059\u0027, ip: \u0027192.168.43.118\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_201\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 76.0, javascriptEnabled: true, moz:accessibilityChecks: false, moz:buildID: 20200429185419, moz:geckodriverVersion: 0.26.0, moz:headless: false, moz:processID: 11428, moz:profile: C:\\Users\\nehaashokj\\AppData..., moz:shutdownTimeout: 60000, moz:useNonSpecCompliantPointerOrigin: false, moz:webdriverClick: true, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, platformVersion: 10.0, rotatable: false, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 3d622cb9-c101-4b07-9c06-25905b609778\n*** Element info: {Using\u003dxpath, value\u003d//sp[contains(text(),\u0027Registe\u0027)]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat com.utility.test.CommonMethods.clickmethod(CommonMethods.java:12)\r\n\tat com.StepDEfinition.test.StepDefinition.clicks_on(StepDefinition.java:55)\r\n\tat ✽.Then clicks on \u003c\"Reg\"\u003e(C:/Github/E-CommerceTest/src/test/java/E-Commerce.feature:11)\r\n",
  "status": "failed"
});
});