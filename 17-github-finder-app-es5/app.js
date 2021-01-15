var github = new Github();
var ui = new UI();
var timeoutId = null;

function handleSearchUserInput(e) {
    clearTimeout(timeoutId);

    if (e.target.value) {
        timeoutId = setTimeout(function () {
            github.getUser(
                e.target.value,
                function (response) {
                    ui.showProfile(response.data);
                },
                function (error) {
                    console.log(error);
                }
            );
        }, 1000);
    }
}
