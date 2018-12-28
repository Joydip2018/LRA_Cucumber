@P2
Feature: User Logout

Background: Login into LRA
Given I have open the browser and enter the LRA URL
When I give the valid "Test0001" and "Pass@1234"
Then Home page apper in screen

Scenario: Logout from LRA
Given All ready logedin into the user portal.
Then click on Logout.