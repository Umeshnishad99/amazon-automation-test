# Amazon Automation Test Assignment

## Overview

This project contains automated test cases for the Customer Engineering Intern assignment for TestMu AI (formerly LambdaTest).

The automation is implemented using **JavaScript** with **Playwright**.

The test suite covers the following scenarios:

- Search for an iPhone on Amazon and add it to the cart
- Search for a Galaxy device on Amazon and add it to the cart
- Print the device price to the console
- Execute both test cases in parallel

---

## Tech Stack

- JavaScript
- Playwright
- Node.js

---

## Test Cases

### Test Case 1

- Navigate to Amazon.com
- Search for **iPhone**
- Select a device
- Add it to the cart
- Print the device price to the console

---

### Test Case 2

- Navigate to Amazon.com
- Search for **Galaxy Device**
- Select a device
- Add it to the cart
- Print the device price to the console

---

## Parallel Execution

Parallel execution is configured using Playwright’s built-in parallel test execution feature.

Both test cases run simultaneously to improve execution speed and demonstrate concurrent browser automation.

---

## Project Structure

```text
amazon-automation-test/
│
├── tests/
│   ├── iphone.spec.js
│   └── galaxy.spec.js
│
├── playwright.config.js
├── package.json
├── package-lock.json
└── README.md