class VisualBugRepro{

    constructor(page){
        this.page=page;

            this.postImage=page.locator('img[alt="What happens when your pension fund runs out of money"]');

    }

    async loadArticlePage()
    {
        this.page.goto('/articles/');
    }

};

module.exports={VisualBugRepro};