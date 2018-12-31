@P6
Feature: User Transection Report

Background: Login into LRA
Given I have open the browser and enter the LRA URL
When I give the valid "Test0001" and "Pass@1234"
Then Home page apper in screen

Scenario: User Transection Report
Given Click on Transection Monitor button
When Enter the Reference Number
Then Click on search Button