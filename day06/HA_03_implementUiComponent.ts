/*
Assignment 2: UI Component Library
 
Objective:
Practice creating interfaces and implementing them in classes for a UI component library.
 
Instructions:
1. Create a TypeScript interface named `UIComponent` with methods `render()` and `handleEvent()`.
2. Create classes `Button`, `TextField`, and `Checkbox` that implement the `UIComponent` interface.
3. Implement the methods in each class to simulate rendering and handling events for UI components.
4. Create instances of all UI components  and call all the methods
*/


// Import created UIComponent Interface

import {UIComponent} from "./HA_03_interfaceUiComponent";

//Create Classes to implement the UIComponent Interface

class Button implements UIComponent{

    myAccount:string = 'MyAccount Button';

    render():void{

        console.log(this.myAccount);
        console.log("Save button");
        console.log("Close button");

    }

    handleEvent():void{

        console.log("Handle Exit without Save warning pop-up");

}


}

class TextField implements UIComponent{

    render(): void {
        console.log("Name");
        console.log("Surname");
    }

    handleEvent(): void {
        console.log("Handle max character limitation pop-up");
    }

}

class Checkbox implements UIComponent{

    render(): void {
        
        console.log("Marital Status");
    }

    handleEvent(): void {
        
        console.log("Handle multiple checkbox cannot be selected pop-up");
    }

}

//Create instances of the class

const button = new Button();
const textField = new TextField();
const checkBox = new Checkbox();

//Call the methods

button.render();
button.handleEvent();

textField.render();
textField.handleEvent();

checkBox.render();
checkBox.handleEvent();
