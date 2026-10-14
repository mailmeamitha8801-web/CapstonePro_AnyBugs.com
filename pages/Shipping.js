class Shipping{

    constructor(page)
    {
      this.page=page;

      
        this.payment=page.getByRole('button',{name:'CONTINUE TO PAYMENT'});
    }

    async navigateToShipping(){
        
        await this.payment.click();

    }
  }

   module.exports={Shipping}