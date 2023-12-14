"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var Comment = /** @class */ (function () {
    function Comment() {
    }
    Comment.prototype.render = function () {
        console.log("Write a Comment");
    };
    Comment.prototype.handleEvent = function () {
        console.log("Handle inappropriate Comments warning");
    };
    Comment.prototype.sharepost = function () {
        console.log("Share a Comment");
    };
    return Comment;
}());
var Post = /** @class */ (function () {
    function Post() {
    }
    Post.prototype.render = function () {
        console.log("Write a Post");
    };
    Post.prototype.handleEvent = function () {
        console.log("Handle inappropriate Post pop-up");
    };
    Post.prototype.sharepost = function () {
        console.log("Share a Post");
    };
    return Post;
}());
var Like = /** @class */ (function () {
    function Like() {
    }
    Like.prototype.render = function () {
        console.log("Click Like button");
    };
    Like.prototype.handleEvent = function () {
        console.log("Handle Like button not working pop-up");
    };
    Like.prototype.sharepost = function () {
        console.log("Like and share the video");
    };
    return Like;
}());
var comments = new Comment();
var posts = new Post();
var likes = new Like();
comments.render();
comments.handleEvent();
comments.sharepost();
posts.render();
posts.handleEvent();
posts.sharepost();
likes.render();
likes.handleEvent();
likes.sharepost();
