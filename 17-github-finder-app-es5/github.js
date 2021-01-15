function Github() {
    this.http = new XMLHttpRequest();
}

Github.prototype.getUser = function (user, successCallback, errorCallback) {
    this.http.open('GET', 'https://api.github.com/users/' + user);
    this.http.onload = function () {
        var response = { data: JSON.parse(this.response), status: this.status };
        if (this.status == 200) {
            return successCallback(response);
        }
        return errorCallback(response);
    }
    this.http.send();
}
