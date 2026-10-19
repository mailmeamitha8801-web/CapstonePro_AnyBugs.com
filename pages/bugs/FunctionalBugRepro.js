class FunctionalBugRepro {
    constructor(page, contactuser) {

        this.page = page;
        this.contactuser = contactuser;

        // Locators for Apply Link bug
        this.navigateButton = page.getByRole('link', { name: 'Apply now' });

        // Locators for Contact Us bug
        this.customerFirstName = page.getByPlaceholder('First Name');
        this.customerLastName = page.getByPlaceholder('Last Name');
        this.customerEmail = page.getByPlaceholder('Email');
        this.customerSubject = page.getByPlaceholder('Subject');
        this.customerMessage = page.getByPlaceholder('Message');
        this.sendMessage = page.getByRole('button', { name: 'Send' });
        this.errorMessage = page.locator('#wpforms-confirmation-1122 p');

        // Locators for Search Functionality bug
        this.bugPage = page.locator('a.example-tile-div').filter({ hasText: 'Search button leads to an error' });
        this.bugItem = page.locator('#popmake-4434');
        this.tutorialClose = this.page.locator('#TourTip0 .pum-close');
        this.searchProduct = page.locator('.example-5-search-bug');
        this.productDetailsLink = this.bugItem.getByText('Product Details Page');
        this.getProductTitle = page.locator('h1.ec_details_title').first();
        this.searchBoxInput = page.locator('.ec_search_input');
        this.enableSearch = page.getByRole('button', { name: 'Search' });

        this.searchResultPage = page.getByText( 'Oops! That page can’t be found.', { exact: true });
    }

    // Member function for Apply Link bug
    async applyNow() {
        await this.navigateButton.click();
    }

    // Member function for Contact Us bug
    async sendEnquiry(contactuser) {
        await this.customerFirstName.fill(contactuser.contactFormFName);
        await this.customerLastName.fill(contactuser.contactFormLName);
        await this.customerEmail.fill(contactuser.contactEmail);
        await this.customerSubject.fill(contactuser.ContactFormSubject);
        await this.customerMessage.fill(contactuser.contactFormMessage);
        await this.sendMessage.click();
    }

    // Member functions for Search bug actions
       async bugSearchKeyword() {
    await this.getProductTitle.waitFor({ state: 'visible' });

    const productTitle = await this.getProductTitle.textContent();
    this.searchKeyword = productTitle.trim().split(' ')[0];

    await this.searchBoxInput.fill(this.searchKeyword);
    await this.enableSearch.click();
}

async searchKeyWordFrame() {

    if (await this.tutorialClose.isVisible()) {
        await this.tutorialClose.click();
    }

    await this.bugPage.click();

    await this.bugItem.waitFor({ state: 'visible' });

    const [newPage] = await Promise.all([
        this.page.context().waitForEvent('page'),
        this.productDetailsLink.click()
    ]);

    await newPage.waitForLoadState('domcontentloaded');

    const productUrl = newPage.url();

    await this.page.goto(productUrl);

    await newPage.close();
}
};

module.exports = { FunctionalBugRepro };
