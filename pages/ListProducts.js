//ListProducts class ia blueprint of ProductListing page and actions to locate and navigate to the Product detail page
class ListProducts{

    constructor(page){

        this.page=page;

        //Storing the target Product locator to a variable
        this.productLink=page.getByRole('link',{name:'Light Brown Purse'});

       //member function to navigate to the anybug.com/find-bug page
    }
       async prdctsListView()
       {

       await (this.page).goto('/find-bugs'); 
       
     };
    
    //member function to locate the target product and then get the detailpage
      async getProduct()
      {        
       await this.productLink.click();

    };
 
};

module.exports = { ListProducts };