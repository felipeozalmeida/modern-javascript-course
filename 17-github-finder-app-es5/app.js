var github = new Github();
var ui = new UI();
var timeoutId = null;

function getRepos(user) {
    github.getRepos(
        user,
        function (response) {
            ui.showRepos(response.data);
        },
        function () {
            ui.showAlert('Repos not found.');
        }
    );
}

function getUser(user, successCallback) {
    timeoutId = setTimeout(function () {
        github.getUser(
            user,
            function (response) {
                ui.showProfile(response.data);
                successCallback();
            },
            function () {
                ui.showAlert('User not found.');
            }
        );
    }, 1000);
}

function handleSearchUserInput(e) {
    clearTimeout(timeoutId);

    if (e.target.value) {
        getUser(e.target.value, function () {
            getRepos(e.target.value);
        });
    } else {
        ui.clearProfile();
        ui.clearRepos();
    }
}
