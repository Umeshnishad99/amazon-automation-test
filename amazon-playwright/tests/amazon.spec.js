// @ts-check
const { test, expect } = require('@playwright/test');

/**
 * @param {import('@playwright/test').Page} page
 * @param {import('@playwright/test').BrowserContext} context
 * @param {string} searchTerm
 */
const performSearchAndAddToCart = async (page, context, searchTerm) => {

  // 1. Open Amazon
  await page.goto('https://www.amazon.com/', { waitUntil: 'domcontentloaded' });

  // 2. Search product
  const searchBox = page.locator('#twotabsearchtextbox');
  await expect(searchBox).toBeVisible();
  await searchBox.fill(searchTerm);
  await searchBox.press('Enter');

  // Wait for results
  await page.waitForSelector('[data-component-type="s-search-result"]');

  // 3. Get first product
  const firstProduct = page.locator('[data-component-type="s-search-result"] a[href*="/dp/"]').first();
  await expect(firstProduct).toBeVisible();

  const productUrl = await firstProduct.getAttribute('href');

  if (!productUrl) {
    throw new Error(`Product URL not found for ${searchTerm}`);
  }

  const fullUrl = productUrl.startsWith('http')
    ? productUrl
    : `https://www.amazon.com${productUrl}`;

  await page.goto(fullUrl, { waitUntil: 'domcontentloaded' });

  // 4. Get price
  const priceLocator = page.locator(
    '#priceblock_ourprice, #priceblock_dealprice, .a-price .a-offscreen'
  ).first();

  let price = 'Price not found';

  if (await priceLocator.isVisible().catch(() => false)) {
    price = (await priceLocator.textContent())?.trim() || price;
  }

  console.log(`${searchTerm} Price: ${price}`);

  // 5. Add to cart
  const addToCartButton = page.locator('#add-to-cart-button');

  if (await addToCartButton.isVisible().catch(() => false)) {
    await addToCartButton.waitFor({ state: 'visible', timeout: 5000 });
    await addToCartButton.click();
    console.log(`${searchTerm} added to cart`);
  } else {
    console.log(`Add to cart button not found for ${searchTerm}`);
  }

  await page.waitForTimeout(2000);
};

test.describe('Amazon Search and Add to Cart Automation', () => {

  test('Search and add iPhone to cart', async ({ page, context }) => {
    await performSearchAndAddToCart(page, context, 'iPhone');
  });

  test('Search and add Samsung Galaxy to cart', async ({ page, context }) => {
    await performSearchAndAddToCart(page, context, 'Samsung Galaxy');
  });

});