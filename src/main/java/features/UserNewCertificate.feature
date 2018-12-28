@P3
Feature: User Apply for New Certificate

Background: Login into LRA
Given I have open the browser and enter the LRA URL
When I give the valid "Test0001" and "Pass@1234"
Then Home page apper in screen

Scenario: Apply for New Certificate
Given Click on New Certificate button
When Fill the form and click on add
Then Certified True Copy should generate requestid