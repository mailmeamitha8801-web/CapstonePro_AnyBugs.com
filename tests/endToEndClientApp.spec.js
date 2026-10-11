const {test, expect}=require("@playwright/test");
const { ListProducts } = require("../pages/ListProducts");
const { ProductDetailPage } = require("../pages/ProductDetailPage");
const { AddToCart } = require("../pages/AddToCart");

test('Validating End to End Happy Path WorkFlow', async({page})=>{

    const product=new ListProducts(page);
    const proddetail=new ProductDetailPage(page);
    const cart=new AddToCart(page);
    await product.prdctsListView();
    //assertion for validating the user is redirected in the correct page
    await expect (page).toHaveURL(/find-bugs/);
    await product.getProduct();
    console.log("The user is now in Product List View ")
    //assertion to confirm the user is in the required product detail page
    await expect (page).toHaveURL(/light-brown-purse/);
    console.log("The user is now in the Brown Purse product page....!!!");
    //checking the product image visibility
    await (proddetail).prodImageVisible();
    console.log("Product image displayed correctly...!!")
    //adding the item to the cart
    await cart.addtoCart();
    console.log("Brown Purse has been added to the cart...!!!")
    //assertion to validate the user navigated to the cart page
    await expect(page).toHaveURL('/my-cart/');
    //validating the cart updation against product addition
    await cart.productCartVisibility();
    console.log("Cart is updated with the added product...!!");
    //fetching the cart details of the product added
    await cart.fetchCartTotal();

        
});