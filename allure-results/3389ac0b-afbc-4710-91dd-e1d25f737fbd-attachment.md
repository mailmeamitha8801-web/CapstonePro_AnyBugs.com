# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\endToEndClientApp.spec.js >> Validating End to End Happy Path WorkFlow
- Location: tests\endToEndClientApp.spec.js:13:1

# Error details

```
ReferenceError: productName is not defined
```

# Test source

```ts
  1   | const {test, expect}=require("@playwright/test");
  2   | const userdata= require('../testData/userdata.json')[0];
  3   | const { readExcelData } = require('../utils/excelReader');
  4   | const { ListProducts } = require("../pages/ListProducts");
  5   | const { ProductDetailPage } = require("../pages/ProductDetailPage");
  6   | const { MyCart } = require("../pages/MyCart");
  7   | const { CheckOut } = require("../pages/CheckOut");
  8   | const { Shipping } = require("../pages/Shipping");
  9   | const { Payment } = require("../pages/Payment");
  10  | const { generateRandomEmail } = require("../utils/randomData");
  11  | //console.log('Type:', typeof readExcelData);
  12  | 
  13  | test('Validating End to End Happy Path WorkFlow', async({page})=>{
  14  | 
  15  |     const product=new ListProducts(page);
> 16  |     const cart=new MyCart(page,productName);
      |                                ^ ReferenceError: productName is not defined
  17  |     const chkout=new CheckOut(page, userdata);
  18  |     const shipping=new Shipping(page);
  19  |     const payment=new Payment(page);
  20  |   
  21  |     const email = generateRandomEmail();   
  22  |     const productData=await readExcelData('C:/Users/ammu8/OneDrive/Desktop/capstoneProject.xlsx','Sheet1');
  23  |          for (const row of productData) {
  24  |              const productName = row.productName;
  25  |              console.log('Selected product:', productName);
  26  |              const proddetail = new ProductDetailPage(page, productName);    
  27  |              const cart = new MyCart(page, productName);
  28  | 
  29  |        //Navigating to the Product List page in AnyBugs.com site
  30  |        await product.prdctsListView();
  31  | 
  32  |     //assertion for validating the user is redirected in the correct page
  33  |        await expect (page).toHaveURL(/find-bugs/);
  34  |        await product.getProduct(productName);
  35  |        console.log("The user is now in Product List View ")
  36  |      
  37  | 
  38  |     // Validate the selected product image
  39  |          await expect(proddetail.prodMainImage).toBeVisible();
  40  |          console.log("The selected product image is displayed correctly...!!");
  41  | 
  42  |     //checking the product image visibility
  43  |        await expect(proddetail.prodMainImage).toBeVisible();  
  44  |        await proddetail.prodMainImage.click();
  45  |        await expect(proddetail.prodExpandImage).toBeVisible();
  46  |        await proddetail.prdImgClose.click();
  47  |        console.log("Product image displayed correctly...!!")
  48  | 
  49  |     //adding the item to the cart
  50  |        await cart.addtoCart();
  51  |        console.log("Product has been added to the cart...!!!")
  52  | 
  53  |     //assertion to validate the user navigated to the cart page
  54  |        await expect(page).toHaveURL('/my-cart/');
  55  | 
  56  |     
  57  |     /*await cart.productCartVisibility();
  58  |     console.log("Cart is updated with the added product...!!");*/
  59  | 
  60  |     //validating the cart updation against product addition
  61  |        const cartItem = await cart.productCartVisibility();
  62  |        await expect(cartItem).toContainText(productName);
  63  |        console.log("Cart is updated with the added product...!!");
  64  | 
  65  |     //fetching the cart details of the product added
  66  |         await cart.fetchCartTotal();
  67  | 
  68  |     //Assertions to validate the breadcrumbs in Checkout page
  69  |        await expect(chkout.breadcrumbs).toBeVisible();
  70  |        await expect(chkout.breadcrumbs).toContainText('SHOPPING CART');
  71  |        await expect(chkout.breadcrumbs).toContainText('CHECKOUT DETAILS');
  72  |        await expect(chkout.breadcrumbs).toContainText('SUBMIT PAYMENT');    
  73  |        console.log("The user is now at the checkout page....!!")
  74  | 
  75  |     //Account creation: form data fill from JSON file
  76  |        userdata.contactDetails.email = email;
  77  |        userdata.contactDetails.retypeEmail = email;   
  78  |        await chkout.accRegistration(userdata);
  79  |        console.log("User account has been created for the user:");
  80  | 
  81  |     //navigating to Shipping Page and related assertions
  82  |        await shipping.navigateToShipping();
  83  |        console.log("User is now in the Shipping Page...!!!:");   
  84  |     
  85  |     
  86  |     //Assertion to validate the default payment method is selected in the order
  87  |        await expect(payment.payTypeText).toHaveText('Payment Method');
  88  |        await expect(payment.payType).toBeChecked();
  89  | 
  90  |     //navigating to Order Submission 
  91  |         await payment.submitOrder();     
  92  |         console.log("The User is now in the Payment Page...!!!");
  93  |      
  94  |     // Assertions to validate the final popup to confirm the test scope is covered
  95  |          await expect(payment.noticeModal).toBeVisible();
  96  |          await expect(payment.noticeHeading).toHaveText('Testing site')
  97  |          await expect(payment.noticeMessage).toContainText('This storefront is for testing only. No real orders will be placed.');
  98  |          await expect(payment.closeButton).toBeVisible();
  99  |          await payment.verifyTestingNotice(); 
  100 |          await expect(payment.noticeModal).toBeHidden();            
  101 |     }
  102 | });
  103 | 
  104 | 
```