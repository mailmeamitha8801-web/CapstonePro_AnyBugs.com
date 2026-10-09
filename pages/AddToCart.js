class AddToCart{

    constructor(page){
        this.page=page;
        //declaring the Add To Cart button locator globally
        this.addcart= page.getByRole('button',{name:'ADD TO CART'});
    }

    // member function add the product into the cart
        async addtoCart()
        {
          await this.addcart.click();
        }
            
}
module.exports={AddToCart};