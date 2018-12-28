$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("./src/main/java/features/UserLogin.feature");
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
  "duration": 7349775830,
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
  "duration": 223688493,
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
  "duration": 23353041902,
  "status": "passed"
});
formatter.match({
  "location": "UserLogin.home_page_apper_in_screen()"
});
formatter.result({
  "duration": 1000330760,
  "status": "passed"
});
formatter.after({
  "duration": 286425000,
  "status": "passed"
});
});