# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\crashBugCollection.spec.js >> Crash Bug - PDP unresponsive after currency change
- Location: tests\crashBugCollection.spec.js:5:1

# Error details

```
Error: expect(received).toBeGreaterThanOrEqual(expected)

Expected: >= 4000
Received:    106
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
              - img "Flamingo Tshirt" [ref=f1e43] [cursor=pointer]
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
                  - heading "Flamingo Tshirt" [level=1] [ref=f1e49]
                  - generic [ref=f1e51]: $15.14
                  - generic [ref=f1e52]: "Model Number: 4881370"
                  - generic [ref=f1e53] [cursor=pointer]: Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit sed.
                  - generic [ref=f1e55]:
                    - generic [ref=f1e56]:
                      - button "-" [ref=f1e57] [cursor=pointer]
                      - spinbutton [ref=f1e58]: "1"
                      - button "+" [ref=f1e59] [cursor=pointer]
                    - button "ADD TO CART" [ref=f1e61] [cursor=pointer]
                - generic [ref=f1e62]:
                  - text: "Manufacturer:"
                  - link "HDX" [ref=f1e63] [cursor=pointer]:
                    - /url: https://academybugs.com/stored/extra/hdx/
                - generic [ref=f1e64]:
                  - link [ref=f1e66] [cursor=pointer]:
                    - /url: https://www.facebook.com/sharer/sharer.php?p[url]=https://academybugs.com/store/flamingo-tshirt/&p[images][o]=https://academybugs.com/wp-content/uploads/2020/10/flamingo-tshirt-compressed.jpg&p[title]=Flamingo+Tshirt
                    - img "Facebook" [ref=f1e67]
                  - link [ref=f1e69] [cursor=pointer]:
                    - /url: https://twitter.com/intent/tweet?original_referer=https://academybugs.com/store/flamingo-tshirt/&source=tweetbutton&text=Flamingo+Tshirt&url=https://academybugs.com/store/flamingo-tshirt/
                    - img "X" [ref=f1e70]
                  - link [ref=f1e72] [cursor=pointer]:
                    - /url: "mailto:?subject=Flamingo Tshirt&body=Link for Product: https://academybugs.com/store/flamingo-tshirt/"
                    - img "Email" [ref=f1e73]
                  - link [ref=f1e75] [cursor=pointer]:
                    - /url: https://pinterest.com/pin/create/button/?media=https%3A%2F%2Facademybugs.com%2Fwp-content%2Fuploads%2F2020%2F10%2Fflamingo-tshirt-compressed.jpg&description=Flamingo+Tshirt&url=https%3A%2F%2Facademybugs.com%2Fstore%2Fflamingo-tshirt%2F
                    - img "Pinterest" [ref=f1e76]
                  - link [ref=f1e78] [cursor=pointer]:
                    - /url: https://www.linkedin.com/shareArticle?mini=true&url=https://academybugs.com/store/flamingo-tshirt/
                    - img "LinkedIn" [ref=f1e79]
                  - link [ref=f1e81] [cursor=pointer]:
                    - /url: https://academybugs.com/myspace/
                    - img "MySpace" [ref=f1e82]
            - generic [ref=f1e83]:
              - list [ref=f1e84]:
                - listitem [ref=f1e85] [cursor=pointer]: Description
              - paragraph [ref=f1e88] [cursor=pointer]: Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit sed.
        - generic [ref=f1e90]:
          - heading "Leave a Reply" [level=3] [ref=f1e91]
          - generic [ref=f1e92]:
            - paragraph [ref=f1e93]:
              - text: Your email address will not be published.
              - generic [ref=f1e94]: Required fields are marked *
            - paragraph [ref=f1e95]:
              - textbox "Comment" [ref=f1e96]
            - generic:
              - paragraph [ref=f1e97]:
                - textbox "Name*" [ref=f1e98]
              - paragraph [ref=f1e99]:
                - textbox "Email*" [ref=f1e100]
              - paragraph [ref=f1e101]:
                - textbox "Website" [ref=f1e102]
            - paragraph [ref=f1e103]:
              - button "Post Comment" [ref=f1e104] [cursor=pointer]
      - generic [ref=f1e105]:
        - heading "Select a Currency" [level=4] [ref=f1e106]
        - combobox [ref=f1e108] [cursor=pointer]:
          - option "USD"
          - option "EUR" [selected]
          - option "GBP"
          - option "JPY"
        - heading "Product Search" [level=4] [ref=f1e109]
        - generic [ref=f1e111]:
          - combobox [ref=f1e112]
          - button "Search" [ref=f1e113] [cursor=pointer]
        - heading "Hot Item" [level=4] [ref=f1e114]
        - generic [ref=f1e115]:
          - link [ref=f1e117] [cursor=pointer]:
            - /url: https://academybugs.com/anchor-bracelet
          - link "Silver Heart Bracelet" [ref=f1e120] [cursor=pointer]:
            - /url: https://academybugs.com/store/heart-bracelet/
          - generic [ref=f1e121]: $275.00
        - heading "Store Menu" [level=4] [ref=f1e122]
        - list [ref=f1e124]:
          - listitem [ref=f1e125]:
            - link "All Items" [ref=f1e126] [cursor=pointer]:
              - /url: https://academybugs.com/store/all-items/
          - listitem [ref=f1e127]:
            - link "Accessories [+]" [ref=f1e128] [cursor=pointer]:
              - /url: "#"
              - text: Accessories
              - generic [ref=f1e129]: "[+]"
          - listitem [ref=f1e130]:
            - link "Fashion Type [+]" [ref=f1e131] [cursor=pointer]:
              - /url: "#"
              - text: Fashion Type
              - generic [ref=f1e132]: "[+]"
          - listitem [ref=f1e133]:
            - link "Women's Pants" [ref=f1e134] [cursor=pointer]:
              - /url: https://academybugs.com/store/womens-pants/
        - heading "Filter by Price" [level=4] [ref=f1e135]
        - generic [ref=f1e136]:
          - link "$15.00 - $19.99 (1)" [ref=f1e138] [cursor=pointer]:
            - /url: https://academybugs.com/store/flamingo-tshirt/?&perpage=25&pricepoint=7
          - link "$25.00 - $49.99 (2)" [ref=f1e140] [cursor=pointer]:
            - /url: https://academybugs.com/store/flamingo-tshirt/?&perpage=25&pricepoint=2
          - link "$50.00 - $99.99 (3)" [ref=f1e142] [cursor=pointer]:
            - /url: https://academybugs.com/store/flamingo-tshirt/?&perpage=25&pricepoint=3
          - link "$100.00 - $299.99 (11)" [ref=f1e144] [cursor=pointer]:
            - /url: https://academybugs.com/store/flamingo-tshirt/?&perpage=25&pricepoint=4
          - link "Greater Than $299.99 (1)" [ref=f1e146] [cursor=pointer]:
            - /url: https://academybugs.com/store/flamingo-tshirt/?&perpage=25&pricepoint=5
        - heading "Shopping Cart" [level=4] [ref=f1e147]
        - link "Shopping Cart (0)" [ref=f1e149] [cursor=pointer]:
          - /url: "#"
        - heading "Your Account" [level=4] [ref=f1e151]
        - generic:
          - generic [ref=f1e152]:
            - generic [ref=f1e153]: Email Address*
            - textbox [ref=f1e154]
          - generic [ref=f1e155]:
            - generic [ref=f1e156]: Password*
            - textbox [ref=f1e157]
          - link "Sign Up" [ref=f1e159] [cursor=pointer]:
            - /url: https://academybugs.com/account/?ec_page=register
          - button "SIGN IN" [ref=f1e161] [cursor=pointer]
    - contentinfo [ref=f1e162]:
      - generic [ref=f1e163]:
        - generic [ref=f1e166]:
          - generic:
            - list:
              - listitem [ref=f1e167]:
                - link [ref=f1e168] [cursor=pointer]:
                  - /url: https://www.utest.com/academy
                  - img "uTest" [ref=f1e169]
              - listitem [ref=f1e170]:
                - link "Terms & Conditions" [ref=f1e171] [cursor=pointer]:
                  - /url: https://www.utest.com/terms-and-conditions
              - listitem [ref=f1e172]:
                - link "Privacy Policy" [ref=f1e173] [cursor=pointer]:
                  - /url: https://www.utest.com/privacy-policy
        - text:      
  - link "" [ref=f1e176] [cursor=pointer]:
    - /url: "#"
```

# Test source

```ts
  1  | 
  2  | const { test, expect } = require('../fixtures/bug.fixture');
  3  | const { CrashBugRepro } = require('../pages/bugs/CrashBugRepro');
  4  | 
  5  | test('Crash Bug - PDP unresponsive after currency change', async ({ bugApp }) => {
  6  |   const crashbug = new CrashBugRepro(bugApp.page);
  7  | 
  8  |   await bugApp.page.goto('/store/');
  9  |   await crashbug.openFirstProductDetailPage();
  10 | 
  11 |   // Schedule a timer immediately before changing currency
  12 |   await bugApp.page.evaluate(() => {
  13 |     window.timerStart = Date.now();
  14 |     window.timerDelay = new Promise(resolve => {
  15 |       setTimeout(() => resolve(Date.now() - window.timerStart), 100);
  16 |     });
  17 |   });
  18 | 
  19 |   await crashbug.changeCurrency('EUR');
  20 | 
  21 |   // Read the actual timer delay
  22 |   const timerDelay = await bugApp.page.evaluate(() => window.timerDelay);
  23 | 
  24 |   console.log(`JavaScript timer delay: ${timerDelay} ms`);
  25 | 
  26 |   // Expect a delay of at least 4 seconds to reproduce the bug
> 27 |   expect(timerDelay).toBeGreaterThanOrEqual(4000);
     |                      ^ Error: expect(received).toBeGreaterThanOrEqual(expected)
  28 | });
  29 | 
```