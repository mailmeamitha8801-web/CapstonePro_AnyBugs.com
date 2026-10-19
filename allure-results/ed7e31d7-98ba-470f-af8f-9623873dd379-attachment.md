# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\functionalBugCollection.spec.js >> Functional Bug- Contact US Form not working properly
- Location: tests\functionalBugCollection.spec.js:19:1

# Error details

```
TypeError: Cannot read properties of undefined (reading 'contactFormFName')
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
  1  | class FunctionalBugRepro{
  2  |   constructor(page, contactuser){
  3  | 
  4  |     this.page=page;
  5  |     this.contactuser=contactuser;
  6  | 
  7  |     this.navigateButton=page.getByRole('link',{'name' : 'Apply now'});
  8  | 
  9  |     this.customerFirstName=page.getByPlaceholder('First Name');
  10 |     this.customerLastName=page.getByPlaceholder('Last Name');
  11 |     this.customerEmail=page.getByPlaceholder('Email');
  12 |     this.customerSubject=page.getByPlaceholder('Subject');
  13 |     this.customerMessage=page.getByPlaceholder('Message');
  14 |     this.sendMessage=page.getByRole('button',{'name': 'Send'});
  15 |     this.errorMessage = this.page.locator('#wpforms-confirmation-1122 p');
  16 |     
  17 |   }
  18 | 
  19 |   async applyNow()
  20 |   {
  21 |     await this.navigateButton.click();
  22 |   }
  23 | 
  24 |   async sendEnquiry(contactuser)
  25 |   {
> 26 |     await this.customerFirstName.fill(contactuser.contactFormFName);
     |                                                   ^ TypeError: Cannot read properties of undefined (reading 'contactFormFName')
  27 |     await this.customerLastName.fill(contactuser.ontactFormLName);
  28 |     await this.customerEmail.fill(contactuser.contactEmail);
  29 |     await this.customerSubject.fill(contactuser.ContactFormSubject);
  30 |     await this.customerMessage.fill(contactuser.contactFormMessage);
  31 |     await this.sendMessage.click();
  32 |     
  33 |   }
  34 | 
  35 | };
  36 | module.exports = { FunctionalBugRepro };
```