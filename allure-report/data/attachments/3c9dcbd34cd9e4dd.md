# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\endToEndClientApp.spec.js >> Validating End to End Happy Path WorkFlow
- Location: tests\endToEndClientApp.spec.js:13:1

# Error details

```
Test timeout of 40000ms exceeded.
```

```
Error: locator.fill: Test timeout of 40000ms exceeded.
Call log:
  - waiting for locator('#ec_contact_email')

```

# Page snapshot

```yaml
- generic [ref=f9e1]:
  - dialog "cookieconsent" [ref=f9e2]:
    - generic [ref=f9e3]:
      - text: "We use cookies to optimize our website and our service:"
      - link "Cookie Policy" [ref=f9e4] [cursor=pointer]:
        - /url: https://academybugs.com/cookie-policy-eu/
    - generic [ref=f9e5]:
      - button "Functional only" [ref=f9e6] [cursor=pointer]
      - button "Accept cookies" [ref=f9e7] [cursor=pointer]
  - generic [ref=f9e8]:
    - link "Skip to content" [ref=f9e9] [cursor=pointer]:
      - /url: "#sq-content"
    - banner [ref=f9e10]:
      - generic [ref=f9e11]:
        - heading [level=3] [ref=f9e13]:
          - link "AcademyBugs.com" [ref=f9e14] [cursor=pointer]:
            - /url: https://academybugs.com/
        - navigation [ref=f9e15]:
          - list [ref=f9e17]:
            - listitem [ref=f9e18]:
              - link "Examples of Bugs" [ref=f9e19] [cursor=pointer]:
                - /url: https://academybugs.com/
            - listitem [ref=f9e20]:
              - link "Types of Bugs" [ref=f9e21] [cursor=pointer]:
                - /url: https://academybugs.com/types/
            - listitem [ref=f9e22]:
              - link "Find Bugs" [ref=f9e23] [cursor=pointer]:
                - /url: https://academybugs.com/find-bugs/
            - listitem [ref=f9e24]:
              - link "Report Bugs" [ref=f9e25] [cursor=pointer]:
                - /url: https://academybugs.com/report-bugs/
            - listitem [ref=f9e26]:
              - link "" [ref=f9e27] [cursor=pointer]:
                - /url: "#"
    - generic [ref=f9e30]:
      - main [ref=f9e32]:
        - article [ref=f9e33]:
          - generic [ref=f9e35]:
            - text: 
            - generic [ref=f9e36]:
              - link "SHOPPING CART" [ref=f9e38] [cursor=pointer]:
                - /url: https://academybugs.com/my-cart/
              - generic [ref=f9e39]: 
              - link "CHECKOUT DETAILS" [ref=f9e41] [cursor=pointer]:
                - /url: https://academybugs.com/my-cart/?ec_page=checkout_info
              - generic [ref=f9e42]: 
              - generic [ref=f9e43]: SUBMIT PAYMENT
            - generic:
              - generic [ref=f9e44]:
                - generic [ref=f9e45]: Returning Customer
                - generic [ref=f9e46]:
                  - text: You are currently checking out as Meena baby,
                  - link "click here" [ref=f9e47] [cursor=pointer]:
                    - /url: https://academybugs.com/my-cart/?ec_cart_action=logout
                  - text: to checkout with a different account.
                - generic [ref=f9e48]: Billing Information
                - generic [ref=f9e49]:
                  - generic [ref=f9e50]: Country*
                  - combobox "Country*" [ref=f9e51] [cursor=pointer]:
                    - option "Select a Country"
                    - option "United States"
                    - option "Canada"
                    - option "Australia"
                    - option "Afghanistan"
                    - option "Albania"
                    - option "Algeria"
                    - option "American Samoa"
                    - option "Andorra"
                    - option "Angola"
                    - option "Anguilla"
                    - option "Antarctica"
                    - option "Antigua and Barbuda"
                    - option "Argentina"
                    - option "Armenia"
                    - option "Aruba"
                    - option "Austria"
                    - option "Azerbaijan"
                    - option "Bahamas"
                    - option "Bahrain"
                    - option "Bangladesh"
                    - option "Barbados"
                    - option "Belarus"
                    - option "Belgium"
                    - option "Belize"
                    - option "Benin"
                    - option "Bermuda"
                    - option "Bhutan"
                    - option "Bolivia"
                    - option "Botswana"
                    - option "Bouvet Island"
                    - option "Brazil"
                    - option "Brunei Darussalam"
                    - option "Bulgaria"
                    - option "Burkina Faso"
                    - option "Burundi"
                    - option "Cambodia"
                    - option "Cameroon"
                    - option "Cape Verde"
                    - option "Cayman Islands"
                    - option "Chad"
                    - option "Chile"
                    - option "China"
                    - option "Christmas Island"
                    - option "Colombia"
                    - option "Comoros"
                    - option "Congo"
                    - option "Cook Islands"
                    - option "Costa Rica"
                    - option "Cote D''Ivoire"
                    - option "Croatia"
                    - option "Cuba"
                    - option "Cyprus"
                    - option "Czech Republic"
                    - option "Denmark"
                    - option "Djibouti"
                    - option "Dominica"
                    - option "Dominican Republic"
                    - option "East Timor"
                    - option "Ecuador"
                    - option "Egypt"
                    - option "El Salvador"
                    - option "Equatorial Guinea"
                    - option "Eritrea"
                    - option "Estonia"
                    - option "Ethiopia"
                    - option "Faroe Islands"
                    - option "Fiji"
                    - option "Finland"
                    - option "France"
                    - option "France, Metropolitan"
                    - option "French Guiana"
                    - option "French Polynesia"
                    - option "Gabon"
                    - option "Gambia"
                    - option "Georgia"
                    - option "Germany"
                    - option "Ghana"
                    - option "Gibraltar"
                    - option "Greece"
                    - option "Greenland"
                    - option "Grenada"
                    - option "Guadeloupe"
                    - option "Guam"
                    - option "Guatemala"
                    - option "Guinea"
                    - option "Guinea-bissau"
                    - option "Guyana"
                    - option "Haiti"
                    - option "Honduras"
                    - option "Hong Kong"
                    - option "Hungary"
                    - option "Iceland"
                    - option "India" [selected]
                    - option "Indonesia"
                    - option "Iraq"
                    - option "Ireland"
                    - option "Israel"
                    - option "Italy"
                    - option "Jamaica"
                    - option "Japan"
                    - option "Jordan"
                    - option "Kazakhstan"
                    - option "Kenya"
                    - option "Kiribati"
                    - option "Korea, Republic of"
                    - option "Kuwait"
                    - option "Kyrgyzstan"
                    - option "Latvia"
                    - option "Lebanon"
                    - option "Lesotho"
                    - option "Liberia"
                    - option "Liechtenstein"
                    - option "Lithuania"
                    - option "Luxembourg"
                    - option "Macau"
                    - option "Madagascar"
                    - option "Malawi"
                    - option "Malaysia"
                    - option "Maldives"
                    - option "Mali"
                    - option "Malta"
                    - option "Marshall Islands"
                    - option "Martinique"
                    - option "Mauritania"
                    - option "Mauritius"
                    - option "Mayotte"
                    - option "Mexico"
                    - option "Monaco"
                    - option "Mongolia"
                    - option "Montserrat"
                    - option "Morocco"
                    - option "Mozambique"
                    - option "Myanmar"
                    - option "Namibia"
                    - option "Nauru"
                    - option "Nepal"
                    - option "Netherlands"
                    - option "Netherlands Antilles"
                    - option "New Caledonia"
                    - option "New Zealand"
                    - option "Nicaragua"
                    - option "Niger"
                    - option "Nigeria"
                    - option "Niue"
                    - option "Norfolk Island"
                    - option "Norway"
                    - option "Oman"
                    - option "Pakistan"
                    - option "Palau"
                    - option "Panama"
                    - option "Papua New Guinea"
                    - option "Paraguay"
                    - option "Peru"
                    - option "Philippines"
                    - option "Pitcairn"
                    - option "Poland"
                    - option "Portugal"
                    - option "Puerto Rico"
                    - option "Qatar"
                    - option "Reunion"
                    - option "Romania"
                    - option "Russian Federation"
                    - option "Rwanda"
                    - option "Saint Kitts and Nevis"
                    - option "Saint Lucia"
                    - option "Samoa"
                    - option "San Marino"
                    - option "Sao Tome and Principe"
                    - option "Saudi Arabia"
                    - option "Senegal"
                    - option "Seychelles"
                    - option "Sierra Leone"
                    - option "Singapore"
                    - option "Slovakia"
                    - option "Slovenia"
                    - option "Solomon Islands"
                    - option "Somalia"
                    - option "South Africa"
                    - option "Spain"
                    - option "Sri Lanka"
                    - option "St. Helena"
                    - option "St. Pierre and Miquelon"
                    - option "Sudan"
                    - option "Suriname"
                    - option "Swaziland"
                    - option "Sweden"
                    - option "Switzerland"
                    - option "Syrian Arab Republic"
                    - option "Taiwan"
                    - option "Tajikistan"
                    - option "Thailand"
                    - option "Togo"
                    - option "Tokelau"
                    - option "Tonga"
                    - option "Trinidad and Tobago"
                    - option "Tunisia"
                    - option "Turkey"
                    - option "Turkmenistan"
                    - option "Turks and Caicos Islands"
                    - option "Tuvalu"
                    - option "Uganda"
                    - option "Ukraine"
                    - option "United Arab Emirates"
                    - option "United Kingdom"
                    - option "US Minor Outlying Islands"
                    - option "Uruguay"
                    - option "Uzbekistan"
                    - option "Vanuatu"
                    - option "Venezuela"
                    - option "VietNam"
                    - option "Virgin Islands (British)"
                    - option "Virgin Islands (U.S.)"
                    - option "Wallis and Futuna Islands"
                    - option "Western Sahara"
                    - option "Yemen"
                    - option "Yugoslavia"
                    - option "Zaire"
                    - option "Zambia"
                    - option "Zimbabwe"
                - generic [ref=f9e52]:
                  - generic [ref=f9e53]:
                    - generic [ref=f9e54]: First Name*
                    - textbox "First Name*" [ref=f9e55]: Fiona
                  - generic [ref=f9e56]:
                    - generic [ref=f9e57]: Last Name*
                    - textbox "Last Name*" [ref=f9e58]: Arthner
                - generic [ref=f9e59]:
                  - generic [ref=f9e60]: Company Name
                  - textbox "Company Name" [ref=f9e61]: Test Company
                - generic [ref=f9e62]:
                  - generic [ref=f9e63]: Address*
                  - textbox "Address*" [ref=f9e64]: Infopark Road
                - generic [ref=f9e65]:
                  - generic [ref=f9e66]: City*
                  - textbox "City*" [ref=f9e67]: Kochi
                - generic [ref=f9e68]:
                  - generic [ref=f9e69]:
                    - generic [ref=f9e70]: State*
                    - combobox [ref=f9e71] [cursor=pointer]:
                      - option "Select One"
                      - option "Andhra Pradesh"
                      - option "Assam"
                      - option "Bihar"
                      - option "Chhattisgarh"
                      - option "Delhi"
                      - option "Goa"
                      - option "Gujarat"
                      - option "Haryana"
                      - option "Himachal Pradesh"
                      - option "Jammu & Kashmir"
                      - option "Jharkhand"
                      - option "Karnataka"
                      - option "Kerala" [selected]
                      - option "Madhya Pradesh"
                      - option "Maharashtra"
                      - option "Meghalaya"
                      - option "Orissa"
                      - option "Pondicherry"
                      - option "Punjab"
                      - option "Rajasthan"
                      - option "Tamil Nadu"
                      - option "Uttar Pradesh"
                      - option "Uttaranchal"
                      - option "West Bengal"
                  - generic [ref=f9e72]:
                    - generic [ref=f9e73]: Zip Code*
                    - textbox "Zip Code*" [ref=f9e74]: "682030"
                - generic [ref=f9e75]:
                  - generic [ref=f9e76]: Phone*
                  - textbox "Phone*" [active] [ref=f9e77]: "9876543210"
                - generic [ref=f9e78]:
                  - checkbox [ref=f9e79]
                  - text: SHIP TO DIFFERENT ADDRESS
                - button "CONTINUE TO SHIPPING" [ref=f9e81] [cursor=pointer]
              - generic [ref=f9e82]:
                - generic [ref=f9e83]: YOUR CART
                - generic [ref=f9e84]:
                  - generic [ref=f9e85]: Buddha Bracelet x 2
                  - generic [ref=f9e86]: $214.00
                - generic [ref=f9e87]:
                  - generic [ref=f9e88]: Light Brown Purse x 2
                  - generic [ref=f9e89]: $154.08
                - generic [ref=f9e90]: Coupon
                - textbox "Enter Coupon Code" [ref=f9e92]
                - generic [ref=f9e93]: Apply Coupon
                - generic [ref=f9e95]: Gift Card
                - textbox "Enter Gift Card" [ref=f9e97]
                - generic [ref=f9e98]: Redeem Gift Card
                - generic [ref=f9e100]: Cart Totals
                - generic [ref=f9e101]:
                  - generic [ref=f9e102]: Cart Subtotal
                  - generic [ref=f9e103]: $368.08
                - generic [ref=f9e104]:
                  - generic [ref=f9e105]: Shipping
                  - generic [ref=f9e106]: $7.99
                - generic [ref=f9e107]:
                  - generic [ref=f9e108]: Grand Total
                  - generic [ref=f9e109] [cursor=pointer]: $476.07
                - button "CONTINUE TO SHIPPING" [ref=f9e111] [cursor=pointer]
      - generic [ref=f9e112]:
        - heading "Select a Currency" [level=4] [ref=f9e113]
        - combobox [ref=f9e115] [cursor=pointer]:
          - option "USD" [selected]
          - option "EUR"
          - option "GBP"
          - option "JPY"
        - heading "Product Search" [level=4] [ref=f9e116]
        - generic [ref=f9e118]:
          - combobox [ref=f9e119]
          - button "Search" [ref=f9e120] [cursor=pointer]
        - heading "Hot Item" [level=4] [ref=f9e121]
        - generic [ref=f9e122]:
          - link [ref=f9e124] [cursor=pointer]:
            - /url: https://academybugs.com/anchor-bracelet
          - link "Silver Heart Bracelet" [ref=f9e127] [cursor=pointer]:
            - /url: https://academybugs.com/store/heart-bracelet/
          - generic [ref=f9e128]: $275.00
        - heading "Store Menu" [level=4] [ref=f9e129]
        - list [ref=f9e131]:
          - listitem [ref=f9e132]:
            - link "All Items" [ref=f9e133] [cursor=pointer]:
              - /url: https://academybugs.com/store/all-items/
          - listitem [ref=f9e134]:
            - link "Accessories [+]" [ref=f9e135] [cursor=pointer]:
              - /url: "#"
              - text: Accessories
              - generic [ref=f9e136]: "[+]"
          - listitem [ref=f9e137]:
            - link "Fashion Type [+]" [ref=f9e138] [cursor=pointer]:
              - /url: "#"
              - text: Fashion Type
              - generic [ref=f9e139]: "[+]"
          - listitem [ref=f9e140]:
            - link "Women's Pants" [ref=f9e141] [cursor=pointer]:
              - /url: https://academybugs.com/store/womens-pants/
        - heading "Filter by Price" [level=4] [ref=f9e142]
        - generic [ref=f9e143]:
          - link "$15.00 - $19.99 (1)" [ref=f9e145] [cursor=pointer]:
            - /url: https://academybugs.com/my-cart/?&perpage=25&pricepoint=7
          - link "$25.00 - $49.99 (2)" [ref=f9e147] [cursor=pointer]:
            - /url: https://academybugs.com/my-cart/?&perpage=25&pricepoint=2
          - link "$50.00 - $99.99 (3)" [ref=f9e149] [cursor=pointer]:
            - /url: https://academybugs.com/my-cart/?&perpage=25&pricepoint=3
          - link "$100.00 - $299.99 (11)" [ref=f9e151] [cursor=pointer]:
            - /url: https://academybugs.com/my-cart/?&perpage=25&pricepoint=4
          - link "Greater Than $299.99 (1)" [ref=f9e153] [cursor=pointer]:
            - /url: https://academybugs.com/my-cart/?&perpage=25&pricepoint=5
        - heading "Shopping Cart" [level=4] [ref=f9e154]
        - link "Shopping Cart (4)" [ref=f9e156] [cursor=pointer]:
          - /url: "#"
        - heading "Your Account" [level=4] [ref=f9e158]
        - strong [ref=f9e159]: Hello, Meena
        - link "Dashboard" [ref=f9e160] [cursor=pointer]:
          - /url: https://academybugs.com/account/
        - link "Order History" [ref=f9e161] [cursor=pointer]:
          - /url: https://academybugs.com/account/?ec_page=orders
        - link "Billing Information" [ref=f9e162] [cursor=pointer]:
          - /url: https://academybugs.com/account/?ec_page=billing_information
        - link "Shipping Information" [ref=f9e163] [cursor=pointer]:
          - /url: https://academybugs.com/account/?ec_page=shipping_information
        - link "Change Password" [ref=f9e164] [cursor=pointer]:
          - /url: https://academybugs.com/account/?ec_page=password
        - link "Sign Out" [ref=f9e165] [cursor=pointer]:
          - /url: https://academybugs.com/account/?ec_page=logout
    - contentinfo [ref=f9e166]:
      - generic [ref=f9e167]:
        - generic [ref=f9e170]:
          - generic:
            - list:
              - listitem [ref=f9e171]:
                - link [ref=f9e172] [cursor=pointer]:
                  - /url: https://www.utest.com/academy
                  - img "uTest" [ref=f9e173]
              - listitem [ref=f9e174]:
                - link "Terms & Conditions" [ref=f9e175] [cursor=pointer]:
                  - /url: https://www.utest.com/terms-and-conditions
              - listitem [ref=f9e176]:
                - link "Privacy Policy" [ref=f9e177] [cursor=pointer]:
                  - /url: https://www.utest.com/privacy-policy
        - text:      
  - link "" [ref=f9e180] [cursor=pointer]:
    - /url: "#"
```

# Test source

```ts
  1  | class CheckOut{
  2  |     constructor(page,userdata){
  3  |         this. page = page;
  4  |         this.userdata = userdata;
  5  |         this.breadcrumbs = page.locator('.ec_cart_breadcrumbs'); 
  6  | 
  7  |        this.selectCountry = page.locator('#ec_cart_billing_country');
  8  |        this.fname = page.locator('#ec_cart_billing_first_name');
  9  |        this.lname = page.locator('#ec_cart_billing_last_name');
  10 |        this.cname = page.locator('#ec_cart_billing_company_name');
  11 |        this.address = page.locator('#ec_cart_billing_address');
  12 |        this.city = page.locator('#ec_cart_billing_city');
  13 |        this.state = page.locator('#ec_cart_billing_state_IN');
  14 |        this.zip = page.locator('#ec_cart_billing_zip');
  15 |        this.phone = page.locator('#ec_cart_billing_phone');
  16 |        this.email = page.locator('#ec_contact_email');
  17 |        this.cnfrmemail = page.locator('#ec_contact_email_retype');
  18 |        this.createAcc = page.locator('#ec_create_account_selector');
  19 |        this.cfname = page.locator('#ec_contact_first_name');
  20 |        this.clname = page.locator('#ec_contact_last_name');
  21 |        this.password = page.locator('#ec_contact_password');
  22 |        this.cpassword = page.locator('#ec_contact_password_retype');
  23 |        this.ckhoutButton = this.page.locator('.ec_cart_button.ec_checkout_details_submit').first();;
  24 |               
  25 |     }
  26 | 
  27 |    async accRegistration(userdata)
  28 |    
  29 |    {
  30 |      await this.selectCountry.selectOption({label: this.userdata.billingDetails.country});
  31 |      await this.fname.fill(this.userdata.billingDetails.firstName);
  32 |      await this.lname.fill(this.userdata.billingDetails.lastName);
  33 |      await this.cname.fill(this.userdata.billingDetails.companyName);
  34 |      await this.address.fill(this.userdata.billingDetails.address);
  35 |      await this.city.fill(this.userdata.billingDetails.city);   
  36 | 
  37 |      await this.state.selectOption({label: this.userdata.billingDetails.state});     
  38 |      await this.zip.fill(this.userdata.billingDetails.zip);
  39 |      await this.phone.fill(this.userdata.billingDetails.phone);
> 40 |      await this.email.fill(this.userdata.contactDetails.email);
     |                       ^ Error: locator.fill: Test timeout of 40000ms exceeded.
  41 |      await this.cnfrmemail.fill(this.userdata.contactDetails.retypeEmail);
  42 | 
  43 |      await this.createAcc.click();
  44 | 
  45 |      await this.cfname.fill(this.userdata.contactDetails.firstName);
  46 |      await this.clname.fill(this.userdata.contactDetails.lastName);
  47 |      await this.password.fill(this.userdata.contactDetails.password);
  48 |      await this.cpassword.fill(this.userdata.contactDetails.retypePassword);
  49 | 
  50 |      await this.ckhoutButton.click();      
  51 | 
  52 |    }
  53 | };
  54 | 
  55 | module.exports={CheckOut}
  56 | 
```