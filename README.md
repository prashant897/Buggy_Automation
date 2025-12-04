# Buggy_Automation
Automating Buggy website using playwright

# 🚗 Buggy Cars Rating – Playwright Automation Project

This project automates the functional testing of the **Buggy Cars Rating** website using **Playwright + TypeScript + Page Object Model (POM)**.  
It covers registration, login, voting, and commenting features.

---

## 📌 Features Automated

- ✔ User Registration  
- ✔ User Login  
- ✔ Add Comment  
- ✔ Vote on Car Models  
- ✔ Navigate to Popular Makes / Models  
- ✔ Validations on Car Details  
- ✔ Page Object Model Implementation  
- ✔ HTML Reports, Videos, Screenshots, Traces  

---

## 📁 Project Structure

buggy_automation_project/
│
├── fixtures/
│ └── testData.json
│
├── src/pages/
│ ├── BasePage.ts
│ ├── HomePage.ts
│ ├── AuthPage.ts
│ ├── ModelPage.ts
│ └── CommentsPage.ts
│
├── tests/
│ ├── auth.spec.ts
│ └── comments.spec.ts
│
├── playwright-report/ (auto-generated)
├── test-results/ (auto-generated)
├── package.json
├── tsconfig.json
└── playwright.config.ts

Install dependencies:

1-> npm install
2->Install Playwright browsers: npx playwright install
3->Run all tests:  npx playwright test
4->Run tests with browser window:  npx playwright test --headed


=>View Playwright Report

After test execution:  npx playwright show-report

=>How to Clone This Project 

git clone https://github.com/prashant897/Buggy_Automation.git
cd Buggy_Automation
npm install
npx playwright install
npx playwright test


---

### ✔ THIS IS READY FOR DIRECT COPY → PASTE INTO README.md  
If you want a **Manual Test Case Document**, **Bug Report**, or **Project Explanation for interviews**, just tell me — I’ll generate it.

