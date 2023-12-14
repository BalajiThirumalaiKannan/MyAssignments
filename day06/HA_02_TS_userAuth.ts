/*
Assignment 1: Automated Testing of a User Authentication System 
 
Objective:
Practice integrating classes and methods into a test script for a user authentication system.
 
Instructions:
1. Create a class as `UserAuthenticator` 
2. Create a methods like login(with 2 mandatory parameters and one optional parameter), logout, 
   and password reset.
3. Create instance of the class and call the methods
*/



// Create a class as `UserAuthenticator` 

class UserAuthenticator{

// Create Login method

    login(userName:string, passWord:string, buttonClick?:true){

        console.log(`Username:${userName} and Password:${passWord}`);

    }

// Create Logout method

    logout(){
        console.log("User is looged out");

    }

// Create Password reset method

    paswwordReset(){
        console.log("Password is reset");
    }

}

// Create Instance of Class and call the methods

const authentication = new UserAuthenticator();

authentication.login('Balaji','PWD123');

authentication.logout();

authentication.paswwordReset();