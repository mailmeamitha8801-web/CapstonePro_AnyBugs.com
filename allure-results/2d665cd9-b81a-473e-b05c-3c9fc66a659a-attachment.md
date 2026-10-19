# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\functionalBugCollection.spec.js >> Functional Bug- Contact US Form not working properly
- Location: tests\functionalBugCollection.spec.js:19:1

# Error details

```
ReferenceError: sendEnquiry is not defined
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
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
      - generic [ref=e34]:
        - heading "Contact Us" [level=3] [ref=e35]
        - heading "If you have a question or concern, please fill out the form below with all relevant details and we will respond as soon as we can." [level=6] [ref=e36]
        - generic [ref=e38]:
          - textbox "First Name" [ref=e40]
          - textbox "Last Name" [ref=e42]
        - textbox "Email" [ref=e44]
        - textbox "Subject" [ref=e46]
        - textbox "Message" [ref=e48]
        - button "Send" [ref=e50] [cursor=pointer]
    - contentinfo [ref=e51]:
      - generic [ref=e52]:
        - generic [ref=e55]:
          - generic:
            - list:
              - listitem [ref=e56]:
                - link [ref=e57] [cursor=pointer]:
                  - /url: https://www.utest.com/academy
                  - img "uTest" [ref=e58]
              - listitem [ref=e59]:
                - link "Terms & Conditions" [ref=e60] [cursor=pointer]:
                  - /url: https://www.utest.com/terms-and-conditions
              - listitem [ref=e61]:
                - link "Privacy Policy" [ref=e62] [cursor=pointer]:
                  - /url: https://www.utest.com/privacy-policy
        - text:      
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
  21 |     const contactuser = require('../testData/contactUser.json');
  22 | 
  23 |     await bugApp.page.goto('/contact-us-form/');
  24 | 
> 25 |     await sendEnquiry();
     |     ^ ReferenceError: sendEnquiry is not defined
  26 |     
  27 |     await expect(this.errorMessage).toHaveText('Oops! Something went wrong.');
  28 | 
  29 |     console.log("Contact Form submission failed...!!")
  30 | 
  31 | });
  32 | 
  33 | 
  34 | 
```