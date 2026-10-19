
const { test, expect } = require("../fixtures/bug.fixture");
const { ContentBugRepro } = require("../pages/bugs/ContentBugRepro");

test('Content Bugs - Empty Cart Button Text Alignment', async ({ bugApp }) => {

    const contentbug = new ContentBugRepro(bugApp.page);

    await bugApp.page.goto('https://academybugs.com/find-bugs/');

    await expect(contentbug.bugProduct).toBeVisible();

    await contentbug.instantAddToCart();

    await expect(contentbug.productCheckOutButton).toBeVisible();

    await contentbug.productCheckOutButton.click();

    await expect(bugApp.page).toHaveURL('/my-cart/');

    await expect(contentbug.productDeleteButton).toBeVisible();

    await contentbug.emptyCart();
  
    await expect(contentbug.emptyCartButton).toBeVisible();

   const buttonText = await contentbug.getEmptyCartButtonText();

   console.log('Return to Store text:', JSON.stringify(buttonText));

});
