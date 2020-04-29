$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/uk/harrow/gov/recources/featurefile/counciltax.feature");
formatter.feature({
  "line": 3,
  "name": "CouncilTax page feature",
  "description": "As a user I want to navigate to council tax page into harrow council website",
  "id": "counciltax-page-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@CouncilTax"
    }
  ]
});
formatter.before({
  "duration": 12404982500,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "User should navigate to council tax page successfully",
  "description": "",
  "id": "counciltax-page-feature;user-should-navigate-to-council-tax-page-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I click on council tax link",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I should navigate to council tax apge successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTestStep.iAmOnHomePage()"
});
formatter.result({
  "duration": 68982900,
  "status": "passed"
});
formatter.match({
  "location": "CouncilTaxSteps.iClickOnCouncilTaxLink()"
});
formatter.result({
  "duration": 618500400,
  "status": "passed"
});
formatter.match({
  "location": "CouncilTaxSteps.iShouldNavigateToCouncilTaxApgeSuccessfully()"
});
formatter.result({
  "duration": 67339200,
  "status": "passed"
});
formatter.after({
  "duration": 667657500,
  "status": "passed"
});
formatter.before({
  "duration": 11262755700,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "User should navigate to login page from single person discount page successfully",
  "description": "",
  "id": "counciltax-page-feature;user-should-navigate-to-login-page-from-single-person-discount-page-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on council tax link",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I click on single person discount link",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on apply button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should navigate to login page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTestStep.iAmOnHomePage()"
});
formatter.result({
  "duration": 17600,
  "status": "passed"
});
formatter.match({
  "location": "CouncilTaxSteps.iClickOnCouncilTaxLink()"
});
formatter.result({
  "duration": 635468900,
  "status": "passed"
});
formatter.match({
  "location": "CouncilTaxSteps.iClickOnSinglePersonDiscountLink()"
});
formatter.result({
  "duration": 10574695600,
  "status": "passed"
});
formatter.match({
  "location": "CouncilTaxSteps.iClickOnApplyButton()"
});
formatter.result({
  "duration": 11692011300,
  "status": "passed"
});
formatter.match({
  "location": "CouncilTaxSteps.iShouldNavigateToLoginPage()"
});
formatter.result({
  "duration": 140153300,
  "status": "passed"
});
formatter.after({
  "duration": 707461400,
  "status": "passed"
});
formatter.uri("src/test/java/uk/harrow/gov/recources/featurefile/login.feature");
formatter.feature({
  "line": 2,
  "name": "Login feature",
  "description": "As a user I want to login into harrow council website",
  "id": "login-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    }
  ]
});
formatter.before({
  "duration": 10931678800,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User should navigate to login page successfully",
  "description": "",
  "id": "login-feature;user-should-navigate-to-login-page-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on login and register link",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I should navigate to login and register page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTestStep.iAmOnHomePage()"
});
formatter.result({
  "duration": 45800,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStep.iClickOnLoginAndRegisterLink()"
});
formatter.result({
  "duration": 11366493400,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStep.iShouldNavigateToLoginAndRegisterPage()"
});
formatter.result({
  "duration": 41114100,
  "status": "passed"
});
formatter.after({
  "duration": 634363300,
  "status": "passed"
});
formatter.before({
  "duration": 11066777400,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "User should not login with invalid credentials",
  "description": "",
  "id": "login-feature;user-should-not-login-with-invalid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I click on login and register link",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I enter email \"abc123@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter password \"abc786\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should see the error message",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTestStep.iAmOnHomePage()"
});
formatter.result({
  "duration": 14200,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStep.iClickOnLoginAndRegisterLink()"
});
formatter.result({
  "duration": 11728188100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123@gmail.com",
      "offset": 15
    }
  ],
  "location": "LoginTestStep.iEnterEmail(String)"
});
formatter.result({
  "duration": 160464600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc786",
      "offset": 18
    }
  ],
  "location": "LoginTestStep.iEnterPassword(String)"
});
formatter.result({
  "duration": 91813200,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStep.iClickOnLoginButton()"
});
formatter.result({
  "duration": 521039400,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStep.iShouldSeeTheErrorMessage()"
});
formatter.result({
  "duration": 49585500,
  "status": "passed"
});
formatter.after({
  "duration": 677224900,
  "status": "passed"
});
});