
const { test, expect } = require('../fixtures/bug.fixture');
const { PerformanceBugRepro } = require('../pages/bugs/PerformanceBugRepro');

test('Performance Bug - Request a Quote page stuck loading', async ({ bugApp }) => {
  const performanceBug = new PerformanceBugRepro(bugApp.page);

  await performanceBug.openRequestQuotePage();

  // Verify that the loading animation is displayed
  await expect(performanceBug.loadingSpinner).toBeVisible();

  // Wait for the page content to become usable
  await expect(performanceBug.pageContent).toBeVisible();

  console.log('Request a Quote page loaded');
});
