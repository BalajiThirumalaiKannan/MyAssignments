/*
Assignment - 1 (Login to Salesforce)

1) Open Salesforce Login Page https://login.salesforce.com
2) Enter the username
3) Enter the password
4) Click Login
5) Print the title and url
*/

import { chromium, test } from "@playwright/test";
import { log } from "console";
import { channel } from "diagnostics_channel";

test("To Print Page Title and URL",async () => {
    
const browser = await chromium.launch({headless:false, channel:'chrome'});

const browserContext = await browser.newContext();

const page = await browserContext.newPage();

await page.goto("https://login.salesforce.com");

const url = page.url();
console.log(`Page URL is ${url}`);

await page.locator('#username').fill('balaji@testleaf.com');

await page.locator('[name=pw]').fill('Baaji_99');

await page.locator('#Login').click();

await page.waitForTimeout(10000);

const title = await page.title();

console.log("Page Title is "+title);


})