const {test, expect}=require("@playwright/test");
const { ListProducts } = require("../pages/ListProducts");
const { ProductDetailPage } = require("../pages/ProductDetailPage");

test('Validating End to End Happy Path WorkFlow', async({page})=>{

    const product=new ListProducts(page);
    const proddetail=new ProductDetailPage(page);
    await product.prdctsListView();
    //assertion for validating the user is redirected in the correct page
    await expect (page).toHaveURL(/find-bugs/);
    await product.getProduct();
    console.log("The user is now in Product List View ")
    //assertion to confirm the user is in the required product detail page
    await expect (page).toHaveURL(/light-brown-purse/);
    console.log("The user is now in the Brown Purse product page....!!!");
    await proddetail.prodImageVisible();


        
});