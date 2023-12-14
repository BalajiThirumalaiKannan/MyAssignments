/*
 * Test Steps:
1. Login to https://login.salesforce.com
2. Click on toggle menu button from the left corner
3. Click view All and click Sales from App Launcher
4. Click on Accounts tab 
5. Click on New button
6. Enter 'your name' as account name
7. Select Ownership as Public                                               
8. Click save and verify Account name 
*/

import { expect, test } from "@playwright/test";
import { log } from "console";

test("Verify Account Name creation in Salesforce",async ({page}) => {

    
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

    //Scroll and Click Accounts link

     while (await page.locator("a[data-label='Accounts']").isHidden()) {
            page.mouse.wheel(0,100)
        } 
        
        await page.click("a[data-label='Accounts']");

        await page.waitForLoadState('load');

    //Click New button

    await page.click("div[title='New']");

    await page.waitForLoadState('load');

    //Enter Account name 

    await page.fill("input[name='Name']", "Balaji");

    //Select Public from Ownership dropdown

    await page.click("button[aria-label^=Ownership]");

    await page.click("lightning-base-combobox-item[data-value=Public]");

    //Click Save button

    await page.click("button[name=SaveEdit]")

    await page.waitForLoadState('load');

    //Verify Account name

    let accName = await page.locator("lightning-formatted-text[class=custom-truncate]").innerText();

    console.log(accName);

    expect(accName).toBe("Balaji");

    console.log("Account created successfully for " +accName);

    
})