const { test, expect } = require("../fixtures/bug.fixture");
const { FunctionalBugRepro} = require("../pages/bugs/FunctionalBugRepro");


test('Functional Bug- Broken Links', async({bugApp})=>{

 const functionalbug= new FunctionalBugRepro(bugApp.page); 
 
 await bugApp.page.goto('/opportunities-we-provide/');

await functionalbug.applyNow();

await expect (bugApp.page).toHaveURL('/opportunities-we-provide/#');

console.log("Apply Now Button is broken....!!!")

});

test('Functional Bug- Contact US Form not working properly', async({bugApp})=>{

    const contactuser = require('../testData/contactuser.json');

    const functionalbug= new FunctionalBugRepro(bugApp.page); 

    await bugApp.page.goto('/contact-us-form/');

    await functionalbug.sendEnquiry(contactuser);
    
    await expect(functionalbug.errorMessage).toHaveText('Oops! Something went wrong.');

    console.log("Contact Form submission failed...!!")

});


test('Functional Bug- Search Functionality Implanted Bug', async ({ bugApp }) => {

    const functionalbug = new FunctionalBugRepro(bugApp.page);

    await bugApp.page.goto('/');

    // Open the bug details popup and navigate in the same tab
    await functionalbug.searchKeyWordFrame();

    // Get the product name dynamically
    const productTitle = bugApp.page.locator('h1.ec_details_title:visible').first();
    await expect(productTitle).toBeVisible();
    const productName = await productTitle.textContent();
    const searchKeyword = productName.trim().split(' ')[0];
    console.log('Product Name:', productName);
    console.log('Search Keyword:', searchKeyword);

    // Search using the first word of the product name
    await bugApp.page.locator('.ec_search_input').fill(searchKeyword);
    await bugApp.page.getByRole('button', { name: 'Search' }).click();

    // Verify the implanted bug
    await expect(bugApp.page.getByText('Oops! That page can’t be found.', { exact: true })).toBeVisible();

});






