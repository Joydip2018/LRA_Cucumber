@P4
Feature: User Make Payment for Certificate

Background: Login into LRA
Given I have open the browser and enter the LRA URL
When I give the valid "Test0001" and "Pass@1234"
Then Home page apper in screen

Scenario: User Procced for payment
Given Click on My reques button
When Search your requestid
When Click on make payment 
When Select Bank and click on process
When Fill your cardn details and click on confirm payment
Then Payment successfull page should apper

 
