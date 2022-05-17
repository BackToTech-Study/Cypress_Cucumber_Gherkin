Feature: Login Feature

    The user want to validate Login Scenarios

    Background:
        Given The user navigate to the website


    Scenario: Login as valid user
        When The user click on Intra in cont Button
        And Validate the page title
        And The user enter account details
        And The user click on Intra in cont Button to login
        Then Validate the page url