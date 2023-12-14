/*
 * Typescript
 * Create variables with different data types and print them in console
    1) browserVersion - 117 (immutable)
    2) browserNames- declare a type datatype with variables bName as Edge and updated version as 115
    3) isHeadless - true (use implicit type reference)
    4) releaseYear - 1998 (use explicit type reference)
    5) browserLogo - use 'any' data type and use two values with different data types
 
*/
// 1) browserVersion - 117 (immutable)
var browserVersion = 117;
var browserDetails = { bName: 'Edge', bVersion: 115 };
console.log("Browser name is: ".concat(browserDetails.bName, " and Browser version is: ").concat(browserDetails.bVersion));
//  3) isHeadless - true (use implicit type reference)
var isHeadless = true;
console.log("Execution will run in Headless = ".concat(isHeadless, " mode"));
//  4) releaseYear - 1998 (use explicit type reference)
var releaseYear = 1998;
console.log("Release year is ".concat(releaseYear));
//  5) browserLogo - use 'any' data type and use two values with different data types
var browserLogo;
browserLogo = 'Chromium';
console.log("Browser logo is: ".concat(browserLogo));
browserLogo = 9;
console.log("Browser logo is: ".concat(browserLogo));
browserLogo = true;
console.log("Browser logo is: ".concat(browserLogo));
