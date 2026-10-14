const { expect } = require("@playwright/test");

class MyCart{

    constructor(page,productName){
        this.page=page;
         this.productName = productName;
        //locator mapping for the Product quantity addition
        this.qty=page.locator('.ec_plus');

        //declaring the Add To Cart button locator globally
        this.addcart= page.getByRole('button',{name:'ADD TO CART'});

        //locator mapping of added cart item in the cart page 
        this.cartItem=page.locator('.ec_cartitem_title');

       //fetching the cart total of added product
        this.cartSubTotal=page.locator('#ec_cart_subtotal');
        this.shippingCharge=page.locator('#ec_cart_shipping');
        this.grandTotal=page.locator('#ec_cart_total');
        this.chekoutpge= page.locator('.ec_cart_button.ec_cart_button_checkout');

    };

    // member function add the product into the cart
        async addtoCart()
        {
          await this.qty.click();  
          await this.addcart.click();
        };

    //member function to check the cart with selected item
      async productCartVisibility()
      {
        await expect(this.cartItem).toContainText(this.productName);

      }

      //member function to fetch cart totals
      async fetchCartTotal()
      {
        this.prdprice=await this.cartSubTotal.innerText();
        console.log("The Cart Subtotal is:",this.prdprice);
        this.shipcharge=await this.shippingCharge.innerText();
        console.log("The Shipping charge is:", this.shipcharge);
        this.total=await this.grandTotal.innerText();
        console.log("The Grandtotal is :",this.total);    
        await this.chekoutpge.click();    

      }
                
}
module.exports={MyCart};