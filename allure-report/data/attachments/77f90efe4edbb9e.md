# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\contentBugCollection.spec.js >> Content Bugs - Empty Cart Button Text Alignment
- Location: tests\contentBugCollection.spec.js:5:1

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('.ec_cart_empty_button academy-bug')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" locator('.ec_cart_empty_button academy-bug') with timeout 5000ms
  - waiting for locator('.ec_cart_empty_button academy-bug')
    - waiting for "https://academybugs.com/my-cart/" navigation to finish...
    - navigated to "https://academybugs.com/my-cart/"

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
    - text: There are no items in your cart.
    - link "RETURN TO STOR E":
      - /url: https://academybugs.com/find-bugs/
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
  - /url: https://academybugs.com/my-cart/?&perpage=25&pricepoint=7
- link "$25.00 - $49.99 (2)":
  - /url: https://academybugs.com/my-cart/?&perpage=25&pricepoint=2
- link "$50.00 - $99.99 (3)":
  - /url: https://academybugs.com/my-cart/?&perpage=25&pricepoint=3
- link "$100.00 - $299.99 (11)":
  - /url: https://academybugs.com/my-cart/?&perpage=25&pricepoint=4
- link "Greater Than $299.99 (1)":
  - /url: https://academybugs.com/my-cart/?&perpage=25&pricepoint=5
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
  1  | 
  2  | const { test, expect } = require("../fixtures/bug.fixture");
  3  | const { ContentBugRepro } = require("../pages/bugs/ContentBugRepro");
  4  | 
  5  | test('Content Bugs - Empty Cart Button Text Alignment', async ({ bugApp }) => {
  6  | 
  7  |     const contentbug = new ContentBugRepro(bugApp.page);
  8  | 
  9  |     await bugApp.page.goto('https://academybugs.com/find-bugs/');
  10 | 
  11 |     await expect(contentbug.bugProduct).toBeVisible();
  12 | 
  13 |     await contentbug.instantAddToCart();
  14 | 
  15 |     await expect(contentbug.productCheckOutButton).toBeVisible();
  16 | 
  17 |     await contentbug.productCheckOutButton.click();
  18 | 
  19 |     await expect(bugApp.page).toHaveURL('/my-cart/');
  20 | 
  21 |     await expect(contentbug.productDeleteButton).toBeVisible();
  22 | 
  23 |     await contentbug.emptyCart();
  24 |   
> 25 |     await expect(contentbug.emptyCartButton).toBeVisible();
     |                                              ^ Error: expect(locator).toBeVisible() failed
  26 | });
  27 | 
```