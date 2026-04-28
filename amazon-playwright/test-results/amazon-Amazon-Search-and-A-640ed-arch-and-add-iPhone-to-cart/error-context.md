# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: amazon.spec.js >> Amazon Search and Add to Cart Automation >> Search and add iPhone to cart
- Location: tests\amazon.spec.js:68:3

# Error details

```
Error: browserType.connect: WebSocket error: wss://cdp.lambdatest.com/playwright 401 Unauthorized
{"status":401,"value":{"message":"LT01KQA20CQJWGTSYXHPWXCH91KK-6FF54FB4FC-QGZSK-AP-SOUTH-1: Unauthorized, either Username or AccessKey is invalid"}}

Call log:
  - <ws connecting> wss://cdp.lambdatest.com/playwright
  - <ws unexpected response> wss://cdp.lambdatest.com/playwright 401 Unauthorized
{"status":401,"value":{"message":"LT01KQA20CQJWGTSYXHPWXCH91KK-6FF54FB4FC-QGZSK-AP-SOUTH-1: Unauthorized, either Username or AccessKey is invalid"}}
  - <ws error> wss://cdp.lambdatest.com/playwright error WebSocket was closed before the connection was established
  - <ws connect error> wss://cdp.lambdatest.com/playwright WebSocket was closed before the connection was established
  - <ws disconnected> wss://cdp.lambdatest.com/playwright code=1006 reason=

```