Feature: Add address in PrestaShop

  Scenario Outline: when user is logged can add new address
    Given open browser with prod-kurs.coderslab.pl and logged as a user
    When user goes to address site
    And click on 'Create new address' button
    And an alias <alias> is entered in alias input field
    And an <address> is entered in address input field
    And a <city> is entered in city input field
    And a <postalcode> is entered in zip/postalcode input field
    And a <country> is chosen from dropdown list
    And a <phone> is entered in phone input field
    Then an addres is deleted
    And close browser

    Examples:
      |alias|address   |city  |postalcode|phone|
      |home  |Street77|SanFrancisco|13-469    |246789 |




