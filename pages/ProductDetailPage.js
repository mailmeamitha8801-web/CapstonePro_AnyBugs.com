class ProductDetailPage
{
  constructor(page)
  {
    this.page=page;
    //globally declaring Product Image locator
    this.prodMainImage=page.locator("div[class='ec_details_main_image ec_details_main_image_12_1 mag_enabled'] img[alt='Light Brown Purse']");
    this.prodExpandImage= page.locator("div[class='ec_details_large_popup_main ec_details_large_popup_main_12_1'] img[alt='Light Brown Purse']");
   }

   async prodImageVisible()
   {
    await expect (this.prodMainImage).toBeVisible();

   }


};

module.exports={ProductDetailPage};