@P1
Feature: User Login

Scenario: Login into LRA
Given I have open the browser and enter the LRA URL
When I give the valid "Test0001" and "Pass@1234"
Then Home page apper in screen
