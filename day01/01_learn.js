/*

var firstName = "Balaji";
console.log(typeof firstname);

var companyName = "AstraZeneca";
console.log(typeof companyName);

var mobileNumber = 8095630777;
console.log(typeof mobileNumber);

var isAutomation = true;
console.log(typeof isAutomation);

var hasPlaywright;
console.log(typeof hasPlaywright);

var middleName = null;
console.log(typeof middleName);

*/



// Learn var vs let vs const and understand variable scoping

const browserName = "Chrome";

getBrowserVersion(browserName);

function getBrowserVersion(browserName) {

    if (browserName.startsWith("Chrome")){
        //var browserVersion = "11";
        let browserVersion = "12.5.1";
        //console.log(browserVersion)
    }

console.log(browserVersion);
}

