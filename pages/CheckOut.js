class CheckOut{
    constructor(page,userdata){
        this. page = page;
        this.userdata = userdata;
        this.breadcrumbs = page.locator('.ec_cart_breadcrumbs'); 

       this.selectCountry = page.locator('#ec_cart_billing_country');
       this.fname = page.locator('#ec_cart_billing_first_name');
       this.lname = page.locator('#ec_cart_billing_last_name');
       this.cname = page.locator('#ec_cart_billing_company_name');
       this.address = page.locator('#ec_cart_billing_address');
       this.city = page.locator('#ec_cart_billing_city');
       this.state = page.locator('#ec_cart_billing_state_IN');
       this.zip = page.locator('#ec_cart_billing_zip');
       this.phone = page.locator('#ec_cart_billing_phone');
       this.email = page.locator('#ec_contact_email');
       this.cnfrmemail = page.locator('#ec_contact_email_retype');
       this.createAcc = page.locator('#ec_create_account_selector');
       this.cfname = page.locator('#ec_contact_first_name');
       this.clname = page.locator('#ec_contact_last_name');
       this.password = page.locator('#ec_contact_password');
       this.cpassword = page.locator('#ec_contact_password_retype');
       this.ckhoutButton = this.page.locator('.ec_cart_button.ec_checkout_details_submit').first();;
              
    }

   async accRegistration(userdata)
   
   {
     await this.selectCountry.selectOption({label: this.userdata.billingDetails.country});
     await this.fname.fill(this.userdata.billingDetails.firstName);
     await this.lname.fill(this.userdata.billingDetails.lastName);
     await this.cname.fill(this.userdata.billingDetails.companyName);
     await this.address.fill(this.userdata.billingDetails.address);
     await this.city.fill(this.userdata.billingDetails.city);   

     await this.state.selectOption({label: this.userdata.billingDetails.state});     
     await this.zip.fill(this.userdata.billingDetails.zip);
     await this.phone.fill(this.userdata.billingDetails.phone);
     await this.email.fill(this.userdata.contactDetails.email);
     await this.cnfrmemail.fill(this.userdata.contactDetails.retypeEmail);

     await this.createAcc.click();

     await this.cfname.fill(this.userdata.contactDetails.firstName);
     await this.clname.fill(this.userdata.contactDetails.lastName);
     await this.password.fill(this.userdata.contactDetails.password);
     await this.cpassword.fill(this.userdata.contactDetails.retypePassword);

     await this.ckhoutButton.click();      

   }
};

module.exports={CheckOut}
