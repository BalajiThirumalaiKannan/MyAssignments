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

const browserVersion : number = 117;

// 2) browserNames- declare a type datatype with variables bName as Edge and updated version as 115  

type browserNames = {

    bName : string
    bVersion : number

}

let browserDetails : browserNames = {bName:'Edge', bVersion:115}
console.log(`Browser name is: ${browserDetails.bName} and Browser version is: ${browserDetails.bVersion}`)

//  3) isHeadless - true (use implicit type reference)

let isHeadless = true;
console.log(`Execution will run in Headless = ${isHeadless} mode`);

//  4) releaseYear - 1998 (use explicit type reference)

let releaseYear : number = 1998;
console.log(`Release year is ${releaseYear}`);

//  5) browserLogo - use 'any' data type and use two values with different data types

let browserLogo : any;

 browserLogo = 'Chromium';
 console.log(`Browser logo is: ${browserLogo}`);

 browserLogo = 9;
 console.log(`Browser logo is: ${browserLogo}`);

 browserLogo = true;
 console.log(`Browser logo is: ${browserLogo}`);


