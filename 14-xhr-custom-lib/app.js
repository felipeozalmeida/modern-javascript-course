var http = new XHR();

// http.get(
//     "https://jsonplaceholder.typicode.com/posts",
//     function(err) {
//         console.log(err);
//     },
//     function(res) {
//         console.log(res.data);
//     }
// );

const body = {
    title: "Modern development with Vue and Typescript",
    body: "Or how a tiny framework has made it into the giants",
    userId: 1
}

http.post(
    "https://jsonplaceholder.typicode.com/posts",
    body,
    function(err) {
        console.log(err);
    },
    function(res) {
        console.log(res);
    }
);
