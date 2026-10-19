const { expect, chromium, devices } = require("@playwright/test");
require ('dotenv').config();
//console.log("BASEURL:", process.env.BASEURL);

const config=({
  testdir:'./test',
  //retries:1,
  fullyParallel: true,
  workers:2,
  timeout:40*1000,
  expect:{
    timeout:5000,
  },
  //reporter:'html',

reporter: [
['html', { 
  outputFolder: 'playwright-report',
  open: 'always' }],
['allure-playwright', {
resultsDir: 'allure-results'
}]
],

  projects:[
    /*{

 /* name:'Sapharie',

  use:{
    baseURL: process.env.BASEURL,  
    browsername:'Webkit',
    headless:false,//won't open UI mode
    screenshot:'on',
    trace:'on'//debugging teqnoque
  },
},*/
{
name:'chrome',
use:{
    browsername:'chromium',
    baseURL: process.env.BASEURL, 
    headless:false,
    //viewport:{width:720,height:720},
   // ...devices['iPhone 11'],
    ignoreHttpserror:true,
    Permissions:['geolocation'],
    screenshot:'on',
    trace:'on',
    //video:'retain-on-failure',
    video:'on',
    /*launchOptions: {
            slowMo: 1000
        }*/
  },
}
]
})
module.exports=config;