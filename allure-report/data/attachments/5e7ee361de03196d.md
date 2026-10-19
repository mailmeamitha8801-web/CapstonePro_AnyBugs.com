# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\visualBugCollection.spec.js >> Visual Bugs-Broken Image Implanted Bug01
- Location: tests\visualBugCollection.spec.js:5:1

# Error details

```
Error: page.goto: url: expected string, got object
```

```
Error: locator.scrollIntoViewIfNeeded: Test ended.
Call log:
  - waiting for locator('img[alt="What happens when your pension fund runs out of money"]')

```

# Test source

```ts
  1  | const { test, expect } = require('../fixtures/bug.fixture');
  2  | const { VisualBugRepro } = require("../pages/bugs/VisualBugRepro");
  3  | 
  4  | 
  5  | test('Visual Bugs-Broken Image Implanted Bug01', async({bugApp})=>{
  6  | 
  7  |     const visualbug = new VisualBugRepro(bugApp.page);
  8  | 
  9  |         visualbug.loadArticlePage();
> 10 |         await visualbug.postImage.scrollIntoViewIfNeeded();
     |                                   ^ Error: locator.scrollIntoViewIfNeeded: Test ended.
  11 |         await expect(visualbug.postImage).toBeAttached();
  12 | 
  13 |         const imageLoaded = await visualbug.postImage.evaluate(img => img.complete && img.naturalWidth > 0);
  14 |         expect(imageLoaded).toBe(false);
  15 | 
  16 | });
  17 | 
  18 | 
```