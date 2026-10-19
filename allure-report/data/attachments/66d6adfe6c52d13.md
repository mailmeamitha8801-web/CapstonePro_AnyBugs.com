# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\functionalBugCollection.spec.js >> Functional Bug- Search Functionality Implanted Bug
- Location: tests\functionalBugCollection.spec.js:36:1

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator:  locator('h1.ec_details_title').first()
Expected: visible
Received: hidden
Timeout:  5000ms

Call log:
  - Expect "toBeVisible" locator('h1.ec_details_title').first() with timeout 5000ms
  - waiting for locator('h1.ec_details_title').first()
    13 × locator resolved to <h1 class="ec_details_title ec_details_title_5_1">DNK Yellow Shoes</h1>
       - unexpected value "hidden"

```

```yaml
- dialog "cookieconsent":
  - text: "We use cookies to optimize our website and our service:"
  - link "Cookie Policy":
    - /url: https://academybugs.com/cookie-policy-eu/
  - button "Functional only"
  - button "Accept cookies"
- link "Skip to content":
  - /url: "#sq-content"
- banner:
  - heading "AcademyBugs.com" [level=3]:
    - link "AcademyBugs.com":
      - /url: https://academybugs.com/
  - navigation:
    - list:
      - listitem:
        - link "Examples of Bugs":
          - /url: https://academybugs.com/
      - listitem:
        - link "Types of Bugs":
          - /url: https://academybugs.com/types/
      - listitem:
        - link "Find Bugs":
          - /url: https://academybugs.com/find-bugs/
      - listitem:
        - link "Report Bugs":
          - /url: https://academybugs.com/report-bugs/
      - listitem:
        - link "":
          - /url: "#"
- main:
  - article:
    - heading "Home / Shop / All Items" [level=4]:
      - link "Home":
        - /url: https://academybugs.com
      - text: /
      - link "Shop":
        - /url: https://academybugs.com/store/
      - text: /
      - link "All Items":
        - /url: https://academybugs.com/store/all-items/
    - img "DNK Yellow Shoes"
    - heading "Home / Shop / All Items" [level=4]:
      - link "Home":
        - /url: https://academybugs.com
      - text: /
      - link "Shop":
        - /url: https://academybugs.com/store/
      - text: /
      - link "All Items":
        - /url: https://academybugs.com/store/all-items/
    - heading "DNK Yellow Shoes" [level=1]
    - text: "$45.00 Model Number: 4481370 Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit sed."
    - button "-"
    - spinbutton: "1"
    - button "+"
    - button "ADD TO CART"
    - text: "Your Price: $45.00 35 Left in Stock Maximum purchase amount of 10 is allowed Manufacturer:"
    - link "DNK":
      - /url: https://academybugs.com/stored/extra/dnk/
    - link "Facebook":
      - /url: https://www.facebook.com/sharer/sharer.php?p[url]=https://academybugs.com/store/dnk-yellow-shoes/&p[images][o]=https://academybugs.com/wp-content/uploads/2020/10/shoe8-updated.jpg&p[title]=DNK+Yellow+Shoes
      - img "Facebook"
    - link "X":
      - /url: https://twitter.com/intent/tweet?original_referer=https://academybugs.com/store/dnk-yellow-shoes/&source=tweetbutton&text=DNK+Yellow+Shoes&url=https://academybugs.com/store/dnk-yellow-shoes/
      - img "X"
    - link "Email":
      - /url: "mailto:?subject=DNK Yellow Shoes&body=Link for Product: https://academybugs.com/store/dnk-yellow-shoes/"
      - img "Email"
    - link "Pinterest":
      - /url: https://pinterest.com/pin/create/button/?media=https%3A%2F%2Facademybugs.com%2Fwp-content%2Fuploads%2F2020%2F10%2Fshoe8-updated.jpg&description=DNK+Yellow+Shoes&url=https%3A%2F%2Facademybugs.com%2Fstore%2Fdnk-yellow-shoes%2F
      - img "Pinterest"
    - link "LinkedIn":
      - /url: https://www.linkedin.com/shareArticle?mini=true&url=https://academybugs.com/store/dnk-yellow-shoes/
      - img "LinkedIn"
    - link "MySpace":
      - /url: https://academybugs.com/myspace/
      - img "MySpace"
    - list:
      - listitem: Description
    - paragraph: Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit sed.
  - heading "Leave a Reply" [level=3]
  - paragraph: Your email address will not be published. Required fields are marked *
  - paragraph:
    - textbox "Comment"
  - paragraph:
    - textbox "Name*"
  - paragraph:
    - textbox "Email*"
  - paragraph:
    - textbox "Website"
  - paragraph:
    - button "Post Comment"
- heading "Select a Currency" [level=4]
- combobox:
  - option "USD" [selected]
  - option "EUR"
  - option "GBP"
  - option "JPY"
- heading "Product Search" [level=4]
- combobox
- button "Search"
- heading "Hot Item" [level=4]
- link:
  - /url: https://academybugs.com/anchor-bracelet
  - img
- link "Silver Heart Bracelet":
  - /url: https://academybugs.com/store/heart-bracelet/
- text: $275.00
- heading "Store Menu" [level=4]
- list:
  - listitem:
    - link "All Items":
      - /url: https://academybugs.com/store/all-items/
  - listitem:
    - link "Accessories [+]":
      - /url: "#"
  - listitem:
    - link "Fashion Type [+]":
      - /url: "#"
  - listitem:
    - link "Women's Pants":
      - /url: https://academybugs.com/store/womens-pants/
- heading "Filter by Price" [level=4]
- link "$15.00 - $19.99 (1)":
  - /url: https://academybugs.com/store/dnk-yellow-shoes/?&perpage=25&pricepoint=7
- link "$25.00 - $49.99 (2)":
  - /url: https://academybugs.com/store/dnk-yellow-shoes/?&perpage=25&pricepoint=2
- link "$50.00 - $99.99 (3)":
  - /url: https://academybugs.com/store/dnk-yellow-shoes/?&perpage=25&pricepoint=3
- link "$100.00 - $299.99 (11)":
  - /url: https://academybugs.com/store/dnk-yellow-shoes/?&perpage=25&pricepoint=4
- link "Greater Than $299.99 (1)":
  - /url: https://academybugs.com/store/dnk-yellow-shoes/?&perpage=25&pricepoint=5
- heading "Shopping Cart" [level=4]
- link "Shopping Cart (0)":
  - /url: "#"
- heading "Your Account" [level=4]
- text: Email Address*
- textbox
- text: Password*
- textbox
- link "Sign Up":
  - /url: https://academybugs.com/account/?ec_page=register
- button "SIGN IN"
- contentinfo:
  - list:
    - listitem:
      - link "uTest":
        - /url: https://www.utest.com/academy
        - img "uTest"
    - listitem:
      - link "Terms & Conditions":
        - /url: https://www.utest.com/terms-and-conditions
    - listitem:
      - link "Privacy Policy":
        - /url: https://www.utest.com/privacy-policy
- link "":
  - /url: "#"
```

# Test source

```ts
  1  | const { test, expect } = require("../fixtures/bug.fixture");
  2  | const { FunctionalBugRepro} = require("../pages/bugs/FunctionalBugRepro");
  3  | 
  4  | 
  5  | test('Functional Bug- Broken Links', async({bugApp})=>{
  6  | 
  7  |  const functionalbug= new FunctionalBugRepro(bugApp.page); 
  8  |  
  9  |  await bugApp.page.goto('/opportunities-we-provide/');
  10 | 
  11 | await functionalbug.applyNow();
  12 | 
  13 | await expect (bugApp.page).toHaveURL('/opportunities-we-provide/#');
  14 | 
  15 | console.log("Apply Now Button is broken....!!!")
  16 | 
  17 | });
  18 | 
  19 | test('Functional Bug- Contact US Form not working properly', async({bugApp})=>{
  20 | 
  21 |     const contactuser = require('../testData/contactuser.json');
  22 | 
  23 |     const functionalbug= new FunctionalBugRepro(bugApp.page); 
  24 | 
  25 |     await bugApp.page.goto('/contact-us-form/');
  26 | 
  27 |     await functionalbug.sendEnquiry(contactuser);
  28 |     
  29 |     await expect(functionalbug.errorMessage).toHaveText('Oops! Something went wrong.');
  30 | 
  31 |     console.log("Contact Form submission failed...!!")
  32 | 
  33 | });
  34 | 
  35 | 
  36 | test('Functional Bug- Search Functionality Implanted Bug', async ({ bugApp }) => {
  37 | 
  38 |     const functionalbug = new FunctionalBugRepro(bugApp.page);
  39 | 
  40 |     await bugApp.page.goto('/');
  41 | 
  42 |     // Open the bug details popup and navigate in the same tab
  43 |     await functionalbug.searchKeyWordFrame();
  44 | 
  45 |     // Get the product name dynamically
  46 |     const productTitle = bugApp.page.locator('h1.ec_details_title').first();
> 47 |     await expect(productTitle).toBeVisible();
     |                                ^ Error: expect(locator).toBeVisible() failed
  48 |     const productName = await productTitle.textContent();
  49 |     const searchKeyword = productName.trim().split(' ')[0];
  50 | 
  51 |     // Search using the first word of the product name
  52 |     await bugApp.page.locator('.ec_search_input').fill(searchKeyword);
  53 |     await bugApp.page.getByRole('button', { name: 'Search' }).click();
  54 | 
  55 |     // Verify the implanted bug
  56 |     await expect(bugApp.page.getByText('Oops! That page can’t be found.', { exact: true })).toBeVisible();
  57 | 
  58 | });
  59 | 
  60 | 
  61 | 
  62 | 
  63 | 
  64 | 
  65 | 
```