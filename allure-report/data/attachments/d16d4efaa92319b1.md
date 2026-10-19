# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\endToEndClientApp.spec.js >> Validating End to End Happy Path WorkFlow
- Location: tests\endToEndClientApp.spec.js:14:1

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('.ec_cartitem_title')
Expected substring: "Buddha Bracelet"
Error: strict mode violation: locator('.ec_cartitem_title') resolved to 2 elements:
    1) <a class="ec_cartitem_title" href="https://academybugs.com/store/buddha-bracelet/">Buddha Bracelet</a> aka getByRole('link', { name: 'Buddha Bracelet' })
    2) <a class="ec_cartitem_title" href="https://academybugs.com/store/light-brown-purse/">Light Brown Purse</a> aka getByRole('link', { name: 'Light Brown Purse' })

Call log:
  - Expect "toContainText" locator('.ec_cartitem_title') with timeout 5000ms
  - waiting for locator('.ec_cartitem_title')

```

# Page snapshot

```yaml
- generic [active] [ref=f8e1]:
  - dialog "cookieconsent" [ref=f8e2]:
    - generic [ref=f8e3]:
      - text: "We use cookies to optimize our website and our service:"
      - link "Cookie Policy" [ref=f8e4] [cursor=pointer]:
        - /url: https://academybugs.com/cookie-policy-eu/
    - generic [ref=f8e5]:
      - button "Functional only" [ref=f8e6] [cursor=pointer]
      - button "Accept cookies" [ref=f8e7] [cursor=pointer]
  - generic [ref=f8e8]:
    - link "Skip to content" [ref=f8e9] [cursor=pointer]:
      - /url: "#sq-content"
    - banner [ref=f8e10]:
      - generic [ref=f8e11]:
        - heading [level=3] [ref=f8e13]:
          - link "AcademyBugs.com" [ref=f8e14] [cursor=pointer]:
            - /url: https://academybugs.com/
        - navigation [ref=f8e15]:
          - list [ref=f8e17]:
            - listitem [ref=f8e18]:
              - link "Examples of Bugs" [ref=f8e19] [cursor=pointer]:
                - /url: https://academybugs.com/
            - listitem [ref=f8e20]:
              - link "Types of Bugs" [ref=f8e21] [cursor=pointer]:
                - /url: https://academybugs.com/types/
            - listitem [ref=f8e22]:
              - link "Find Bugs" [ref=f8e23] [cursor=pointer]:
                - /url: https://academybugs.com/find-bugs/
            - listitem [ref=f8e24]:
              - link "Report Bugs" [ref=f8e25] [cursor=pointer]:
                - /url: https://academybugs.com/report-bugs/
            - listitem [ref=f8e26]:
              - link "" [ref=f8e27] [cursor=pointer]:
                - /url: "#"
    - generic [ref=f8e30]:
      - main [ref=f8e32]:
        - article [ref=f8e33]:
          - generic [ref=f8e34]:
            - generic:
              - text: 
              - generic [ref=f8e35]:
                - generic [ref=f8e36]: SHOPPING CART
                - generic [ref=f8e37]: 
                - generic [ref=f8e38]: CHECKOUT DETAILS
                - generic [ref=f8e39]: 
                - generic [ref=f8e40]: SUBMIT PAYMENT
              - table [ref=f8e42]:
                - rowgroup [ref=f8e43]:
                  - row [ref=f8e44]:
                    - columnheader "Product" [ref=f8e45]
                    - columnheader "Price" [ref=f8e46]
                    - columnheader "Quantity" [ref=f8e47]
                    - columnheader "Total" [ref=f8e48]
                - rowgroup [ref=f8e49]:
                  - row [ref=f8e50]:
                    - cell "" [ref=f8e51]: 
                    - cell [ref=f8e53]:
                      - img "Buddha Bracelet" [ref=f8e54]
                    - cell [ref=f8e55]:
                      - link "Buddha Bracelet" [ref=f8e56] [cursor=pointer]:
                        - /url: https://academybugs.com/store/buddha-bracelet/
                    - cell "$107.00" [ref=f8e57]
                    - cell [ref=f8e58]:
                      - text: 
                      - table [ref=f8e59]:
                        - rowgroup [ref=f8e60]:
                          - row [ref=f8e61]:
                            - cell [ref=f8e62]:
                              - button "-" [ref=f8e63] [cursor=pointer]
                            - cell [ref=f8e64]:
                              - spinbutton [ref=f8e65]: "2"
                            - cell [ref=f8e66]:
                              - button "+" [ref=f8e67] [cursor=pointer]
                          - row [ref=f8e68]:
                            - cell "UPDATE" [ref=f8e69]
                    - cell "$214.00" [ref=f8e71]
                  - row [ref=f8e72]:
                    - cell "" [ref=f8e73]: 
                    - cell [ref=f8e75]:
                      - img "Light Brown Purse" [ref=f8e76]
                    - cell [ref=f8e77]:
                      - link "Light Brown Purse" [ref=f8e78] [cursor=pointer]:
                        - /url: https://academybugs.com/store/light-brown-purse/
                    - cell "$77.04" [ref=f8e79]
                    - cell [ref=f8e80]:
                      - text: 
                      - table [ref=f8e81]:
                        - rowgroup [ref=f8e82]:
                          - row [ref=f8e83]:
                            - cell [ref=f8e84]:
                              - button "-" [ref=f8e85] [cursor=pointer]
                            - cell [ref=f8e86]:
                              - spinbutton [ref=f8e87]: "2"
                            - cell [ref=f8e88]:
                              - button "+" [ref=f8e89] [cursor=pointer]
                          - row [ref=f8e90]:
                            - cell "UPDATE" [ref=f8e91]
                    - cell "$154.08" [ref=f8e93]
              - generic [ref=f8e94]:
                - generic [ref=f8e95]: Cart Totals
                - generic [ref=f8e96]:
                  - generic [ref=f8e97]: Cart Subtotal
                  - generic [ref=f8e98]: $368.08
                - generic [ref=f8e99]:
                  - generic [ref=f8e100]: Shipping
                  - generic [ref=f8e101]: $7.99
                - generic [ref=f8e102]:
                  - generic [ref=f8e103]: Grand Total
                  - generic [ref=f8e104] [cursor=pointer]: $476.07
                - link "Checkout" [ref=f8e106] [cursor=pointer]:
                  - /url: https://academybugs.com/my-cart/?ec_page=checkout_info
                - link "Continue Shopping" [ref=f8e108] [cursor=pointer]:
                  - /url: https://academybugs.com/store/
                - generic [ref=f8e109]: Coupon
                - textbox "Enter Coupon Code" [ref=f8e111]
                - generic [ref=f8e112]: Apply Coupon
                - generic [ref=f8e114]: Gift Card
                - textbox "Enter Gift Card" [ref=f8e116]
                - generic [ref=f8e117]: Redeem Gift Card
      - generic [ref=f8e119]:
        - heading "Select a Currency" [level=4] [ref=f8e120]
        - combobox [ref=f8e122] [cursor=pointer]:
          - option "USD" [selected]
          - option "EUR"
          - option "GBP"
          - option "JPY"
        - heading "Product Search" [level=4] [ref=f8e123]
        - generic [ref=f8e125]:
          - combobox [ref=f8e126]
          - button "Search" [ref=f8e127] [cursor=pointer]
        - heading "Hot Item" [level=4] [ref=f8e128]
        - generic [ref=f8e129]:
          - link [ref=f8e131] [cursor=pointer]:
            - /url: https://academybugs.com/anchor-bracelet
          - link "Silver Heart Bracelet" [ref=f8e134] [cursor=pointer]:
            - /url: https://academybugs.com/store/heart-bracelet/
          - generic [ref=f8e135]: $275.00
        - heading "Store Menu" [level=4] [ref=f8e136]
        - list [ref=f8e138]:
          - listitem [ref=f8e139]:
            - link "All Items" [ref=f8e140] [cursor=pointer]:
              - /url: https://academybugs.com/store/all-items/
          - listitem [ref=f8e141]:
            - link "Accessories [+]" [ref=f8e142] [cursor=pointer]:
              - /url: "#"
              - text: Accessories
              - generic [ref=f8e143]: "[+]"
          - listitem [ref=f8e144]:
            - link "Fashion Type [+]" [ref=f8e145] [cursor=pointer]:
              - /url: "#"
              - text: Fashion Type
              - generic [ref=f8e146]: "[+]"
          - listitem [ref=f8e147]:
            - link "Women's Pants" [ref=f8e148] [cursor=pointer]:
              - /url: https://academybugs.com/store/womens-pants/
        - heading "Filter by Price" [level=4] [ref=f8e149]
        - generic [ref=f8e150]:
          - link "$15.00 - $19.99 (1)" [ref=f8e152] [cursor=pointer]:
            - /url: https://academybugs.com/my-cart/?&perpage=25&pricepoint=7
          - link "$25.00 - $49.99 (2)" [ref=f8e154] [cursor=pointer]:
            - /url: https://academybugs.com/my-cart/?&perpage=25&pricepoint=2
          - link "$50.00 - $99.99 (3)" [ref=f8e156] [cursor=pointer]:
            - /url: https://academybugs.com/my-cart/?&perpage=25&pricepoint=3
          - link "$100.00 - $299.99 (11)" [ref=f8e158] [cursor=pointer]:
            - /url: https://academybugs.com/my-cart/?&perpage=25&pricepoint=4
          - link "Greater Than $299.99 (1)" [ref=f8e160] [cursor=pointer]:
            - /url: https://academybugs.com/my-cart/?&perpage=25&pricepoint=5
        - heading "Shopping Cart" [level=4] [ref=f8e161]
        - link "Shopping Cart (4)" [ref=f8e163] [cursor=pointer]:
          - /url: "#"
        - heading "Your Account" [level=4] [ref=f8e165]
        - strong [ref=f8e166]: Hello, Meena
        - link "Dashboard" [ref=f8e167] [cursor=pointer]:
          - /url: https://academybugs.com/account/
        - link "Order History" [ref=f8e168] [cursor=pointer]:
          - /url: https://academybugs.com/account/?ec_page=orders
        - link "Billing Information" [ref=f8e169] [cursor=pointer]:
          - /url: https://academybugs.com/account/?ec_page=billing_information
        - link "Shipping Information" [ref=f8e170] [cursor=pointer]:
          - /url: https://academybugs.com/account/?ec_page=shipping_information
        - link "Change Password" [ref=f8e171] [cursor=pointer]:
          - /url: https://academybugs.com/account/?ec_page=password
        - link "Sign Out" [ref=f8e172] [cursor=pointer]:
          - /url: https://academybugs.com/account/?ec_page=logout
    - contentinfo [ref=f8e173]:
      - generic [ref=f8e174]:
        - generic [ref=f8e177]:
          - generic:
            - list:
              - listitem [ref=f8e178]:
                - link [ref=f8e179] [cursor=pointer]:
                  - /url: https://www.utest.com/academy
                  - img "uTest" [ref=f8e180]
              - listitem [ref=f8e181]:
                - link "Terms & Conditions" [ref=f8e182] [cursor=pointer]:
                  - /url: https://www.utest.com/terms-and-conditions
              - listitem [ref=f8e183]:
                - link "Privacy Policy" [ref=f8e184] [cursor=pointer]:
                  - /url: https://www.utest.com/privacy-policy
        - text:      
  - link "" [ref=f8e187] [cursor=pointer]:
    - /url: "#"
```

# Test source

```ts
  1   | 
  2   | const {test, expect}=require("@playwright/test");
  3   | const userdata= require('../testData/userdata.json')[0];
  4   | const { readExcelData } = require('../utils/excelReader');
  5   | const { ListProducts } = require("../pages/ListProducts");
  6   | const { ProductDetailPage } = require("../pages/ProductDetailPage");
  7   | const { MyCart } = require("../pages/MyCart");
  8   | const { CheckOut } = require("../pages/CheckOut");
  9   | const { Shipping } = require("../pages/Shipping");
  10  | const { Payment } = require("../pages/Payment");
  11  | const { generateRandomEmail } = require("../utils/randomData");
  12  | //console.log('Type:', typeof readExcelData);
  13  | 
  14  | test('Validating End to End Happy Path WorkFlow', async({page})=>{
  15  | 
  16  |     const product=new ListProducts(page);
  17  |     const chkout=new CheckOut(page, userdata);
  18  |     const shipping=new Shipping(page);
  19  |     const payment=new Payment(page);
  20  | 
  21  |     const email = generateRandomEmail();
  22  | 
  23  |     const productData=await readExcelData('C:/Users/ammu8/OneDrive/Desktop/capstoneProject.xlsx','Sheet1');
  24  | 
  25  |     for (const row of productData) {
  26  |         const productName = row.productName;
  27  |         console.log('Selected product:', productName);
  28  | 
  29  |         const proddetail = new ProductDetailPage(page, productName);
  30  |         const cart = new MyCart(page, productName);
  31  | 
  32  |        //Navigating to the Product List page in AnyBugs.com site
  33  |        await product.prdctsListView();
  34  | 
  35  |     //assertion for validating the user is redirected in the correct page
  36  |        await expect (page).toHaveURL(/find-bugs/);
  37  |        await product.getProduct(productName);
  38  |        console.log("The user is now in Product List View ")
  39  | 
  40  |     // Validate the selected product image
  41  |          await expect(proddetail.prodMainImage).toBeVisible();
  42  |          console.log("The selected product image is displayed correctly...!!");
  43  | 
  44  |     //checking the product image visibility
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
  57  |     /*await cart.productCartVisibility();
  58  |     console.log("Cart is updated with the added product...!!");*/
  59  | 
  60  |     //validating the cart updation against product addition
  61  |        const cartItem = await cart.productCartVisibility();
> 62  |        await expect(cartItem).toContainText(productName);
      |                               ^ Error: expect(locator).toContainText(expected) failed
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
  85  |     //Assertion to validate the default payment method is selected in the order
  86  |        await expect(payment.payTypeText).toHaveText('Payment Method');
  87  |        await expect(payment.payType).toBeChecked();
  88  | 
  89  |     //navigating to Order Submission
  90  |         await payment.submitOrder();
  91  |         console.log("The User is now in the Payment Page...!!!");
  92  | 
  93  |     // Assertions to validate the final popup to confirm the test scope is covered
  94  |          await expect(payment.noticeModal).toBeVisible();
  95  |          await expect(payment.noticeHeading).toHaveText('Testing site')
  96  |          await expect(payment.noticeMessage).toContainText('This storefront is for testing only. No real orders will be placed.');
  97  |          await expect(payment.closeButton).toBeVisible();
  98  |          await payment.verifyTestingNotice();
  99  |          await expect(payment.noticeModal).toBeHidden();
  100 |     }
  101 | });
  102 | 
```