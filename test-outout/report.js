$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("./src/main/java/features/UserTransectionreport.feature");
formatter.feature({
  "line": 2,
  "name": "User Transection Report",
  "description": "",
  "id": "user-transection-report",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@P6"
    }
  ]
});
formatter.before({
  "duration": 83446,
  "status": "passed"
});
formatter.before({
  "duration": 8418304045,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "Login into LRA",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I have open the browser and enter the LRA URL",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I give the valid \"Test0001\" and \"Pass@1234\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Home page apper in screen",
  "keyword": "Then "
});
formatter.match({
  "location": "UserLogin.i_have_open_the_browser_and_enter_the_LRA_URL()"
});
formatter.result({
  "duration": 294752538,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test0001",
      "offset": 18
    },
    {
      "val": "Pass@1234",
      "offset": 33
    }
  ],
  "location": "UserLogin.i_give_the_valide_and(String,String)"
});
formatter.result({
  "duration": 24154696988,
  "error_message": "org.openqa.selenium.NoAlertPresentException: no such alert\n  (Session info: chrome\u003d71.0.3578.98)\n  (Driver info: chromedriver\u003d72.0.3626.7 (efcef9a3ecda02b2132af215116a03852d08b9cb),platform\u003dWindows NT 10.0.10240 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027DEV_TEST_JOYDIP\u0027, ip: \u0027192.168.141.177\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_181\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 72.0.3626.7 (efcef9a3ecda02..., userDataDir: C:\\Users\\JOYDIP~1.BHA\\AppDa...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:64608}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 71.0.3578.98, webStorageEnabled: true}\nSession ID: c158ec402a36043117b69a1d92491b70\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:605)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteTargetLocator.alert(RemoteWebDriver.java:928)\r\n\tat configuration.Basesuit.isAlertPresent(Basesuit.java:73)\r\n\tat Screen.Login.logintest(Login.java:131)\r\n\tat stepdefination.UserLogin.i_give_the_valide_and(UserLogin.java:23)\r\n\tat ✽.When I give the valid \"Test0001\" and \"Pass@1234\"(./src/main/java/features/UserTransectionreport.feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "UserLogin.home_page_apper_in_screen()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 9,
  "name": "User Transection Report",
  "description": "",
  "id": "user-transection-report;user-transection-report",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "Click on Transection Monitor button",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "Enter the Reference Number",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Click on search Button",
  "keyword": "Then "
});
formatter.match({
  "location": "UserTransectionreport.click_on_Transection_Monitor_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "UserTransectionreport.enter_the_Reference_Number()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "UserTransectionreport.click_on_search_Button()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 419870,
  "status": "passed"
});
formatter.uri("./src/main/java/features/UserUpdateProfile.feature");
formatter.feature({
  "line": 2,
  "name": "User Update Profile",
  "description": "",
  "id": "user-update-profile",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@P5"
    }
  ]
});
formatter.before({
  "duration": 27186,
  "status": "passed"
});
formatter.before({
  "duration": 5645125323,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "Login into LRA",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I have open the browser and enter the LRA URL",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I give the valid \"Test0001\" and \"Pass@1234\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Home page apper in screen",
  "keyword": "Then "
});
formatter.match({
  "location": "UserLogin.i_have_open_the_browser_and_enter_the_LRA_URL()"
});
formatter.result({
  "duration": 92472858,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test0001",
      "offset": 18
    },
    {
      "val": "Pass@1234",
      "offset": 33
    }
  ],
  "location": "UserLogin.i_give_the_valide_and(String,String)"
});
formatter.result({
  "duration": 20974597141,
  "error_message": "java.lang.AssertionError: expected [Captcha does match.] but found [Captcha does not match.]\r\n\tat org.testng.Assert.fail(Assert.java:96)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:776)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:137)\r\n\tat org.testng.Assert.assertEquals(Assert.java:118)\r\n\tat org.testng.Assert.assertEquals(Assert.java:453)\r\n\tat org.testng.Assert.assertEquals(Assert.java:463)\r\n\tat Screen.Login.logintest(Login.java:136)\r\n\tat stepdefination.UserLogin.i_give_the_valide_and(UserLogin.java:23)\r\n\tat ✽.When I give the valid \"Test0001\" and \"Pass@1234\"(./src/main/java/features/UserUpdateProfile.feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "UserLogin.home_page_apper_in_screen()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 9,
  "name": "Update User Profile",
  "description": "",
  "id": "user-update-profile;update-user-profile",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "Click on Update Profile button",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "Enter new Mobile no, Email-ID, Shipping Address",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Click on update Button",
  "keyword": "Then "
});
formatter.match({
  "location": "UserUpdateProfile.click_on_Update_Profile_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "UserUpdateProfile.enter_new_Mobile_no_Email_ID_Shipping_Address()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "UserUpdateProfile.click_on_update_Button()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 101947,
  "status": "passed"
});
});