
class ContentBugRepro {

    constructor(page) {
        this.page = page;

        this.bugProduct = page.locator('#ec_store_product_list .ec_product_li').first();

        this.productCartButton = this.bugProduct.getByRole('link', {name: 'ADD TO CART'}).first();

        this.productCheckOutButton = this.bugProduct.getByRole('link', {name:'CHECKOUT NOW'}).first();

        this.productDeleteButton= this.page.locator('.ec_cartitem_delete');

        this.emptyCartButton= this.page.locator('a.ec_cart_empty_button.academy-bug');
       
    }

    async instantAddToCart() {

        await this.productCartButton.click();

    }

    async instantCheckOut() { 

        await this.productCheckOutButton.click();
        
    }

    async emptyCart(){

      await this.productDeleteButton.click();

    }

    async getEmptyCartButtonText(){
   
       return await this.emptyCartButton.innerText();

    }

};

module.exports = { ContentBugRepro };
