📘 Cypress BDD E2E Automation Framework
📌 Overview

This repository contains an End-to-End (E2E) Test Automation Framework built using:

Cypress for fast and reliable E2E testing

Cucumber (BDD) for readable, business-friendly test scenarios

JavaScript for test implementation

Mochawesome for rich HTML reporting

The framework is designed following real-world industry standards, focusing on:

Maintainability

Reusability

Scalability

CI/CD readiness

🧠 Why This Framework?

✔ BDD approach bridges the gap between technical and non-technical stakeholders
✔ Page Object Model improves test maintenance
✔ Fixture-based test data handling
✔ Ready for CI/CD pipelines
✔ Clean folder structure

🛠️ Tech Stack
Tool	Purpose
Cypress	E2E test execution
Cucumber	BDD (Gherkin syntax)
JavaScript	Test logic
Mochawesome	HTML reports
Node.js	Runtime
Git	Version control
📁 Project Structure
cypress-bdd-framework/
│
├── cypress/
│   ├── e2e/
│   │   ├── features/
│   │   │   └── login.feature
│   │   └── pages/
│   │       └── LoginPage.js
│   │
│   ├── fixtures/
│   │   └── loginData.json
│   │
│   ├── support/
│   │   ├── step_definitions/
│   │   │   └── loginSteps.js
│   │   └── e2e.js
│   │
│   └── reports/
│
├── cypress.config.js
├── package.json
├── .gitignore
└── README.md

🚀 Step-by-Step Framework Setup
1️⃣ Prerequisites

Make sure the following are installed:

Node.js (v18 or above recommended)

Git

Chrome / Edge browser

Verify:

node -v
npm -v
git --version

2️⃣ Clone the Repository
git clone https://github.com/<your-username>/cypress-bdd-framework.git
cd cypress-bdd-framework

3️⃣ Install Dependencies
npm install


This installs:

Cypress

Cucumber preprocessor

Mochawesome reporter

4️⃣ Open Cypress Test Runner (UI Mode)
npx cypress open


✔ Useful for debugging
✔ Visual test execution

5️⃣ Run Tests in Headless Mode (CI Mode)
npx cypress run


✔ Required for reports
✔ Used in CI/CD pipelines

🧪 Writing Tests Using BDD
Feature File (.feature)
Feature: Login functionality

  Scenario: Successful login with valid credentials
    Given user is on login page
    When user logs in with "validUser" credentials
    Then user should be redirected to dashboard

Step Definition Example
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../../e2e/pages/LoginPage";

const loginPage = new LoginPage();

Given("user is on login page", () => {
  loginPage.visit();
});

When("user logs in with {string} credentials", function (userType) {
  cy.fixture("loginData").then((data) => {
    loginPage.enterUsername(data[userType].username);
    loginPage.enterPassword(data[userType].password);
    loginPage.clickLogin();
  });
});

Then("user should be redirected to dashboard", () => {
  cy.url().should("include", "/dashboard");
});

📦 Test Data Management (Fixtures)
loginData.json
{
  "validUser": {
    "username": "admin",
    "password": "password123"
  },
  "invalidUser": {
    "username": "wrong",
    "password": "wrongpass"
  }
}


✔ Keeps test data separate from test logic
✔ Easy to scale and maintain

📊 Reporting (Mochawesome)
Generate Reports
npm run merge:reports
npm run report


📁 Report Location:

cypress/reports/html/index.html


✔ JSON + HTML reports
✔ Screenshots on failure
✔ CI friendly

✅ Best Practices Followed

✔ Page Object Model (POM)
✔ Reusable step definitions
✔ No hard-coded test data
✔ Clean Git history
✔ CI-ready execution

🚧 Future Enhancements

Tag-based execution (@smoke, @regression)

Parallel execution

API + UI combined testing

GitHub Actions / Jenkins CI

Cucumber HTML reporting

Cross-browser execution

👨‍💻 Author

Chinna Subbi Reddy Medapati
Automation Tester | Cypress | BDD | JavaScript

⭐ Final Notes

This framework is suitable for:

Learning Cypress BDD from scratch

Real-time project implementation

Enterprise-level automation setups

Feel free to fork, clone, and enhance 🚀