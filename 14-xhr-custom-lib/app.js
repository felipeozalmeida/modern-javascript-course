var http = new XHR();

// GET post
// http.get(
//     "https://jsonplaceholder.typicode.com/posts/1",
//     function(err) {
//         console.log(err);
//     },
//     function(res) {
//         console.log(res.data);
//     }
// );

// GET posts
// http.get(
//     "https://jsonplaceholder.typicode.com/posts",
//     function(err) {
//         console.log(err);
//     },
//     function(res) {
//         console.log(res.data);
//     }
// );

var body = {
    title: "Modern development with Vue and Typescript",
    body: "Or how a tiny framework has made it into the giants",
    userId: 1
}

// http.post(
//     "https://jsonplaceholder.typicode.com/posts",
//     body,
//     function(err) {
//         console.log(err);
//     },
//     function(res) {
//         console.log(res.data);
//         postId = res.data.id;
//     }
// );

http.put(
    "https://jsonplaceholder.typicode.com/posts/1",
    body,
    function(err) {
        console.log(err);
    },
    function(res) {
        console.log(res.data);
    }
);
