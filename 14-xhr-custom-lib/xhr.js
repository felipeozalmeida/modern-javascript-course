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
