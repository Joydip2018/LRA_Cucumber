$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("UserLogin.feature");
formatter.feature({
  "line": 2,
  "name": "User Login",
  "description": "",
  "id": "user-login",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@P1"
    }
  ]
});
formatter.before({
  "duration": 6887367743,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Login into LRA",
  "description": "",
  "id": "user-login;login-into-lra",
  "type": "scenario",
  "keyword": "Scenario"
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
  "duration": 178034860,
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
  "duration": 20887949595,
  "error_message": "org.openqa.selenium.UnhandledAlertException: unexpected alert open: {Alert text : Captcha does not match.}\n  (Session info: chrome\u003d71.0.3578.98)\n  (Driver info: chromedriver\u003d72.0.3626.7 (efcef9a3ecda02b2132af215116a03852d08b9cb),platform\u003dWindows NT 10.0.10240 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds: null\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027DEV_TEST_JOYDIP\u0027, ip: \u0027192.168.141.177\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_181\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 72.0.3626.7 (efcef9a3ecda02..., userDataDir: C:\\Users\\JOYDIP~1.BHA\\AppDa...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:65219}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 71.0.3578.98, webStorageEnabled: true}\nSession ID: 3386d2532914c413621fb70174d6168c\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:172)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:276)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.isDisplayed(RemoteWebElement.java:317)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy18.isDisplayed(Unknown Source)\r\n\tat Screen.Login.logintest(Login.java:131)\r\n\tat stepdefination.UserLogin.i_give_the_valide_and(UserLogin.java:24)\r\n\tat ✽.When I give the valid \"Test0001\" and \"Pass@1234\"(UserLogin.feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "UserLogin.home_page_apper_in_screen()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 184816961,
  "status": "passed"
});
formatter.uri("UserLogout.feature");
formatter.feature({
  "line": 2,
  "name": "User Logout",
  "description": "",
  "id": "user-logout",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@P2"
    }
  ]
});
formatter.before({
  "duration": 5326008272,
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
  "duration": 89880013,
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
  "duration": 23776373808,
  "status": "passed"
});
formatter.match({
  "location": "UserLogin.home_page_apper_in_screen()"
});
formatter.result({
  "duration": 999305252,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Logout from LRA",
  "description": "",
  "id": "user-logout;logout-from-lra",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "All ready logedin into the user portal.",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "click on Logout.",
  "keyword": "Then "
});
formatter.match({
  "location": "UserLogout.all_ready_logedin_into_the_user_portal()"
});
formatter.result({
  "duration": 1000239386,
  "status": "passed"
});
formatter.match({
  "location": "UserLogout.click_on_Logout()"
});
formatter.result({
  "duration": 302398920,
  "status": "passed"
});
formatter.after({
  "duration": 266215005,
  "status": "passed"
});
formatter.uri("UserMakepayment.feature");
formatter.feature({
  "line": 2,
  "name": "User Make Payment for Certificate",
  "description": "",
  "id": "user-make-payment-for-certificate",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@P4"
    }
  ]
});
formatter.before({
  "duration": 5102440605,
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
  "duration": 143386942,
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
  "duration": 23171997348,
  "status": "passed"
});
formatter.match({
  "location": "UserLogin.home_page_apper_in_screen()"
});
formatter.result({
  "duration": 999535954,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "User Procced for payment",
  "description": "",
  "id": "user-make-payment-for-certificate;user-procced-for-payment",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "Click on My reques button",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "Search your requestid",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Click on make payment",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "Select Bank and click on process",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "Fill your cardn details and click on confirm payment",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "Payment successfull page should apper",
  "keyword": "Then "
});
formatter.match({
  "location": "Usermakepayment.click_on_My_reques_button()"
});
formatter.result({
  "duration": 123675353,
  "status": "passed"
});
formatter.match({
  "location": "Usermakepayment.search_your_requestid()"
});
formatter.result({
  "duration": 3622176359,
  "status": "passed"
});
formatter.match({
  "location": "Usermakepayment.click_on_make_payment()"
});
formatter.result({
  "duration": 151735624,
  "status": "passed"
});
formatter.match({
  "location": "Usermakepayment.select_Bank_and_click_on_process()"
});
formatter.result({
  "duration": 2094172347,
  "status": "passed"
});
formatter.match({
  "location": "Usermakepayment.fill_your_cardn_details_and_click_on_confirm_payment()"
});
formatter.result({
  "duration": 16894825713,
  "error_message": "java.lang.AssertionError: Timeout waiting for Page Load Request to complete.\r\n\tat org.testng.Assert.fail(Assert.java:96)\r\n\tat configuration.Basesuit.waitForPageLoad(Basesuit.java:64)\r\n\tat Screen.MyRequest_Makepayment.Card_Number(MyRequest_Makepayment.java:131)\r\n\tat stepdefination.Usermakepayment.fill_your_cardn_details_and_click_on_confirm_payment(Usermakepayment.java:44)\r\n\tat ✽.When Fill your cardn details and click on confirm payment(UserMakepayment.feature:14)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Usermakepayment.payment_successfull_page_should_apper()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 245122227,
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d71.0.3578.98)\n  (Driver info: chromedriver\u003d72.0.3626.7 (efcef9a3ecda02b2132af215116a03852d08b9cb),platform\u003dWindows NT 10.0.10240 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027DEV_TEST_JOYDIP\u0027, ip: \u0027192.168.141.177\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_181\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 72.0.3626.7 (efcef9a3ecda02..., userDataDir: C:\\Users\\JOYDIP~1.BHA\\AppDa...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:65280}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 71.0.3578.98, webStorageEnabled: true}\nSession ID: b696d49f2b98da34e0f9b124ac0cb637\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:605)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.close(RemoteWebDriver.java:438)\r\n\tat configuration.Baseclass.closebrowser(Baseclass.java:45)\r\n\tat stepdefination.Hook.tearDown(Hook.java:18)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:59)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat runner.TestRunner.feature(TestRunner.java:39)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:124)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:583)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:719)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:989)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:648)\r\n\tat org.testng.TestRunner.run(TestRunner.java:505)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:450)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:415)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:364)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:84)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1208)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1137)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1049)\r\n\tat org.testng.TestNG.run(TestNG.java:1017)\r\n\tat org.apache.maven.surefire.testng.TestNGExecutor.run(TestNGExecutor.java:283)\r\n\tat org.apache.maven.surefire.testng.TestNGXmlTestSuite.execute(TestNGXmlTestSuite.java:75)\r\n\tat org.apache.maven.surefire.testng.TestNGProvider.invoke(TestNGProvider.java:120)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:383)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:344)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.execute(ForkedBooter.java:125)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:417)\r\n",
  "status": "failed"
});
formatter.uri("UserNewCertificate.feature");
formatter.feature({
  "line": 2,
  "name": "User Apply for New Certificate",
  "description": "",
  "id": "user-apply-for-new-certificate",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@P3"
    }
  ]
});
formatter.before({
  "duration": 5094719462,
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
  "duration": 76546136,
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
  "duration": 23584860457,
  "status": "passed"
});
formatter.match({
  "location": "UserLogin.home_page_apper_in_screen()"
});
formatter.result({
  "duration": 999918443,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Apply for New Certificate",
  "description": "",
  "id": "user-apply-for-new-certificate;apply-for-new-certificate",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "Click on New Certificate button",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "Fill the form and click on add",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Certified True Copy should generate requestid",
  "keyword": "Then "
});
formatter.match({
  "location": "UserNewCertificateRequest.click_on_New_Certificate_button()"
});
formatter.result({
  "duration": 126794546,
  "status": "passed"
});
formatter.match({
  "location": "UserNewCertificateRequest.fill_the_form_and_click_on_add()"
});
formatter.result({
  "duration": 6752807500,
  "status": "passed"
});
formatter.match({
  "location": "UserNewCertificateRequest.certified_True_Copy_should_generate_requestid()"
});
formatter.result({
  "duration": 650804888,
  "status": "passed"
});
formatter.after({
  "duration": 181303951,
  "status": "passed"
});
});