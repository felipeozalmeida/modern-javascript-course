function XHR() {
    this.http = new XMLHttpRequest();
}

XHR.prototype.get = function(url, errorCallback, successCallback) {
    this.http.open("GET", url);
    this.http.onload = function() {
        if (this.status == 200) {
            return successCallback({
                data: JSON.parse(this.response)
            });
        } else {
            return errorCallback({
                status: this.status
            });
        }
    }
    this.http.send();
};

XHR.prototype.post = function(url, body, errorCallback, successCallback) {
    this.http.open("POST", url);
    this.http.setRequestHeader("Content-type", "application/json; charset=UTF-8");
    this.http.onload = function() {
        if (this.status >= 200 && this.status < 300) {
            return successCallback({
                data: JSON.parse(this.response)
            });
        } else {
            return errorCallback({
                status: this.status
            });
        }
    }
    this.http.send(JSON.stringify(body));
};
