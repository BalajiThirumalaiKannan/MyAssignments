"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
//Create Classes to implement the UIComponent Interface
var Button = /** @class */ (function () {
    function Button() {
        this.myAccount = 'MyAccount Button';
    }
    Button.prototype.render = function () {
        console.log(this.myAccount);
        console.log("Save button");
        console.log("Close button");
    };
    Button.prototype.handleEvent = function () {
        console.log("Handle Exit without Save warning pop-up");
    };
    return Button;
}());
var TextField = /** @class */ (function () {
    function TextField() {
    }
    TextField.prototype.render = function () {
        console.log("Name");
        console.log("Surname");
    };
    TextField.prototype.handleEvent = function () {
        console.log("Handle max character limitation pop-up");
    };
    return TextField;
}());
var Checkbox = /** @class */ (function () {
    function Checkbox() {
    }
    Checkbox.prototype.render = function () {
        console.log("Marital Status");
    };
    Checkbox.prototype.handleEvent = function () {
        console.log("Handle multiple checkbox cannot be selected pop-up");
    };
    return Checkbox;
}());
var button = new Button();
var textField = new TextField();
var checkBox = new Checkbox();
button.render();
button.handleEvent();
textField.render();
textField.handleEvent();
checkBox.render();
checkBox.handleEvent();
