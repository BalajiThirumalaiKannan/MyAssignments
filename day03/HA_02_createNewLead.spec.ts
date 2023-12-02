/*
(Create a new Lead)

1) Open http://leaftaps.com/opentaps/control/main
2) Perform the following functions

    a) Login (Enter username, password, Click Login)
    b) Click CRM/SFA Link (Locator for Link: text='Text of the Link') 
       await page.locator("text=CRM/SFA').click();
    c) Click the Leads Link (See the Tab)
    d) Click Create Lead Link (See Left Menu)
    e) Enter the company name, first name and last name (use id and pur your own data)
    f) Click Create Lead Button 

*/

import {chromium, test } from "@playwright/test";

test("To create a New Lead in Leaftaps",async () => {

    test.setTimeout(120000);

    const browser = await chromium.launch({headless:false, channel:'chrome'});

    const browserContext = await browser.newContext();

    const page = await browserContext.newPage();

    await page.goto("http://leaftaps.com/opentaps/control/main");

    await page.locator('#username').fill('Demosalesmanager');

    await page.locator('#password').fill('crmsfa');

    await page.locator('.decorativeSubmit').click();

    await page.locator('text=CRM/SFA').click();

    await page.locator('text=Leads').nth(0).click();

    await page.locator('text=Create Lead').nth(0).click();

    await page.locator('#createLeadForm_companyName').fill('AstraZeneca');

    await page.locator('#createLeadForm_firstName').fill('Balaji');

    await page.locator('#createLeadForm_lastName').fill('Thirumalai Kannan');

    await page.locator('.smallSubmit').click();

    await page.waitForTimeout(50000);
    
})

