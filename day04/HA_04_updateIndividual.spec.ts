/*
Assignment: 4 Edit Individuals
Test Steps:
1. Login to https://login.salesforce.com
2. Click on the toggle menu button from the left corner
3. Click View All and click Individuals from App Launcher 
4. Click on the Individuals tab 
5. Search the Individuals last name
6. Click on the Dropdown icon and Select Edit
7. Select Salutation as 'Mr'
8. Now enter the first name
9. Click on Save and Verify the first name 
*/


import { expect, test } from "@playwright/test";

test("Create Individuals in Salesforce",async ({page}) => {

    test.setTimeout(120000);

    //Launch Salesforce URL

    await page.goto("https://login.salesforce.com");

    //Enter Username and Password to Login
    
    await page.fill("#username", "balaji@testleaf.com");
    await page.fill("#password", "Baaji_99");

    await page.click("#Login");

    //Click Toggle Menu 

    await page.click(".slds-icon-waffle");

     //Click View All  

    await page.getByLabel("View All Applications").click();

    await page.waitForLoadState('domcontentloaded');
 
    //Scroll and Click Individuals link

    while (await page.locator("a[data-label=Individuals]").isHidden()) {
        page.mouse.wheel(0,100)
    } 
    
    //Click the Individuals Search text box

    page.click("a[data-label=Individuals]");

    await page.waitForLoadState('load');

    //Enter the Lastname to be searched and press Enter

    await page.fill("input[name='Individual-search-input']", "Balaji");

    await page.keyboard.press("Enter");

    //Click the Dropdown icon 

    await page.locator("span[class$='spread'] div[class*= forceVirtualAction] a[role=button]").nth(0).click();

    //Click Edit button

    await page.waitForLoadState('load');

    await page.click("[data-target-selection-name*='Individual.Edit']");


    //Click Salutation

    await page.click("div[class^= salutation] div[class=uiPopupTrigger] a[role=button]");

    //Select Salutation as Mr.

    await page.click("a[title='Ms.']");

    //Enter First name

    await page.fill("input[placeholder='First Name']", "Akshara");

    //Click on Save and Verify the first name

    await page.click("button[title='Save']");

    //Get First name

    let toastMsg = await page.locator("span[class*=toastMessage]").innerText();
    console.log(toastMsg);

    let myArr = toastMsg.split(" ");
    //console.log(myArr);

    let firstName = myArr[1];

    console.log(firstName);


    //Verify the Lead name
    expect(firstName).toBe('"Akshara');



})
