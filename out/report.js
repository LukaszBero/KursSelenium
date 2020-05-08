$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("addAddressPrestaShop.feature");
formatter.feature({
  "line": 1,
  "name": "Add address in PrestaShop",
  "description": "",
  "id": "add-address-in-prestashop",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "when user is logged can add new address",
  "description": "",
  "id": "add-address-in-prestashop;when-user-is-logged-can-add-new-address",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "open browser with prod-kurs.coderslab.pl and logged as a user",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user goes to address site",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "click on \u0027Create new address\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "an alias \u003calias\u003e is entered in alias input field",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "an \u003caddress\u003e is entered in address input field",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "a \u003ccity\u003e is entered in city input field",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "a \u003cpostalcode\u003e is entered in zip/postalcode input field",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "a \u003ccountry\u003e is chosen from dropdown list",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "a \u003cphone\u003e is entered in phone input field",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "an addres is deleted",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "close browser",
  "keyword": "And "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "add-address-in-prestashop;when-user-is-logged-can-add-new-address;",
  "rows": [
    {
      "cells": [
        "alias",
        "address",
        "city",
        "postalcode",
        "phone"
      ],
      "line": 17,
      "id": "add-address-in-prestashop;when-user-is-logged-can-add-new-address;;1"
    },
    {
      "cells": [
        "home",
        "Street77",
        "SanFrancisco",
        "13-469",
        "246789"
      ],
      "line": 18,
      "id": "add-address-in-prestashop;when-user-is-logged-can-add-new-address;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 18,
  "name": "when user is logged can add new address",
  "description": "",
  "id": "add-address-in-prestashop;when-user-is-logged-can-add-new-address;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "open browser with prod-kurs.coderslab.pl and logged as a user",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user goes to address site",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "click on \u0027Create new address\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "an alias home is entered in alias input field",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "an Street77 is entered in address input field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "a SanFrancisco is entered in city input field",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "a 13-469 is entered in zip/postalcode input field",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "a \u003ccountry\u003e is chosen from dropdown list",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "a 246789 is entered in phone input field",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "an addres is deleted",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "addAddressPrestaShopSteps.openProdKursCodersLabAndLogIn()"
});
formatter.result({
  "duration": 7638139423,
  "status": "passed"
});
formatter.match({
  "location": "addAddressPrestaShopSteps.goToYourAddress()"
});
formatter.result({
  "duration": 443238071,
  "status": "passed"
});
formatter.match({
  "location": "addAddressPrestaShopSteps.clickOnCreateNewAddressButton()"
});
formatter.result({
  "duration": 460874761,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "home ",
      "offset": 9
    }
  ],
  "location": "addAddressPrestaShopSteps.aliasInput(String)"
});
formatter.result({
  "duration": 190069752,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Street77",
      "offset": 3
    }
  ],
  "location": "addAddressPrestaShopSteps.anAddressIsEnteredInAddressInputField(String)"
});
formatter.result({
  "duration": 211062670,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SanFrancisco",
      "offset": 2
    }
  ],
  "location": "addAddressPrestaShopSteps.aCityIsEnteredInCityInputField(String)"
});
formatter.result({
  "duration": 264258165,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "13-469",
      "offset": 2
    }
  ],
  "location": "addAddressPrestaShopSteps.aPostalcodeIsEnteredInZipPostalcodeInputField(String)"
});
formatter.result({
  "duration": 202337173,
  "status": "passed"
});
formatter.match({
  "location": "addAddressPrestaShopSteps.aCountryIsChosenFromDropdownList()"
});
formatter.result({
  "duration": 136882611,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "246789",
      "offset": 2
    }
  ],
  "location": "addAddressPrestaShopSteps.aPhoneIsEnteredInPhoneInputField(String)"
});
formatter.result({
  "duration": 2681375772,
  "status": "passed"
});
formatter.match({
  "location": "addAddressPrestaShopSteps.anAddresIsDeleted()"
});
formatter.result({
  "duration": 514635209,
  "status": "passed"
});
formatter.match({
  "location": "addAddressPrestaShopSteps.closeBrowser()"
});
formatter.result({
  "duration": 232151195,
  "status": "passed"
});
});