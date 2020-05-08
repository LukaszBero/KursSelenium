Feature: Create new address after login
  Scenario: Create new address after login
    Given User is logged in to CodersLab shop
    When User goes to UserInformationAddressesPage
    And User added new address
    And User saves new address
    Then User sees "Address successfully added!"
    And User close window