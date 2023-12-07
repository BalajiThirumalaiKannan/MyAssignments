/*
Assignment: 3 Create Individuals
Test Steps: 
1. Login to https://login.salesforce.com
2. Click on the toggle menu button from the left corner
3. Click View All and click Individuals from App Launcher
4. Click on the Dropdown icon in the Individuals tab
5. Click on New Individual
6. Enter the Last Name
7. Click save and verify Individuals Name
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
    

    page.click("a[data-label=Individuals]");

    await page.waitForLoadState('load');

    //Click the Dropdown icon in the Individuals tab

    await page.click("div[class*=x-small] span[part=boundary] svg[data-key=chevrondown]");

    await page.getByText("New Individual").click();

    //Enter Lastname and click Save button

    await page.fill("input[placeholder='Last Name']", "Balaji");

    await page.click("button[title='Save']");

    //Get Individual name

    const newIndividual = await page.locator("div[class*=slds-page-header__title] span[class=uiOutputText]").innerText();
    console.log(newIndividual);

    //Verify Individual name

    expect(newIndividual).toBe("Balaji");


    
})