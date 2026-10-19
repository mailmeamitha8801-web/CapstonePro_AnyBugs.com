# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\contentBugCollection.spec.js >> Content Bugs - Empty Cart Button Text Alignment
- Location: tests\contentBugCollection.spec.js:5:1

# Error details

```
TypeError: contentbug.getEmptyCartButtonText is not a function
```

# Page snapshot

```yaml
- generic [active] [ref=f2e1]:
  - dialog "cookieconsent" [ref=f2e2]:
    - generic [ref=f2e3]:
      - text: "We use cookies to optimize our website and our service:"
      - link "Cookie Policy" [ref=f2e4] [cursor=pointer]:
        - /url: https://academybugs.com/cookie-policy-eu/
    - generic [ref=f2e5]:
      - button "Functional only" [ref=f2e6] [cursor=pointer]
      - button "Accept cookies" [ref=f2e7] [cursor=pointer]
  - generic [ref=f2e8]:
    - link "Skip to content" [ref=f2e9] [cursor=pointer]:
      - /url: "#sq-content"
    - banner [ref=f2e10]:
      - generic [ref=f2e11]:
        - heading [level=3] [ref=f2e13]:
          - link "AcademyBugs.com" [ref=f2e14] [cursor=pointer]:
            - /url: https://academybugs.com/
        - navigation [ref=f2e15]:
          - list [ref=f2e17]:
            - listitem [ref=f2e18]:
              - link "Examples of Bugs" [ref=f2e19] [cursor=pointer]:
                - /url: https://academybugs.com/
            - listitem [ref=f2e20]:
              - link "Types of Bugs" [ref=f2e21] [cursor=pointer]:
                - /url: https://academybugs.com/types/
            - listitem [ref=f2e22]:
              - link "Find Bugs" [ref=f2e23] [cursor=pointer]:
                - /url: https://academybugs.com/find-bugs/
            - listitem [ref=f2e24]:
              - link "Report Bugs" [ref=f2e25] [cursor=pointer]:
                - /url: https://academybugs.com/report-bugs/
            - listitem [ref=f2e26]:
              - link "" [ref=f2e27] [cursor=pointer]:
                - /url: "#"
    - generic [ref=f2e30]:
      - main [ref=f2e32]:
        - article [ref=f2e33]:
          - generic [ref=f2e34]:
            - generic:
              - generic [ref=f2e35]: There are no items in your cart.
              - link "RETURN TO STOR E" [ref=f2e37] [cursor=pointer]:
                - /url: https://academybugs.com/find-bugs/
      - generic [ref=f2e38]:
        - heading "Select a Currency" [level=4] [ref=f2e39]
        - combobox [ref=f2e41] [cursor=pointer]:
          - option "USD" [selected]
          - option "EUR"
          - option "GBP"
          - option "JPY"
        - heading "Product Search" [level=4] [ref=f2e42]
        - generic [ref=f2e44]:
          - combobox [ref=f2e45]
          - button "Search" [ref=f2e46] [cursor=pointer]
        - heading "Hot Item" [level=4] [ref=f2e47]
        - generic [ref=f2e48]:
          - link [ref=f2e50] [cursor=pointer]:
            - /url: https://academybugs.com/anchor-bracelet
          - link "Silver Heart Bracelet" [ref=f2e53] [cursor=pointer]:
            - /url: https://academybugs.com/store/heart-bracelet/
          - generic [ref=f2e54]: $275.00
        - heading "Store Menu" [level=4] [ref=f2e55]
        - list [ref=f2e57]:
          - listitem [ref=f2e58]:
            - link "All Items" [ref=f2e59] [cursor=pointer]:
              - /url: https://academybugs.com/store/all-items/
          - listitem [ref=f2e60]:
            - link "Accessories [+]" [ref=f2e61] [cursor=pointer]:
              - /url: "#"
              - text: Accessories
              - generic [ref=f2e62]: "[+]"
          - listitem [ref=f2e63]:
            - link "Fashion Type [+]" [ref=f2e64] [cursor=pointer]:
              - /url: "#"
              - text: Fashion Type
              - generic [ref=f2e65]: "[+]"
          - listitem [ref=f2e66]:
            - link "Women's Pants" [ref=f2e67] [cursor=pointer]:
              - /url: https://academybugs.com/store/womens-pants/
        - heading "Filter by Price" [level=4] [ref=f2e68]
        - generic [ref=f2e69]:
          - link "$15.00 - $19.99 (1)" [ref=f2e71] [cursor=pointer]:
            - /url: https://academybugs.com/my-cart/?&perpage=25&pricepoint=7
          - link "$25.00 - $49.99 (2)" [ref=f2e73] [cursor=pointer]:
            - /url: https://academybugs.com/my-cart/?&perpage=25&pricepoint=2
          - link "$50.00 - $99.99 (3)" [ref=f2e75] [cursor=pointer]:
            - /url: https://academybugs.com/my-cart/?&perpage=25&pricepoint=3
          - link "$100.00 - $299.99 (11)" [ref=f2e77] [cursor=pointer]:
            - /url: https://academybugs.com/my-cart/?&perpage=25&pricepoint=4
          - link "Greater Than $299.99 (1)" [ref=f2e79] [cursor=pointer]:
            - /url: https://academybugs.com/my-cart/?&perpage=25&pricepoint=5
        - heading "Shopping Cart" [level=4] [ref=f2e80]
        - link "Shopping Cart (0)" [ref=f2e82] [cursor=pointer]:
          - /url: "#"
        - heading "Your Account" [level=4] [ref=f2e84]
        - generic:
          - generic [ref=f2e85]:
            - generic [ref=f2e86]: Email Address*
            - textbox [ref=f2e87]
          - generic [ref=f2e88]:
            - generic [ref=f2e89]: Password*
            - textbox [ref=f2e90]
          - link "Sign Up" [ref=f2e92] [cursor=pointer]:
            - /url: https://academybugs.com/account/?ec_page=register
          - button "SIGN IN" [ref=f2e94] [cursor=pointer]
    - contentinfo [ref=f2e95]:
      - generic [ref=f2e96]:
        - generic [ref=f2e99]:
          - generic:
            - list:
              - listitem [ref=f2e100]:
                - link [ref=f2e101] [cursor=pointer]:
                  - /url: https://www.utest.com/academy
                  - img "uTest" [ref=f2e102]
              - listitem [ref=f2e103]:
                - link "Terms & Conditions" [ref=f2e104] [cursor=pointer]:
                  - /url: https://www.utest.com/terms-and-conditions
              - listitem [ref=f2e105]:
                - link "Privacy Policy" [ref=f2e106] [cursor=pointer]:
                  - /url: https://www.utest.com/privacy-policy
        - text:      
  - link "" [ref=f2e109] [cursor=pointer]:
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
  25 |     await expect(contentbug.emptyCartButton).toBeVisible();
  26 | 
> 27 |    const buttonText = await contentbug.getEmptyCartButtonText();
     |                                        ^ TypeError: contentbug.getEmptyCartButtonText is not a function
  28 | 
  29 |    console.log('Return to Store text:', JSON.stringify(buttonText));
  30 | 
  31 | });
  32 | 
```