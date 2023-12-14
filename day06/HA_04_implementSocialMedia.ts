/*
Assignment 3: Social Media Platform Features (TypeScript)
 
Objective:
Practice using interfaces with multiple implementation
 
Instructions:
1. create an interface `SocialMediaFeature` with a method `sharePost()`.
2. Export the both SocialMediaFeature and UIComponent (From Assignment2)
2. Create `Post`, `Comment`, and `Like` classes and implement the `SocialMediaFeature` interface 
   and UIcomponent
4. Create instances of `Post`, `Comment`, and `Like` and Call the methods to render, handle events, 
   and share posts in a social media platform application.
*/

import { SocialMediaFeature } from "./HA_04_interfaceSocialMedia";

import { UIComponent } from "./HA_03_interfaceUiComponent";

class Comment implements SocialMediaFeature, UIComponent{

    render(): void {
        console.log("Write a Comment");
    }

    handleEvent(): void {
        console.log("Handle inappropriate Comments warning");
    }

    sharepost(): void {
        console.log("Share a Comment");
    }

}

class Post implements SocialMediaFeature, UIComponent{

    render(): void {
        console.log("Write a Post"); 
    }

    handleEvent(): void {
        console.log("Handle inappropriate Post pop-up");     

    }

    sharepost(): void {
        console.log("Share a Post");
    }


}

class Like implements SocialMediaFeature, UIComponent{

    render(): void {
        console.log("Click Like button");
    }

    handleEvent(): void {
        console.log("Handle Like button not working pop-up");
    }

    sharepost(): void {
        console.log("Like and share the video");
    }
}

const comments = new Comment();
const posts = new Post();
const likes = new Like();

comments.render();
comments.handleEvent();
comments.sharepost();

posts.render();
posts.handleEvent();
posts.sharepost();

likes.render();
likes.handleEvent();
likes.sharepost();