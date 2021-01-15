import { handleErrors } from './utils.js';

export class Github {
    constructor() {
        this.http = new XMLHttpRequest();
    }
    getUser(user) {
        return new Promise((resolve, reject) => {
            fetch(`https://api.github.com/users/${user}`)
                .then(response => handleErrors(response))
                .then(validResponse => validResponse.json())
                .then(json => resolve({ data: json }))
                .catch(error => reject(error));
        });
    }
    getRepos(user) {
        return new Promise((resolve, reject) => {
            fetch(`https://api.github.com/users/${user}/repos` +
                    '?per_page=5&sort=created:desc')
                .then(response => handleErrors(response))
                .then(validResponse => validResponse.json())
                .then(json => resolve({ data: json }))
                .catch(error => reject(error));
        });
    }
}
