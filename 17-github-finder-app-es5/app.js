var github = new Github();
var timeoutId = null;

function handleSearchUserInput(e) {
    if (e.target.value) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(function () {
            github.getUser(
                e.target.value,
                function (response) {
                    console.log(response);
                },
                function (error) {
                    console.log(error);
                }
            );
        }, 1000);
    }
}
