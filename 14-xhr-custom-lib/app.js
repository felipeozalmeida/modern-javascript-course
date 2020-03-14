var http = new XHR();

http.get(
    "https://jsonplaceholder.typicode.com/posts",
    function(err) {
        console.log(err);
    },
    function(res) {
        console.log(res.data);
    }
);
