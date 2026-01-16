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

Yogendra Reddy Satti
Automation Tester | Cypress | BDD | JavaScript

⭐ Final Notes

This framework is suitable for:

Learning Cypress BDD from scratch

Real-time project implementation

Enterprise-level automation setups

Feel free to fork, clone, and enhance 🚀