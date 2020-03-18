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
    // put(url, body, errorCallback, successCallback) {
    //     this.http.open("PUT", url);
    //     this.http.setRequestHeader("Content-type", "application/json; charset=UTF-8");
    //     this.http.onload = function() {
    //         if (this.status >= 200 && this.status < 300) {
    //             return successCallback({
    //                 data: JSON.parse(this.response)
    //             });
    //         } else {
    //             return errorCallback({
    //                 status: this.status
    //             });
    //         }
    //     };
    //     this.http.send(JSON.stringify(body));
    // }
    // delete(url, errorCallback, successCallback) {
    //     this.http.open("DELETE", url);
    //     this.http.onload = function() {
    //         if (this.status >= 200 && this.status < 300) {
    //             return successCallback({
    //                 data: JSON.parse(this.response)
    //             });
    //         } else {
    //             return errorCallback({
    //                 status: this.status
    //             });
    //         }
    //     };
    //     this.http.send();
    // }
}
