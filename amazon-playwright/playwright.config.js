const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',

  use: {
    headless: true,

    connectOptions: {
      wsEndpoint:
        'wss://cdp.lambdatest.com/playwright?capabilities=' +
        encodeURIComponent(JSON.stringify({
          browserName: 'Chrome',
          browserVersion: 'latest',
          'LT:Options': {
            username: 'YOUR_USERNAME',
            accessKey: 'YOUR_ACCESS_KEY',
            platform: 'Windows 11',
            build: 'Playwright Amazon Build',
            name: 'Amazon Test Run'
          }
        }))
    }
  }
});