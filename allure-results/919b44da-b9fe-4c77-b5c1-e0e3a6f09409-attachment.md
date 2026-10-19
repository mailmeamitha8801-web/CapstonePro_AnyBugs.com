# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\functionalBugCollection.spec.js >> Functional Bug- Broken Links
- Location: tests\functionalBugCollection.spec.js:6:1

# Error details

```
TypeError: FunctionalBugRepro is not a constructor
```

# Test source

```ts
  1  | const { test, expect } = require("../fixtures/bug.fixture");
  2  | 
  3  | const { FunctionalBugRepro} = require("../pages/bugs/FunctionalBugRepro");
  4  | 
  5  | 
  6  | test('Functional Bug- Broken Links', async({bugApp})=>{
  7  | 
> 8  |  const functionalbug= new FunctionalBugRepro(bugApp.page);  
     |                       ^ TypeError: FunctionalBugRepro is not a constructor
  9  | 
  10 | await bugApp.goto('https://academybugs.com/opportunities-we-provide/');
  11 | 
  12 | await functionalbug.applyNow();
  13 | 
  14 | await expect (bugApp.page).toHaveURL('/opportunities-we-provide/#');
  15 | 
  16 | console.log("Apply Now Button is broken....!!!")
  17 | 
  18 | });
```