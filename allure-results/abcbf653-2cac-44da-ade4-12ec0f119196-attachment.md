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
> 16  |     const proddetail=new ProductDetailPage(page,productName);
      |                                                 ^ ReferenceError: productName is not defined
  17  |     const cart=new MyCart(page,productName);
  18  |     const chkout=new CheckOut(page, userdata);
  19  |     const shipping=new Shipping(page);
  20  |     const payment=new Payment(page);
  21  |     const email = generateRandomEmail();
  22  | 
  23  |    
  24  |     const productData=await readExcelData('C:/Users/ammu8/OneDrive/Desktop/capstoneProject.xlsx','Sheet1');
  25  |        const prodct = new ListProducts(page);
  26  |        for (const row of productData) {
  27  |        const productName = row.productName;
  28  |        console.log('Selected product:', productName);
  29  | 
  30  |     //Navigating to the Product List page in AnyBugs.com site
  31  |        await product.prdctsListView();
  32  | 
  33  |     //assertion for validating the user is redirected in the correct page
  34  |        await expect (page).toHaveURL(/find-bugs/);
  35  | 
  36  |        await product.getProduct(productName);
  37  |        console.log("The user is now in Product List View ")
  38  | 
  39  |     // Validate the selected product image
  40  |          await expect(proddetail.prodMainImage).toBeVisible();
  41  |          console.log("The selected product image is displayed correctly...!!");
  42  | 
  43  |     //checking the product image visibility
  44  |        await expect(proddetail.prodMainImage).toBeVisible();  
  45  |        await proddetail.prodMainImage.click();
  46  |        await expect(proddetail.prodExpandImage).toBeVisible();
  47  |        await proddetail.prdImgClose.click();
  48  |        console.log("Product image displayed correctly...!!")
  49  | 
  50  |     //adding the item to the cart
  51  |        await cart.addtoCart();
  52  |        console.log("Product has been added to the cart...!!!")
  53  | 
  54  |     //assertion to validate the user navigated to the cart page
  55  |        await expect(page).toHaveURL('/my-cart/');
  56  | 
  57  |     
  58  |     /*await cart.productCartVisibility();
  59  |     console.log("Cart is updated with the added product...!!");*/
  60  | 
  61  |     //validating the cart updation against product addition
  62  |        const cartItem = await cart.productCartVisibility();
  63  |        await expect(cartItem).toContainText(productName);
  64  |        console.log("Cart is updated with the added product...!!");
  65  | 
  66  |     //fetching the cart details of the product added
  67  |         await cart.fetchCartTotal();
  68  | 
  69  |     //Assertions to validate the breadcrumbs in Checkout page
  70  |        await expect(chkout.breadcrumbs).toBeVisible();
  71  |        await expect(chkout.breadcrumbs).toContainText('SHOPPING CART');
  72  |        await expect(chkout.breadcrumbs).toContainText('CHECKOUT DETAILS');
  73  |        await expect(chkout.breadcrumbs).toContainText('SUBMIT PAYMENT');    
  74  |        console.log("The user is now at the checkout page....!!")
  75  | 
  76  |     //Account creation: form data fill from JSON file
  77  |        userdata.contactDetails.email = email;
  78  |        userdata.contactDetails.retypeEmail = email;   
  79  |        await chkout.accRegistration(userdata);
  80  |        console.log("User account has been created for the user:");
  81  | 
  82  |     //navigating to Shipping Page and related assertions
  83  |        await shipping.navigateToShipping();
  84  |        console.log("User is now in the Shipping Page...!!!:");   
  85  |     
  86  |     
  87  |     //Assertion to validate the default payment method is selected in the order
  88  |        await expect(payment.payTypeText).toHaveText('Payment Method');
  89  |        await expect(payment.payType).toBeChecked();
  90  | 
  91  |     //navigating to Order Submission 
  92  |         await payment.submitOrder();     
  93  |         console.log("The User is now in the Payment Page...!!!");
  94  |      
  95  |     // Assertions to validate the final popup to confirm the test scope is covered
  96  |          await expect(payment.noticeModal).toBeVisible();
  97  |          await expect(payment.noticeHeading).toHaveText('Testing site')
  98  |          await expect(payment.noticeMessage).toContainText('This storefront is for testing only. No real orders will be placed.');
  99  |          await expect(payment.closeButton).toBeVisible();
  100 |          await payment.verifyTestingNotice(); 
  101 |          await expect(payment.noticeModal).toBeHidden();            
  102 |     }
  103 | });
  104 | 
  105 | 
```