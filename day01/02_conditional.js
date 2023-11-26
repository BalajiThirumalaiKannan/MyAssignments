// Objective: Learn if - else and switch - case

const { default: test } = require("node:test");


let browserName="chrome";
launchBrowser(browserName);

function launchBrowser(browserName) {
    
    if(browserName === "chrome" ){
        console.log("Chrome browser");
    } else {
        console.log("Not chrome browser");
    }
}

let testType = "regression";
runTests(testType);

function runTests(testType) {
    switch (testType) {
        case "smoke":
            console.log("Functional tests");
            break;
        case "sanity":
            console.log("Sanity Tests");
            break;
        case "regression":
            console.log("Regression Tests");
            break;
        default:
            console.log("Smoke Tests");
    }
}