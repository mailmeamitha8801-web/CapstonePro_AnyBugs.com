# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\functionalBugCollection.spec.js >> Functional Bug- Contact US Form not working properly
- Location: tests\functionalBugCollection.spec.js:19:1

# Error details

```
Error: expect(locator).toHaveText(expected) failed

Locator: locator('#wpforms-confirmation-1122 p')
Expected: "Oops! Something went wrong."
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toHaveText" locator('#wpforms-confirmation-1122 p') with timeout 5000ms
  - waiting for locator('#wpforms-confirmation-1122 p')

```

```yaml
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
  - heading "Contact Us" [level=3]
  - heading "If you have a question or concern, please fill out the form below with all relevant details and we will respond as soon as we can." [level=6]
  - textbox "First Name": Aneena
  - textbox "Last Name": Daniel
  - textbox "Email": test123@qaworld.com
  - textbox "Subject": AcademyBugs-Functional Bug
  - textbox "Message": This site was very useful for automation testing
  - button "Send"
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
> 29 |     await expect(functionalbug.errorMessage).toHaveText('Oops! Something went wrong.');
     |                                              ^ Error: expect(locator).toHaveText(expected) failed
  30 | 
  31 |     console.log("Contact Form submission failed...!!")
  32 | 
  33 | });
  34 | 
  35 | test('Functional Bug- Search Functionality Implanted Bug', async({bugApp})=>{
  36 | 
  37 |     const functionalbug= new FunctionalBugRepro(bugApp.page); 
  38 | 
  39 |     await bugApp.page.goto('/');
  40 | 
  41 |     await functionalbug.searchKeyWordFrame();
  42 | 
  43 |     await functionalbug.bugSearchKeyword();
  44 | 
  45 |     await expect (functionalbug.searchResultPage).toHaveText('Oops! That page can’t be found.');
  46 | 
  47 | 
  48 | });
  49 | 
  50 | 
  51 | 
  52 | 
  53 | 
  54 | 
  55 | 
```