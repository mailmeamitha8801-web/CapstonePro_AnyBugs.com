const { expect } = require("@playwright/test");

class ProductDetailPage
{
  constructor(page,productName)
  {
    this.page=page;
    //globally declaring Product Image locator
    this.prodMainImage=page.locator(`div.ec_details_main_image img[alt="${productName}"]`);
    this.prodExpandImage= page.locator(`div.ec_details_large_popup_main img[alt="${productName}"]`);
    this.prdImgClose=page.locator('.ec_details_large_popup_close');
   }

   async prodImageVisible()
   {
    await expect(this.prodMainImage).toBeVisible();
    await this.prodMainImage.click();
    await expect(this.prodExpandImage).toBeVisible();
    await this.prdImgClose.click();


   }


};

module.exports={ProductDetailPage};