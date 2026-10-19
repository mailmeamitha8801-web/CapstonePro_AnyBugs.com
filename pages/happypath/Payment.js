class Payment{

    constructor(page)
    {
        this.page=page;
        this.payTypeText = page.getByText('Payment Method', {exact: true });
        this.payType= page.locator('#ec_payment_manual');
        this.orderPlace=page.locator('#ec_cart_submit_order');
        this.noticeModal = page.locator('#ec-testing-notice-modal');
        this.noticeHeading = this.noticeModal.locator('h3');
        this.noticeMessage = this.noticeModal.getByText('This storefront is for testing only. No real orders will be placed.',{ exact: true });
        this.closeButton = page.locator('#ec-testing-notice-close');

    }

    async submitOrder()
    {      
       await this.orderPlace.click();

    }

    async verifyTestingNotice() {
        
        await this.closeButton.click();      
    }
}

module.exports={Payment}