var github = new Github();
var ui = new UI();
var timeoutId = null;

function getUser(user) {
    timeoutId = setTimeout(function () {
        github.getUser(
            user,
            function (response) {
                ui.showProfile(response.data);
            },
            function () {
                ui.showAlert('User not found.', 'alert alert-danger');
            }
        );
    }, 1000);
}

function handleSearchUserInput(e) {
    clearTimeout(timeoutId);

    if (e.target.value) {
        getUser(e.target.value);
    } else {
        ui.clearProfile();
    }
}
