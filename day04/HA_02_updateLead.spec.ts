/*
Assignment: 2 Edit Lead
http://leaftaps.com/opentaps/control/main			
1. Launch the browser
2. Enter the username
3. Enter the password
4. Click Login
5. Click CRM/SFA link
6. Click Leads link
7. Click on Create Lead
8. Enter company name
9. Enter first name
10.Enter last name
11.Click on Create Lead button  
12.Click Edit
13.Change the company name
14.Click Update
*/

import { test } from "@playwright/test";

test("Create and Update Lead in Leaftaps", async ({page}) => {

    test.setTimeout(120000);

    //Navigate to Leaftaps URL

    await page.goto("http://leaftaps.com/opentaps/control/main");

    //Login 

    await page.fill("#username", "Demosalesmanager");
    await page.fill("#password", "crmsfa");
    await page.click(".decorativeSubmit");

    //Click CRM/SFA Link

    await page.getByRole('link', {name: 'CRM/SFA'}).click();

    //Click Leads Link

    await page.getByRole('link', {name: 'Leads'}).click();

    //Click Create Lead & enter the mandatory fields

    await page.getByRole('link', {name: 'Create Lead'}).click();

    await page.fill("#createLeadForm_companyName", "AZ");

    await page.fill("#createLeadForm_firstName", "Balaji");

    await page.fill("#createLeadForm_lastName", "T");

    await page.click("input[name='submitButton']");

    //Click Edit Lead link

    await page.getByRole('link', {name:'Edit'}).click();

    //Change Company name and click on update button
    
    await page.locator("#updateLeadForm_companyName").clear();

    await page.fill("#updateLeadForm_companyName", "CTS");

    await page.click("input[value='Update']");

    
})