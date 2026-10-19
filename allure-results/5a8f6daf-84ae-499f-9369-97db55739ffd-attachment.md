# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\contentBugCollection.spec.js >> Content Bugs - Empty Cart Button Text Alignment
- Location: tests\contentBugCollection.spec.js:5:1

# Error details

```
TypeError: contentbug.emptyCart is not a function
```

# Page snapshot

```yaml
- generic [active] [ref=f1e1]:
  - dialog "cookieconsent" [ref=f1e2]:
    - generic [ref=f1e3]:
      - text: "We use cookies to optimize our website and our service:"
      - link "Cookie Policy" [ref=f1e4] [cursor=pointer]:
        - /url: https://academybugs.com/cookie-policy-eu/
    - generic [ref=f1e5]:
      - button "Functional only" [ref=f1e6] [cursor=pointer]
      - button "Accept cookies" [ref=f1e7] [cursor=pointer]
  - generic [ref=f1e8]:
    - link "Skip to content" [ref=f1e9] [cursor=pointer]:
      - /url: "#sq-content"
    - banner [ref=f1e10]:
      - generic [ref=f1e11]:
        - heading [level=3] [ref=f1e13]:
          - link "AcademyBugs.com" [ref=f1e14] [cursor=pointer]:
            - /url: https://academybugs.com/
        - navigation [ref=f1e15]:
          - list [ref=f1e17]:
            - listitem [ref=f1e18]:
              - link "Examples of Bugs" [ref=f1e19] [cursor=pointer]:
                - /url: https://academybugs.com/
            - listitem [ref=f1e20]:
              - link "Types of Bugs" [ref=f1e21] [cursor=pointer]:
                - /url: https://academybugs.com/types/
            - listitem [ref=f1e22]:
              - link "Find Bugs" [ref=f1e23] [cursor=pointer]:
                - /url: https://academybugs.com/find-bugs/
            - listitem [ref=f1e24]:
              - link "Report Bugs" [ref=f1e25] [cursor=pointer]:
                - /url: https://academybugs.com/report-bugs/
            - listitem [ref=f1e26]:
              - link "" [ref=f1e27] [cursor=pointer]:
                - /url: "#"
    - generic [ref=f1e30]:
      - main [ref=f1e32]:
        - article [ref=f1e33]:
          - generic [ref=f1e36] [cursor=pointer]
      - generic [ref=f1e39]:
        - heading "Select a Currency" [level=4] [ref=f1e40]
        - combobox [ref=f1e42] [cursor=pointer]:
          - option "USD" [selected]
          - option "EUR"
          - option "GBP"
          - option "JPY"
        - heading "Product Search" [level=4] [ref=f1e43]
        - generic [ref=f1e45]:
          - combobox [ref=f1e46]
          - button "Search" [ref=f1e47] [cursor=pointer]
        - heading "Hot Item" [level=4] [ref=f1e48]
        - generic [ref=f1e49]:
          - link [ref=f1e51] [cursor=pointer]:
            - /url: https://academybugs.com/anchor-bracelet
          - link "Silver Heart Bracelet" [ref=f1e54] [cursor=pointer]:
            - /url: https://academybugs.com/store/heart-bracelet/
          - generic [ref=f1e55]: $275.00
        - heading "Store Menu" [level=4] [ref=f1e56]
        - list [ref=f1e58]:
          - listitem [ref=f1e59]:
            - link "All Items" [ref=f1e60] [cursor=pointer]:
              - /url: https://academybugs.com/store/all-items/
          - listitem [ref=f1e61]:
            - link "Accessories [+]" [ref=f1e62] [cursor=pointer]:
              - /url: "#"
              - text: Accessories
              - generic [ref=f1e63]: "[+]"
          - listitem [ref=f1e64]:
            - link "Fashion Type [+]" [ref=f1e65] [cursor=pointer]:
              - /url: "#"
              - text: Fashion Type
              - generic [ref=f1e66]: "[+]"
          - listitem [ref=f1e67]:
            - link "Women's Pants" [ref=f1e68] [cursor=pointer]:
              - /url: https://academybugs.com/store/womens-pants/
        - heading "Filter by Price" [level=4] [ref=f1e69]
        - generic [ref=f1e70]:
          - link "$15.00 - $19.99 (1)" [ref=f1e72] [cursor=pointer]:
            - /url: https://academybugs.com/my-cart/?&perpage=25&pricepoint=7
          - link "$25.00 - $49.99 (2)" [ref=f1e74] [cursor=pointer]:
            - /url: https://academybugs.com/my-cart/?&perpage=25&pricepoint=2
          - link "$50.00 - $99.99 (3)" [ref=f1e76] [cursor=pointer]:
            - /url: https://academybugs.com/my-cart/?&perpage=25&pricepoint=3
          - link "$100.00 - $299.99 (11)" [ref=f1e78] [cursor=pointer]:
            - /url: https://academybugs.com/my-cart/?&perpage=25&pricepoint=4
          - link "Greater Than $299.99 (1)" [ref=f1e80] [cursor=pointer]:
            - /url: https://academybugs.com/my-cart/?&perpage=25&pricepoint=5
        - heading "Shopping Cart" [level=4] [ref=f1e81]
        - link "Shopping Cart (1)" [ref=f1e83] [cursor=pointer]:
          - /url: "#"
        - heading "Your Account" [level=4] [ref=f1e85]
        - generic:
          - generic [ref=f1e86]:
            - generic [ref=f1e87]: Email Address*
            - textbox [ref=f1e88]
          - generic [ref=f1e89]:
            - generic [ref=f1e90]: Password*
            - textbox [ref=f1e91]
          - link "Sign Up" [ref=f1e93] [cursor=pointer]:
            - /url: https://academybugs.com/account/?ec_page=register
          - button "SIGN IN" [ref=f1e95] [cursor=pointer]
    - contentinfo [ref=f1e96]:
      - generic [ref=f1e97]:
        - generic [ref=f1e100]:
          - generic:
            - list:
              - listitem [ref=f1e101]:
                - link [ref=f1e102] [cursor=pointer]:
                  - /url: https://www.utest.com/academy
                  - img "uTest" [ref=f1e103]
              - listitem [ref=f1e104]:
                - link "Terms & Conditions" [ref=f1e105] [cursor=pointer]:
                  - /url: https://www.utest.com/terms-and-conditions
              - listitem [ref=f1e106]:
                - link "Privacy Policy" [ref=f1e107] [cursor=pointer]:
                  - /url: https://www.utest.com/privacy-policy
        - text:      
  - link "" [ref=f1e110] [cursor=pointer]:
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
> 21 |     await contentbug.emptyCart();
     |                      ^ TypeError: contentbug.emptyCart is not a function
  22 | 
  23 |     await expect(contentbug.emptyCartButton).toBeVisible();
  24 | 
  25 |     await expect(contentbug.emptyCartButton).toHaveText('RETURN TO STOR      E');
  26 | });
  27 | 
```