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

Locator: locator('h1.ec_details_title')
Expected: visible
Error: strict mode violation: locator('h1.ec_details_title') resolved to 2 elements:
    1) <h1 class="ec_details_title ec_details_title_5_1">DNK Yellow Shoes</h1> aka getByText('DNK Yellow Shoes').first()
    2) <h1 class="ec_details_title ec_details_title_5_1">DNK Yellow Shoes</h1> aka getByRole('heading', { name: 'DNK Yellow Shoes' })

Call log:
  - Expect "toBeVisible" locator('h1.ec_details_title') with timeout 5000ms
  - waiting for locator('h1.ec_details_title')

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
          - generic [ref=f1e35]:
            - heading [level=4] [ref=f1e36]:
              - link "Home" [ref=f1e37] [cursor=pointer]:
                - /url: https://academybugs.com
              - text: /
              - link "Shop" [ref=f1e38] [cursor=pointer]:
                - /url: https://academybugs.com/store/
              - text: /
              - link "All Items" [ref=f1e39] [cursor=pointer]:
                - /url: https://academybugs.com/store/all-items/
            - generic [ref=f1e40]:
              - img "DNK Yellow Shoes" [ref=f1e43] [cursor=pointer]
              - generic:
                - generic [ref=f1e44]:
                  - heading [level=4] [ref=f1e45]:
                    - link "Home" [ref=f1e46] [cursor=pointer]:
                      - /url: https://academybugs.com
                    - text: /
                    - link "Shop" [ref=f1e47] [cursor=pointer]:
                      - /url: https://academybugs.com/store/
                    - text: /
                    - link "All Items" [ref=f1e48] [cursor=pointer]:
                      - /url: https://academybugs.com/store/all-items/
                  - heading "DNK Yellow Shoes" [level=1] [ref=f1e49]
                  - generic [ref=f1e51]: $45.00
                  - generic [ref=f1e52]: "Model Number: 4481370"
                  - generic [ref=f1e53] [cursor=pointer]: Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit sed.
                  - generic [ref=f1e55]:
                    - generic [ref=f1e56]:
                      - button "-" [ref=f1e57] [cursor=pointer]
                      - spinbutton [ref=f1e58]: "1"
                      - button "+" [ref=f1e59] [cursor=pointer]
                    - button "ADD TO CART" [ref=f1e61] [cursor=pointer]
                    - generic [ref=f1e62]: "Your Price: $45.00"
                - generic [ref=f1e63]: 35 Left in Stock
                - generic [ref=f1e64]: Maximum purchase amount of 10 is allowed
                - generic [ref=f1e65]:
                  - text: "Manufacturer:"
                  - link "DNK" [ref=f1e66] [cursor=pointer]:
                    - /url: https://academybugs.com/stored/extra/dnk/
                - generic [ref=f1e67]:
                  - link [ref=f1e69] [cursor=pointer]:
                    - /url: https://www.facebook.com/sharer/sharer.php?p[url]=https://academybugs.com/store/dnk-yellow-shoes/&p[images][o]=https://academybugs.com/wp-content/uploads/2020/10/shoe8-updated.jpg&p[title]=DNK+Yellow+Shoes
                    - img "Facebook" [ref=f1e70]
                  - link [ref=f1e72] [cursor=pointer]:
                    - /url: https://twitter.com/intent/tweet?original_referer=https://academybugs.com/store/dnk-yellow-shoes/&source=tweetbutton&text=DNK+Yellow+Shoes&url=https://academybugs.com/store/dnk-yellow-shoes/
                    - img "X" [ref=f1e73]
                  - link [ref=f1e75] [cursor=pointer]:
                    - /url: "mailto:?subject=DNK Yellow Shoes&body=Link for Product: https://academybugs.com/store/dnk-yellow-shoes/"
                    - img "Email" [ref=f1e76]
                  - link [ref=f1e78] [cursor=pointer]:
                    - /url: https://pinterest.com/pin/create/button/?media=https%3A%2F%2Facademybugs.com%2Fwp-content%2Fuploads%2F2020%2F10%2Fshoe8-updated.jpg&description=DNK+Yellow+Shoes&url=https%3A%2F%2Facademybugs.com%2Fstore%2Fdnk-yellow-shoes%2F
                    - img "Pinterest" [ref=f1e79]
                  - link [ref=f1e81] [cursor=pointer]:
                    - /url: https://www.linkedin.com/shareArticle?mini=true&url=https://academybugs.com/store/dnk-yellow-shoes/
                    - img "LinkedIn" [ref=f1e82]
                  - link [ref=f1e84] [cursor=pointer]:
                    - /url: https://academybugs.com/myspace/
                    - img "MySpace" [ref=f1e85]
            - generic [ref=f1e86]:
              - list [ref=f1e87]:
                - listitem [ref=f1e88] [cursor=pointer]: Description
              - paragraph [ref=f1e91] [cursor=pointer]: Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit sed.
        - generic [ref=f1e93]:
          - heading "Leave a Reply" [level=3] [ref=f1e94]
          - generic [ref=f1e95]:
            - paragraph [ref=f1e96]:
              - text: Your email address will not be published.
              - generic [ref=f1e97]: Required fields are marked *
            - paragraph [ref=f1e98]:
              - textbox "Comment" [ref=f1e99]
            - generic:
              - paragraph [ref=f1e100]:
                - textbox "Name*" [ref=f1e101]
              - paragraph [ref=f1e102]:
                - textbox "Email*" [ref=f1e103]
              - paragraph [ref=f1e104]:
                - textbox "Website" [ref=f1e105]
            - paragraph [ref=f1e106]:
              - button "Post Comment" [ref=f1e107] [cursor=pointer]
      - generic [ref=f1e108]:
        - heading "Select a Currency" [level=4] [ref=f1e109]
        - combobox [ref=f1e111] [cursor=pointer]:
          - option "USD" [selected]
          - option "EUR"
          - option "GBP"
          - option "JPY"
        - heading "Product Search" [level=4] [ref=f1e112]
        - generic [ref=f1e114]:
          - combobox [ref=f1e115]
          - button "Search" [ref=f1e116] [cursor=pointer]
        - heading "Hot Item" [level=4] [ref=f1e117]
        - generic [ref=f1e118]:
          - link [ref=f1e120] [cursor=pointer]:
            - /url: https://academybugs.com/anchor-bracelet
          - link "Silver Heart Bracelet" [ref=f1e123] [cursor=pointer]:
            - /url: https://academybugs.com/store/heart-bracelet/
          - generic [ref=f1e124]: $275.00
        - heading "Store Menu" [level=4] [ref=f1e125]
        - list [ref=f1e127]:
          - listitem [ref=f1e128]:
            - link "All Items" [ref=f1e129] [cursor=pointer]:
              - /url: https://academybugs.com/store/all-items/
          - listitem [ref=f1e130]:
            - link "Accessories [+]" [ref=f1e131] [cursor=pointer]:
              - /url: "#"
              - text: Accessories
              - generic [ref=f1e132]: "[+]"
          - listitem [ref=f1e133]:
            - link "Fashion Type [+]" [ref=f1e134] [cursor=pointer]:
              - /url: "#"
              - text: Fashion Type
              - generic [ref=f1e135]: "[+]"
          - listitem [ref=f1e136]:
            - link "Women's Pants" [ref=f1e137] [cursor=pointer]:
              - /url: https://academybugs.com/store/womens-pants/
        - heading "Filter by Price" [level=4] [ref=f1e138]
        - generic [ref=f1e139]:
          - link "$15.00 - $19.99 (1)" [ref=f1e141] [cursor=pointer]:
            - /url: https://academybugs.com/store/dnk-yellow-shoes/?&perpage=25&pricepoint=7
          - link "$25.00 - $49.99 (2)" [ref=f1e143] [cursor=pointer]:
            - /url: https://academybugs.com/store/dnk-yellow-shoes/?&perpage=25&pricepoint=2
          - link "$50.00 - $99.99 (3)" [ref=f1e145] [cursor=pointer]:
            - /url: https://academybugs.com/store/dnk-yellow-shoes/?&perpage=25&pricepoint=3
          - link "$100.00 - $299.99 (11)" [ref=f1e147] [cursor=pointer]:
            - /url: https://academybugs.com/store/dnk-yellow-shoes/?&perpage=25&pricepoint=4
          - link "Greater Than $299.99 (1)" [ref=f1e149] [cursor=pointer]:
            - /url: https://academybugs.com/store/dnk-yellow-shoes/?&perpage=25&pricepoint=5
        - heading "Shopping Cart" [level=4] [ref=f1e150]
        - link "Shopping Cart (0)" [ref=f1e152] [cursor=pointer]:
          - /url: "#"
        - heading "Your Account" [level=4] [ref=f1e154]
        - generic:
          - generic [ref=f1e155]:
            - generic [ref=f1e156]: Email Address*
            - textbox [ref=f1e157]
          - generic [ref=f1e158]:
            - generic [ref=f1e159]: Password*
            - textbox [ref=f1e160]
          - link "Sign Up" [ref=f1e162] [cursor=pointer]:
            - /url: https://academybugs.com/account/?ec_page=register
          - button "SIGN IN" [ref=f1e164] [cursor=pointer]
    - contentinfo [ref=f1e165]:
      - generic [ref=f1e166]:
        - generic [ref=f1e169]:
          - generic:
            - list:
              - listitem [ref=f1e170]:
                - link [ref=f1e171] [cursor=pointer]:
                  - /url: https://www.utest.com/academy
                  - img "uTest" [ref=f1e172]
              - listitem [ref=f1e173]:
                - link "Terms & Conditions" [ref=f1e174] [cursor=pointer]:
                  - /url: https://www.utest.com/terms-and-conditions
              - listitem [ref=f1e175]:
                - link "Privacy Policy" [ref=f1e176] [cursor=pointer]:
                  - /url: https://www.utest.com/privacy-policy
        - text:      
  - link "" [ref=f1e179] [cursor=pointer]:
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
  46 |     const productTitle = bugApp.page.locator('h1.ec_details_title');
> 47 |     await expect(productTitle).toBeVisible();
     |                                ^ Error: expect(locator).toBeVisible() failed
  48 | 
  49 |     const productName = await productTitle.textContent();
  50 |     const searchKeyword = productName.trim().split(' ')[0];
  51 | 
  52 |     // Search using the first word of the product name
  53 |     await bugApp.page.locator('.ec_search_input').fill(searchKeyword);
  54 |     await bugApp.page.getByRole('button', { name: 'Search' }).click();
  55 | 
  56 |     // Verify the implanted bug
  57 |     await expect(bugApp.page.getByText('Oops! That page can’t be found.', { exact: true })).toBeVisible();
  58 | 
  59 | });
  60 | 
  61 | 
  62 | 
  63 | 
  64 | 
  65 | 
  66 | 
```