test.describe('Feature Group (e.g., User Authentication)', () => {
  
  // Runs before each test in this group
  test.beforeEach(async ({ page }) => {
    await page.goto('https://example.com');
  });

  // Individual test case
  test('should display the correct page title', async ({ page }) => {
    // 1. Act: Interact with elements using Locators
    await page.getByRole('link', { name: 'Get started' }).click();

    // 2. Assert: Verify the expected outcome
    await expect(page).toHaveURL(/.*intro/);
    await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
  });

});