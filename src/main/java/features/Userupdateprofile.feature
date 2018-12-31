@P5
Feature: User Update Profile

Background: Login into LRA
Given I have open the browser and enter the LRA URL
When I give the valid "Test0001" and "Pass@1234"
Then Home page apper in screen

Scenario: Update User Profile
Given Click on Update Profile button
When Enter new Mobile no, Email-ID, Shipping Address
Then Click on update Button 