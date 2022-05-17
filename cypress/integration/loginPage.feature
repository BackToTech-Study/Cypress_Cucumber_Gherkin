Feature: Login Feature

    The user want to validate Login Scenarios

    Background:
        Given The user navigate to the website
        When The user click on Intra in cont Button
        And Validate the page title

    Scenario: Login with valid account details
        And The user enter valid account details
        And The user click on Intra in cont Button to login
        Then Validate the page url

    Scenario: Login with wrong account details
        And The user enter wrong account details
        And The user click on Intra in cont Button to login
        Then The error message is visible