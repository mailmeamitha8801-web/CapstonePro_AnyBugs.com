# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\contentBugCollection.spec.js >> Content Bugs - Empty Cart Button Text Alignment
- Location: tests\contentBugCollection.spec.js:5:1

# Error details

```
Error: toBeVisible can be only used with Locator object, was called with undefined
```

# Page snapshot

```yaml
- generic [ref=e1]:
  - dialog "cookieconsent" [ref=e2]:
    - generic [ref=e3]:
      - text: "We use cookies to optimize our website and our service:"
      - link "Cookie Policy" [ref=e4] [cursor=pointer]:
        - /url: https://academybugs.com/cookie-policy-eu/
    - generic [ref=e5]:
      - button "Functional only" [ref=e6] [cursor=pointer]
      - button "Accept cookies" [ref=e7] [cursor=pointer]
  - generic [ref=e8]:
    - link "Skip to content" [ref=e9] [cursor=pointer]:
      - /url: "#sq-content"
    - banner [ref=e10]:
      - generic [ref=e11]:
        - heading [level=3] [ref=e13]:
          - link "AcademyBugs.com" [ref=e14] [cursor=pointer]:
            - /url: https://academybugs.com/
        - navigation [ref=e15]:
          - list [ref=e17]:
            - listitem [ref=e18]:
              - link "Examples of Bugs" [ref=e19] [cursor=pointer]:
                - /url: https://academybugs.com/
            - listitem [ref=e20]:
              - link "Types of Bugs" [ref=e21] [cursor=pointer]:
                - /url: https://academybugs.com/types/
            - listitem [ref=e22]:
              - link "Find Bugs" [ref=e23] [cursor=pointer]:
                - /url: https://academybugs.com/find-bugs/
            - listitem [ref=e24]:
              - link "Report Bugs" [ref=e25] [cursor=pointer]:
                - /url: https://academybugs.com/report-bugs/
            - listitem [ref=e26]:
              - link "" [ref=e27] [cursor=pointer]:
                - /url: "#"
    - main [ref=e32]:
      - article [ref=e33]:
        - generic [ref=e34]:
          - heading "Find Bugs" [level=3] [ref=e35]
          - heading "Explore a practice test site that has 25 real bugs planted inside." [level=6] [ref=e36]
          - generic [ref=e37]:
            - generic [ref=e38]:
              - generic [ref=e39]:
                - generic [ref=e40]: View
                - link "10" [ref=e41] [cursor=pointer]:
                  - /url: "#"
                - link "25" [ref=e42] [cursor=pointer]:
                  - /url: "#"
                - link "50" [ref=e43] [cursor=pointer]:
                  - /url: "#"
              - generic [ref=e44]: Showing all 18 results
              - combobox [ref=e45]:
                - option "Default Sorting" [selected]
                - option "Price Low-High"
                - option "Price High-Low"
                - option "Title A-Z"
                - option "Title Z-A"
                - option "Newest"
                - option "Oldest"
                - option "Best Rating"
                - option "Most Viewed"
            - text: 
            - list:
              - listitem [ref=e46]:
                - generic [ref=e47]:
                  - generic [ref=e48]:
                    - link [ref=e49] [cursor=pointer]:
                      - /url: https://academybugs.com/store/dnk-yellow-shoes/
                    - img "DNK Yellow Shoes" [ref=e52] [cursor=pointer]
                  - heading [level=3] [ref=e53]:
                    - link "DNK Yellow Shoes" [ref=e54] [cursor=pointer]:
                      - /url: https://academybugs.com/store/dnk-yellow-shoes/
                  - generic [ref=e55]: $45.00
                  - link "ADD TO CART" [active] [ref=e58] [cursor=pointer]:
                    - /url: https://academybugs.com/my-cart/?ec_action=addtocart&model_number=4481370
                  - text: 
                  - generic [ref=e59]:
                    - text: 
                    - generic [ref=e60]: Adding to Cart...
              - listitem [ref=e61]:
                - generic [ref=e62]:
                  - generic [ref=e63]:
                    - link [ref=e64] [cursor=pointer]:
                      - /url: https://academybugs.com/store/dark-grey-jeans/
                    - img "Dark Grey Jeans" [ref=e67] [cursor=pointer]
                  - heading [level=3] [ref=e68]:
                    - link "Dark Grey Jeans" [ref=e69] [cursor=pointer]:
                      - /url: https://academybugs.com/store/dark-grey-jeans/
                  - generic [ref=e70]: $46.00
                  - link "ADD TO CART" [ref=e73] [cursor=pointer]:
                    - /url: https://academybugs.com/my-cart/?ec_action=addtocart&model_number=4281370
                  - text:  
              - listitem [ref=e74]:
                - generic [ref=e75]:
                  - generic [ref=e76]:
                    - link [ref=e77] [cursor=pointer]:
                      - /url: https://academybugs.com/store/flamingo-tshirt/
                    - img "Flamingo Tshirt" [ref=e80] [cursor=pointer]
                  - heading [level=3] [ref=e81]:
                    - link "Flamingo Tshirt" [ref=e82] [cursor=pointer]:
                      - /url: https://academybugs.com/store/flamingo-tshirt/
                  - generic [ref=e83]: $15.14
                  - link "ADD TO CART" [ref=e86] [cursor=pointer]:
                    - /url: https://academybugs.com/my-cart/?ec_action=addtocart&model_number=4881370
                  - text:  
              - listitem [ref=e87]:
                - generic [ref=e88]:
                  - generic [ref=e89]:
                    - link [ref=e90] [cursor=pointer]:
                      - /url: https://academybugs.com/store/blue-hoodie/
                    - img "Blue Hoodie" [ref=e93] [cursor=pointer]
                  - heading [level=3] [ref=e94]:
                    - link "Blue Hoodie" [ref=e95] [cursor=pointer]:
                      - /url: https://academybugs.com/store/blue-hoodie/
                  - generic [ref=e96]: $140.00 $111.00
                  - link "ADD TO CART" [ref=e99] [cursor=pointer]:
                    - /url: https://academybugs.com/my-cart/?ec_action=addtocart&model_number=3381370
                  - text:  
              - listitem [ref=e100]:
                - generic [ref=e101]:
                  - generic [ref=e102]:
                    - link [ref=e103] [cursor=pointer]:
                      - /url: https://academybugs.com/store/blue-tshirt/
                    - img "Blue Tshirt" [ref=e106] [cursor=pointer]
                  - heading [level=3] [ref=e107]:
                    - link "Blue Tshirt" [ref=e108] [cursor=pointer]:
                      - /url: https://academybugs.com/store/blue-tshirt/
                  - generic [ref=e109]: $79.92
                  - link "ADD TO CART" [ref=e112] [cursor=pointer]:
                    - /url: https://academybugs.com/my-cart/?ec_action=addtocart&model_number=3481370
                  - text:  
              - listitem [ref=e113]:
                - generic [ref=e114]:
                  - generic [ref=e115]:
                    - link [ref=e116] [cursor=pointer]:
                      - /url: https://academybugs.com/store/faint-washed-denim-blue-jeans/
                    - img "Faint Washed Denim Blue Jeans" [ref=e119] [cursor=pointer]
                  - heading [level=3] [ref=e120]:
                    - link "Faint Washed Denim Blue Jeans" [ref=e121] [cursor=pointer]:
                      - /url: https://academybugs.com/store/faint-washed-denim-blue-jeans/
                  - generic [ref=e122]: $117.00
                  - link "ADD TO CART" [ref=e125] [cursor=pointer]:
                    - /url: https://academybugs.com/my-cart/?ec_action=addtocart&model_number=4681370
                  - text:  
              - listitem [ref=e126]:
                - generic [ref=e127]:
                  - generic [ref=e128]:
                    - link [ref=e129] [cursor=pointer]:
                      - /url: https://academybugs.com/store/dark-blue-denim-jeans/
                    - img "Dark Blue Denim Jeans" [ref=e132] [cursor=pointer]
                  - heading [level=3] [ref=e133]:
                    - link "Dark Blue Denim Jeans" [ref=e134] [cursor=pointer]:
                      - /url: https://academybugs.com/store/dark-blue-denim-jeans/
                  - link "Login for Pricing" [ref=e137] [cursor=pointer]:
                    - /url: https://academybugs.com/account/
                  - text:  
              - listitem [ref=e138]:
                - generic [ref=e139]:
                  - generic [ref=e140]:
                    - link [ref=e141] [cursor=pointer]:
                      - /url: https://academybugs.com/store/boho-bangle-bracelet/
                    - img "Boho Bangle Bracelet" [ref=e144] [cursor=pointer]
                  - heading [level=3] [ref=e145]:
                    - link "Boho Bangle Bracelet" [ref=e146] [cursor=pointer]:
                      - /url: https://academybugs.com/store/boho-bangle-bracelet/
                  - generic [ref=e147]: $185.00
                  - link "ADD TO CART" [ref=e150] [cursor=pointer]:
                    - /url: https://academybugs.com/my-cart/?ec_action=addtocart&model_number=3681370
                  - text:  
              - listitem [ref=e151]:
                - generic [ref=e152]:
                  - generic [ref=e153]:
                    - link [ref=e154] [cursor=pointer]:
                      - /url: https://academybugs.com/store/heart-bracelet/
                    - img "Silver Heart Bracelet" [ref=e157] [cursor=pointer]
                  - heading [level=3] [ref=e158]:
                    - link "Silver Heart Bracelet" [ref=e159] [cursor=pointer]:
                      - /url: https://academybugs.com/store/heart-bracelet/
                  - generic [ref=e160]: $275.00
                  - link "ADD TO CART" [ref=e163] [cursor=pointer]:
                    - /url: https://academybugs.com/my-cart/?ec_action=addtocart&model_number=3181370
                  - text:  
              - listitem [ref=e164]:
                - generic [ref=e165]:
                  - generic [ref=e166]:
                    - link [ref=e167] [cursor=pointer]:
                      - /url: https://academybugs.com/store/buddha-bracelet/
                    - img "Buddha Bracelet" [ref=e170] [cursor=pointer]
                  - heading [level=3] [ref=e171]:
                    - link "Buddha Bracelet" [ref=e172] [cursor=pointer]:
                      - /url: https://academybugs.com/store/buddha-bracelet/
                  - generic [ref=e173]: $107.00
                  - link "ADD TO CART" [ref=e176] [cursor=pointer]:
                    - /url: https://academybugs.com/my-cart/?ec_action=addtocart&model_number=4081370
                  - text:  
              - listitem [ref=e177]:
                - generic [ref=e178]:
                  - generic [ref=e179]:
                    - link [ref=e180] [cursor=pointer]:
                      - /url: https://academybugs.com/store/light-brown-purse/
                    - img "Light Brown Purse" [ref=e183] [cursor=pointer]
                  - heading [level=3] [ref=e184]:
                    - link "Light Brown Purse" [ref=e185] [cursor=pointer]:
                      - /url: https://academybugs.com/store/light-brown-purse/
                  - generic [ref=e186]: $77.04
                  - link "ADD TO CART" [ref=e189] [cursor=pointer]:
                    - /url: https://academybugs.com/my-cart/?ec_action=addtocart&model_number=4981370
                  - text:  
              - listitem [ref=e190]:
                - generic [ref=e191]:
                  - generic [ref=e192]:
                    - link [ref=e193] [cursor=pointer]:
                      - /url: https://academybugs.com/store/black-over-the-shoulder-handbag/
                    - img "Black Over-the-shoulder Handbag" [ref=e196] [cursor=pointer]
                  - heading [level=3] [ref=e197]:
                    - link "Black Over-the-shoulder Handbag" [ref=e198] [cursor=pointer]:
                      - /url: https://academybugs.com/store/black-over-the-shoulder-handbag/
                  - generic [ref=e199]: $478.00
                  - link "ADD TO CART" [ref=e202] [cursor=pointer]:
                    - /url: https://academybugs.com/my-cart/?ec_action=addtocart&model_number=3281370
                  - text:  
              - listitem [ref=e203]:
                - generic [ref=e204]:
                  - generic [ref=e205]:
                    - link [ref=e206] [cursor=pointer]:
                      - /url: https://academybugs.com/store/bright-red-bag/
                    - img "Bright Red Bag" [ref=e209] [cursor=pointer]
                  - heading [level=3] [ref=e210]:
                    - link "Bright Red Bag" [ref=e211] [cursor=pointer]:
                      - /url: https://academybugs.com/store/bright-red-bag/
                  - generic [ref=e212]: $92.94
                  - link "ADD TO CART" [ref=e215] [cursor=pointer]:
                    - /url: https://academybugs.com/my-cart/?ec_action=addtocart&model_number=3881370
                  - text:  
              - listitem [ref=e216]:
                - generic [ref=e217]:
                  - generic [ref=e218]:
                    - link [ref=e219] [cursor=pointer]:
                      - /url: https://academybugs.com/store/white-underground-tshirt/
                    - img "White Underground Tshirt" [ref=e222] [cursor=pointer]
                  - heading [level=3] [ref=e223]:
                    - link "White Underground Tshirt" [ref=e224] [cursor=pointer]:
                      - /url: https://academybugs.com/store/white-underground-tshirt/
                  - generic [ref=e225]: $136.12
                  - link "ADD TO CART" [ref=e228] [cursor=pointer]:
                    - /url: https://academybugs.com/my-cart/?ec_action=addtocart&model_number=5081370
                  - text:  
              - listitem [ref=e229]:
                - generic [ref=e230]:
                  - generic [ref=e231]:
                    - link [ref=e232] [cursor=pointer]:
                      - /url: https://academybugs.com/store/bright-gold-purse-with-chain/
                    - img "Bright Gold Purse With Chain" [ref=e235] [cursor=pointer]
                  - heading [level=3] [ref=e236]:
                    - link "Bright Gold Purse With Chain" [ref=e237] [cursor=pointer]:
                      - /url: https://academybugs.com/store/bright-gold-purse-with-chain/
                  - generic [ref=e238]: $124.53
                  - link "ADD TO CART" [ref=e241] [cursor=pointer]:
                    - /url: https://academybugs.com/my-cart/?ec_action=addtocart&model_number=3781370
                  - text:  
              - listitem [ref=e242]:
                - generic [ref=e243]:
                  - generic [ref=e244]:
                    - link [ref=e245] [cursor=pointer]:
                      - /url: https://academybugs.com/store/fall-coat/
                    - img "Fall Coat" [ref=e248] [cursor=pointer]
                  - heading [level=3] [ref=e249]:
                    - link "Fall Coat" [ref=e250] [cursor=pointer]:
                      - /url: https://academybugs.com/store/fall-coat/
                  - generic [ref=e251]: $189.95 $169.95
                  - link "Select Options" [ref=e254] [cursor=pointer]:
                    - /url: https://academybugs.com/store/fall-coat/
                  - text:  
              - listitem [ref=e255]:
                - generic [ref=e256]:
                  - generic [ref=e257]:
                    - link [ref=e258] [cursor=pointer]:
                      - /url: https://academybugs.com/store/denim-coat/
                    - img "Denim Coat" [ref=e261] [cursor=pointer]
                  - heading [level=3] [ref=e262]:
                    - link "Denim Coat" [ref=e263] [cursor=pointer]:
                      - /url: https://academybugs.com/store/denim-coat/
                  - generic [ref=e264]: $149.95 $109.95
                  - link "Select Options" [ref=e267] [cursor=pointer]:
                    - /url: https://academybugs.com/store/denim-coat/
                  - text:  
              - listitem [ref=e268]:
                - generic [ref=e269]:
                  - generic [ref=e270]:
                    - link [ref=e271] [cursor=pointer]:
                      - /url: https://academybugs.com/store/professional-suit/
                    - img "Professional Suit" [ref=e274] [cursor=pointer]
                  - heading [level=3] [ref=e275]:
                    - link "Professional Suit" [ref=e276] [cursor=pointer]:
                      - /url: https://academybugs.com/store/professional-suit/
                  - generic [ref=e277]: $279.95 $239.95
                  - link "Select Options" [ref=e280] [cursor=pointer]:
                    - /url: https://academybugs.com/store/professional-suit/
                  - text:  
          - paragraph
    - contentinfo [ref=e281]:
      - generic [ref=e282]:
        - generic [ref=e285]:
          - generic:
            - list:
              - listitem [ref=e286]:
                - link [ref=e287] [cursor=pointer]:
                  - /url: https://www.utest.com/academy
                  - img "uTest" [ref=e288]
              - listitem [ref=e289]:
                - link "Terms & Conditions" [ref=e290] [cursor=pointer]:
                  - /url: https://www.utest.com/terms-and-conditions
              - listitem [ref=e291]:
                - link "Privacy Policy" [ref=e292] [cursor=pointer]:
                  - /url: https://www.utest.com/privacy-policy
        - text:      
  - link "" [ref=e295] [cursor=pointer]:
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
> 15 |     await expect(contentbug.productCheckOutButton).toBeVisible();
     |                                                    ^ Error: toBeVisible can be only used with Locator object, was called with undefined
  16 | 
  17 |     await contentbug.productCheckOutButton.click();
  18 | 
  19 |     await expect(bugApp.page).toHaveURL('/my-cart/');
  20 | 
  21 |     await contentbug.emptyCart();
  22 | 
  23 |     await expect(contentbug.emptyCartButton).toBeVisible();
  24 | 
  25 |     await expect(contentbug.emptyCartButton).toHaveText('RETURN TO STOR      E');
  26 | });
  27 | 
```