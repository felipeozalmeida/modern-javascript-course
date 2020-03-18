// var http = new XHR();
import http from "./lib.js";

// Example object for POST and PUT operations
const body = {
    title: "Modern development with Vue and Typescript",
    body: "Or how a tiny framework has made it into the giants",
    userId: 55
}

// GET post
// http.get("https://jsonplaceholder.typicode.com/posts/1")
//     .then(res => console.log(res))
//     .catch(err => console.log(err));

// GET posts
// http.get("https://jsonplaceholder.typicode.com/posts")
//     .then(res => console.log(res))
//     .catch(err => console.log(err));

// POST post (:P)
// http.post("https://jsonplaceholder.typicode.com/posts", body)
//     .then(res => console.log(res))
//     .catch(err => console.log(err));

// PUT post
http.put("https://jsonplaceholder.typicode.com/posts/1", body)
    .then(res => console.log(res))
    .catch(err => console.log(err));

// http.delete(
//     "https://jsonplaceholder.typicode.com/posts/1",
//     function(err) {
//         console.log(err);
//     },
//     function(res) {
//         console.log("Post deleted");
//     }
// );
