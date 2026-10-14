const {test, expect}=require("@playwright/test");
const userdata= require('../testData/userdata.json')[0];
const { readExcelData } = require('../utils/excelReader');
const { ListProducts } = require("../pages/ListProducts");
const { ProductDetailPage } = require("../pages/ProductDetailPage");
const { MyCart } = require("../pages/MyCart");
const { CheckOut } = require("../pages/CheckOut");
const { Shipping } = require("../pages/Shipping");
const { Payment } = require("../pages/Payment");
const { generateRandomEmail } = require("../utils/randomData");
//console.log('Type:', typeof readExcelData);

test('Validating End to End Happy Path WorkFlow', async({page})=>{

    const productData=await readExcelData('C:/Users/ammu8/OneDrive/Desktop/capstoneProject.xlsx','Sheet1');
    const productName = productData[0].productName;
    console.log('Selected product:', productName);
    const product=new ListProducts(page);
    const proddetail=new ProductDetailPage(page,productName);
    const cart=new MyCart(page,productName);
    const chkout=new CheckOut(page, userdata);
    const shipping=new Shipping(page);
    const payment=new Payment(page);
    const email = generateRandomEmail();

    await product.prdctsListView();

    //assertion for validating the user is redirected in the correct page
    await expect (page).toHaveURL(/find-bugs/);
    await product.getProduct(productName);
    console.log("The user is now in Product List View ")

    //assertion to confirm the user is in the required product detail page
    await expect (page).toHaveURL(/light-brown-purse/);
    console.log("The user is now in the Brown Purse product page....!!!");

    //checking the product image visibility
    await (proddetail).prodImageVisible();
    console.log("Product image displayed correctly...!!")

    //adding the item to the cart
    await cart.addtoCart();
    console.log("Product has been added to the cart...!!!")

    //assertion to validate the user navigated to the cart page
    await expect(page).toHaveURL('/my-cart/');

    //validating the cart updation against product addition
    await cart.productCartVisibility();
    console.log("Cart is updated with the added product...!!");

    //fetching the cart details of the product added
    await cart.fetchCartTotal();

    //Assertions to validate the breadcrumbs in Checkout page
    await expect(chkout.breadcrumbs).toBeVisible();
    await expect(chkout.breadcrumbs).toContainText('SHOPPING CART');
    await expect(chkout.breadcrumbs).toContainText('CHECKOUT DETAILS');
    await expect(chkout.breadcrumbs).toContainText('SUBMIT PAYMENT');    
    console.log("The user is now at the checkout page....!!")

    //Account creation: form data fill from JSON file
    userdata.contactDetails.email = email;
    userdata.contactDetails.retypeEmail = email;   
    await chkout.accRegistration(userdata);
    console.log("User account has been created for the user:");

    //navigating to Shipping Page and related assertions
    await shipping.navigateToShipping();
    console.log("User is now in the Shipping Page...!!!:");   
    //await expect(shipping.shipText).toHaveText("Shipping Information");
    //await expect(shipping.shipText).toBeVisible();
   // Validate Shipping Information label
     //await expect(shipping.shippingInfo).toHaveText('Shipping Information');
    //await expect(shipping.optnBtn).toBeVisible();
    //await expect(shipping.optnBtn).toBeChecked();
    
    //Assertion to validate the default payment method is selected in the order
    await expect(payment.payTypeText).toHaveText('Payment Method');
    await expect(payment.payType).toBeChecked();

    //navigating to Order Submission 
     await payment.submitOrder();     
     console.log("The User is now in the Payment Page...!!!");
     
     // Assertions to validate the final popup to confirm the test scope is covered
        await expect(payment.noticeModal).toBeVisible();
        await expect(payment.noticeHeading).toHaveText('Testing site')
        await expect(payment.noticeMessage).toContainText('This storefront is for testing only. No real orders will be placed.');
        await expect(payment.closeButton).toBeVisible();
        await payment.verifyTestingNotice(); 
        await expect(payment.noticeModal).toBeHidden();            
      
});

