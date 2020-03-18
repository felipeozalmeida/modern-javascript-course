import { Utils } from "./utils.js";

export default class HTTP {
    static get(url) {
        return new Promise((resolve, reject) => {
            fetch(url)
                .then(response => Utils.handleErrors(response))
                .then(validResponse => validResponse.json())
                .then(json => resolve(json))
                .catch(error => reject(error));
        });
    }
    static post(url, body) {
        return new Promise((resolve, reject) => {
            fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) })
                .then(response => Utils.handleErrors(response))
                .then(validResponse => validResponse.json())
                .then(json => resolve(json))
                .catch(error => reject(error));
        })
    }
    static put(url, body) {
        return new Promise((resolve, reject) => {
            fetch(url, { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) })
                .then(response => Utils.handleErrors(response))
                .then(validResponse => validResponse.json())
                .then(json => resolve(json))
                .catch(error => reject(error));
        })
    }
    static delete(url) {
        return new Promise((resolve, reject) => {
            fetch(url, { method: "DELETE" })
                .then(response => Utils.handleErrors(response))
                .then(validResponse => validResponse.json())
                .then(json => resolve(json))
                .catch(error => reject(error));
        });
    }
}
