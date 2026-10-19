const { test, expect } = require('../fixtures/bug.fixture');
const { VisualBugRepro } = require("../pages/bugs/VisualBugRepro");


test('Visual Bugs-Broken Image Implanted Bug01', async({bugApp})=>{

    const visualbug = new VisualBugRepro(bugApp.page);

        await visualbug.loadArticlePage();
        await visualbug.postImage.scrollIntoViewIfNeeded();
        await expect(visualbug.postImage).toBeAttached();

        const imageLoaded = await visualbug.postImage.evaluate(img => img.complete && img.naturalWidth > 0);
        expect(imageLoaded).toBe(false);

});

