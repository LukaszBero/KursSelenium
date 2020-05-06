$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("ChangeUserInformation.feature");
formatter.feature({
  "line": 1,
  "name": "Change user information after login",
  "description": "",
  "id": "change-user-information-after-login",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Change user birthday date, gender and sign up for a newsletter",
  "description": "",
  "id": "change-user-information-after-login;change-user-birthday-date,-gender-and-sign-up-for-a-newsletter",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "User is logged in to CodersLab shop",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User goes to UserInformationPage",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User signs up for our newsletter",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User saves information",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User sees \"Information successfully updated.\"",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User close window",
  "keyword": "And "
});
formatter.match({
  "location": "ChangeUserInfoSteps.userIsLooggedInToCodersLabShop()"
});
formatter.result({
  "duration": 12534374214,
  "status": "passed"
});
formatter.match({
  "location": "ChangeUserInfoSteps.UserGoesToUserInformationPage()"
});
formatter.result({
  "duration": 998455972,
  "status": "passed"
});
formatter.match({
  "location": "ChangeUserInfoSteps.userSignsUpForOurNewsletter()"
});
formatter.result({
  "duration": 52887341,
  "status": "passed"
});
formatter.match({
  "location": "ChangeUserInfoSteps.userSavesInformation()"
});
formatter.result({
  "duration": 973030028,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Information successfully updated.",
      "offset": 11
    }
  ],
  "location": "ChangeUserInfoSteps.userSees(String)"
});
formatter.result({
  "duration": 70853529,
  "status": "passed"
});
formatter.match({
  "location": "ChangeUserInfoSteps.userCloseWindow()"
});
formatter.result({
  "duration": 89719500,
  "status": "passed"
});
formatter.uri("CreateNewAddress.feature");
formatter.feature({
  "line": 1,
  "name": "Create new address after login",
  "description": "",
  "id": "create-new-address-after-login",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 2,
  "name": "Create new address after login",
  "description": "",
  "id": "create-new-address-after-login;create-new-address-after-login",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 3,
  "name": "User is logged in to CodersLab shop",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "User goes to UserInformationAddressesPage",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "User added new address",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "User saves new address",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User sees \"Address successfully added!\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User close window",
  "keyword": "And "
});
formatter.match({
  "location": "ChangeUserInfoSteps.userIsLooggedInToCodersLabShop()"
});
formatter.result({
  "duration": 3768456306,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewAddressSteps.userGoesToUserInformationAddressesPage()"
});
formatter.result({
  "duration": 2713812,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewAddressSteps.userAddedNewAddress()"
});
formatter.result({
  "duration": 94672,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewAddressSteps.userSavesNewAddress()"
});
formatter.result({
  "duration": 79395,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Address successfully added!",
      "offset": 11
    }
  ],
  "location": "ChangeUserInfoSteps.userSees(String)"
});
formatter.result({
  "duration": 10087234276,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\".alert.alert-success\"}\n  (Session info: chrome\u003d81.0.4044.113)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Bero-SonyVaio\u0027, ip: \u0027127.0.1.1\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00274.15.0-99-generic\u0027, java.version: \u002711.0.7\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 81.0.4044.113, chrome: {chromedriverVersion: 81.0.4044.69 (6813546031a4b..., userDataDir: /tmp/.com.google.Chrome.N4UAjX}, goog:chromeOptions: {debuggerAddress: localhost:41565}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: LINUX, platformName: LINUX, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 8e79186e31c46c943fe48e2be3a02d1d\n*** Element info: {Using\u003dcss selector, value\u003d.alert.alert-success}\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:420)\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:431)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy19.getText(Unknown Source)\n\tat pageObjectPattern.pages.UserInfoPage.getUpdateInformation(UserInfoPage.java:51)\n\tat pageObjectPattern.steps.ChangeUserInfoSteps.userSees(ChangeUserInfoSteps.java:64)\n\tat ✽.Then User sees \"Address successfully added!\"(CreateNewAddress.feature:7)\n",
  "status": "failed"
});
formatter.match({
  "location": "ChangeUserInfoSteps.userCloseWindow()"
});
formatter.result({
  "status": "skipped"
});
});