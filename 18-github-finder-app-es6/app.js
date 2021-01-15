import { Github } from './github.js';
import { UI } from './ui.js';

const github = new Github();
const ui = new UI();
let timeoutId = null;

function getRepos(user) {
    github.getRepos(user)
        .then(response => ui.showRepos(response.data))
        .catch(() => ui.showAlert('Repos not found.'));
}

function getUser(user) {
    return new Promise((resolve) => {
        timeoutId = setTimeout(() => {
            github.getUser(user)
                .then(response => {
                    ui.showProfile(response.data);
                    resolve();
                })
                .catch(() => ui.showAlert('User not found.'))
        }, 1000);
    });
}

function handleSearchUserInput(e) {
    clearTimeout(timeoutId);

    if (e.target.value) {
        getUser(e.target.value).then(() => getRepos(e.target.value));
    } else {
        ui.clearProfile();
        ui.clearRepos();
    }
}

document.querySelector('#searchUser').addEventListener('input',
        handleSearchUserInput);
