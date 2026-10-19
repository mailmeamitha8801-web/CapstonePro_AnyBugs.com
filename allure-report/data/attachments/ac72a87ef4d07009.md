# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\functionalBugCollection.spec.js >> Functional Bug- Search Functionality Implanted Bug
- Location: tests\functionalBugCollection.spec.js:35:1

# Error details

```
Test timeout of 40000ms exceeded.
```

```
Error: locator.textContent: Test timeout of 40000ms exceeded.
Call log:
  - waiting for locator('h1.ec_details_title')

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
    - generic [ref=e31]:
      - heading "Examples of Bugs" [level=3] [ref=e32]
      - heading "Discover some examples of real bugs and recreate them yourself." [level=6] [ref=e33]
      - generic [ref=e34]:
        - link " Social share buttons don't work Many websites have buttons for sharing information, but in this example those buttons don’t work." [ref=e35] [cursor=pointer]:
          - /url: "#"
          - generic [ref=e37]:
            - paragraph [ref=e38]:
              - generic [ref=e39]: 
            - heading "Social share buttons don't work" [level=5] [ref=e40]
            - paragraph [ref=e41]: Many websites have buttons for sharing information, but in this example those buttons don’t work.
        - link " Send button returns an error page Users should be able to send a message when clicking send, but in this example the button returns an error page." [ref=e42] [cursor=pointer]:
          - /url: "#"
          - generic [ref=e44]:
            - paragraph [ref=e45]:
              - generic [ref=e46]: 
            - heading "Send button returns an error page" [level=5] [ref=e47]
            - paragraph [ref=e48]: Users should be able to send a message when clicking send, but in this example the button returns an error page.
        - link " Video player doesn’t work Video players should quickly buffer and play video files, but in this example some videos can’t be played." [ref=e49] [cursor=pointer]:
          - /url: "#"
          - generic [ref=e51]:
            - paragraph [ref=e52]:
              - generic [ref=e53]: 
            - heading "Video player doesn’t work" [level=5] [ref=e54]
            - paragraph [ref=e55]: Video players should quickly buffer and play video files, but in this example some videos can’t be played.
        - link " Articles show an error page The articles should show appropriate content, but in this example clicking an article shows an error page." [ref=e56] [cursor=pointer]:
          - /url: "#"
          - generic [ref=e58]:
            - paragraph [ref=e59]:
              - generic [ref=e60]: 
            - heading "Articles show an error page" [level=5] [ref=e61]
            - paragraph [ref=e62]: The articles should show appropriate content, but in this example clicking an article shows an error page.
        - link " Search button leads to an error A search button should find appropriate results, but in this example clicking on it leads to an error page." [ref=e63] [cursor=pointer]:
          - /url: "#"
          - generic [ref=e65]:
            - paragraph [ref=e66]:
              - generic [ref=e67]: 
            - heading "Search button leads to an error" [level=5] [ref=e68]
            - paragraph [ref=e69]: A search button should find appropriate results, but in this example clicking on it leads to an error page.
        - link " Booking a table doesn't work The user should be able to book a table, but in this example the user cannot submit the booking form." [ref=e70] [cursor=pointer]:
          - /url: "#"
          - generic [ref=e72]:
            - paragraph [ref=e73]:
              - generic [ref=e74]: 
            - heading "Booking a table doesn't work" [level=5] [ref=e75]
            - paragraph [ref=e76]: The user should be able to book a table, but in this example the user cannot submit the booking form.
    - contentinfo [ref=e77]:
      - generic [ref=e78]:
        - generic [ref=e81]:
          - generic:
            - list:
              - listitem [ref=e82]:
                - link [ref=e83] [cursor=pointer]:
                  - /url: https://www.utest.com/academy
                  - img "uTest" [ref=e84]
              - listitem [ref=e85]:
                - link "Terms & Conditions" [ref=e86] [cursor=pointer]:
                  - /url: https://www.utest.com/terms-and-conditions
              - listitem [ref=e87]:
                - link "Privacy Policy" [ref=e88] [cursor=pointer]:
                  - /url: https://www.utest.com/privacy-policy
        - text:      
  - dialog [ref=e90] [cursor=pointer]:
    - generic [ref=e91]:
      - generic [ref=e92]:
        - heading "Search button leads to an error" [level=5] [ref=e93]
        - paragraph [ref=e94]: A search button should find appropriate results, but in this example clicking on it leads to an error page.
        - generic [ref=e95]:
          - separator [ref=e96]
          - generic [ref=e97]:
            - generic [ref=e98]:
              - heading "Severity" [level=6] [ref=e99]
              - paragraph [ref=e101]: High
            - generic [ref=e102]:
              - heading "Issue Type" [level=6] [ref=e103]
              - paragraph [ref=e105]: Functional
            - generic [ref=e106]:
              - heading "Frequency" [level=6] [ref=e107]
              - paragraph [ref=e109]: Every Time
            - generic [ref=e110]:
              - heading "Environment" [level=6] [ref=e111]
              - paragraph [ref=e113]: All Browsers
          - paragraph
          - generic [ref=e114]:
            - heading "Action Performed" [level=6] [ref=e115]
            - paragraph
          - paragraph
          - list [ref=e117]:
            - listitem [ref=e118]:
              - text: Open the
              - link "Product Details Page" [active] [ref=e119]:
                - /url: https://academybugs.com/store/dnk-yellow-shoes/?pid=4434
            - listitem [ref=e120]: On right side type the same product's name and hit "Search"
          - heading "Expected Result" [level=6] [ref=e122]
          - paragraph [ref=e124]: Appropriate results are found
          - heading "Actual Result" [level=6] [ref=e126]
          - paragraph [ref=e128]: Clicking on the 'Search' button leads to an error page
          - heading "Attachments" [level=6] [ref=e130]
          - paragraph
      - button "Close" [ref=e135]: ×
```

# Test source

```ts
  1  | class FunctionalBugRepro {
  2  |     constructor(page, contactuser) {
  3  | 
  4  |         this.page = page;
  5  |         this.contactuser = contactuser;
  6  | 
  7  |         // Locators for Apply Link bug
  8  |         this.navigateButton = page.getByRole('link', { name: 'Apply now' });
  9  | 
  10 |         // Locators for Contact Us bug
  11 |         this.customerFirstName = page.getByPlaceholder('First Name');
  12 |         this.customerLastName = page.getByPlaceholder('Last Name');
  13 |         this.customerEmail = page.getByPlaceholder('Email');
  14 |         this.customerSubject = page.getByPlaceholder('Subject');
  15 |         this.customerMessage = page.getByPlaceholder('Message');
  16 |         this.sendMessage = page.getByRole('button', { name: 'Send' });
  17 |         this.errorMessage = page.locator('#wpforms-confirmation-1122 p');
  18 | 
  19 |         // Locators for Search Functionality bug
  20 |         this.bugPage = page.locator('a.example-tile-div').filter({ hasText: 'Search button leads to an error' });
  21 |         this.bugItem = page.locator('#popmake-4434');
  22 |         this.searchProduct = page.locator('.example-5-search-bug');
  23 |         this.productDetailsLink = this.bugItem.getByText('Product Details Page');
  24 |         this.tutorialClose = this.page.locator('#TourTip0 .pum-close');
  25 |         this.getProductTitle = page.locator('h1.ec_details_title');
  26 |         this.searchBoxInput = page.locator('.ec_search_input');
  27 |         this.enableSearch = page.getByRole('button', { name: 'Search' });
  28 | 
  29 |         this.searchResultPage = page.getByText( 'Oops! That page can’t be found.', { exact: true });
  30 |     }
  31 | 
  32 |     // Member function for Apply Link bug
  33 |     async applyNow() {
  34 |         await this.navigateButton.click();
  35 |     }
  36 | 
  37 |     // Member function for Contact Us bug
  38 |     async sendEnquiry(contactuser) {
  39 |         await this.customerFirstName.fill(contactuser.contactFormFName);
  40 |         await this.customerLastName.fill(contactuser.contactFormLName);
  41 |         await this.customerEmail.fill(contactuser.contactEmail);
  42 |         await this.customerSubject.fill(contactuser.ContactFormSubject);
  43 |         await this.customerMessage.fill(contactuser.contactFormMessage);
  44 |         await this.sendMessage.click();
  45 |     }
  46 | 
  47 |     // Member functions for Search bug actions
  48 |        async bugSearchKeyword() {
> 49 |         const productTitle = await this.getProductTitle.textContent();
     |                                                         ^ Error: locator.textContent: Test timeout of 40000ms exceeded.
  50 | 
  51 |         this.searchKeyword = productTitle.trim().split(' ')[0];
  52 | 
  53 |         await this.searchBoxInput.fill(this.searchKeyword);
  54 |         await this.enableSearch.click();
  55 |     }
  56 | 
  57 | async searchKeyWordFrame() {
  58 | 
  59 |     // Wait for the tutorial close button to appear
  60 |     await this.tutorialClose.waitFor({state: 'visible',timeout: 10000});
  61 |     await this.tutorialClose.click();
  62 |     await this.bugPage.click();
  63 |     await this.bugItem.waitFor({ state: 'visible' });
  64 | }
  65 | };
  66 | 
  67 | module.exports = { FunctionalBugRepro };
  68 | 
```