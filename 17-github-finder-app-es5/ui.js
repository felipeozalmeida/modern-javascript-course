function UI() {
    this.container = document.querySelector('#searchContainer');
    this.search = document.querySelector('#search');
    this.profile = document.querySelector('#profile');
}

UI.prototype.clearAlert = function () {
    var alert = document.querySelector('#alert');
    if (alert) {
        alert.remove();
    }
}

UI.prototype.showAlert = function (message, className) {
    this.clearAlert();
    var div = document.createElement('div');
    div.id = 'alert';
    div.className = className;
    div.appendChild(document.createTextNode(message));
    this.container.insertBefore(div, this.search);
    setTimeout(this.clearAlert, 3000);
}

UI.prototype.clearProfile = function () {
    this.profile.innerHTML = '';
}

UI.prototype.showProfile = function (user) {
    this.profile.innerHTML = '' +
        '<div class="card card-body mb-3">' +
            '<div class="row">' +
                '<div class="col-md-3">' +
                    '<img' +
                        'class="img-fluid mb-2"' +
                        'src="' + user.avatar_url + '"' +
                    '>' +
                    '<a' +
                        'class="btn btn-primary btn-block mb-4"' +
                        'href="' + user.html_url + '"' +
                        'target="_blank"' +
                        '>View Profile</a' +
                    '>' +
                '</div>' +
                '<div class="col-md-9">' +
                    '<span class="badge badge-primary">' +
                        'Public Repos: ' + user.public_repos +
                    '</span>' +
                    '<span class="badge badge-secondary">' +
                        'Public Gists: ' + user.public_gists +
                    '</span>' +
                    '<span class="badge badge-success">' +
                        'Followers: ' + user.followers +
                    '</span>' +
                    '<span class="badge badge-info">' +
                        'Following: ' + user.following +
                    '</span>' +
                    '<br><br>' +
                    '<ul class="list-group">' +
                        '<li class="list-group-item">' +
                            'Company: ' + user.company +
                        '</li>' +
                        '<li class="list-group-item">' +
                            'Website/Blog: ' + user.blog +
                        '</li>' +
                        '<li class="list-group-item">' +
                            'Location: ' + user.location +
                        '</li>' +
                        '<li class="list-group-item">' +
                            'Member Since: ' + user.created_at +
                        '</li>' +
                    '</ul>' +
                '</div>' +
            '</div>' +
        '</div>' +
        '<h3 class="page-heading mb-3">Latest Repos</h3>' +
        '<div id="repos"></div>' +
    '';
}
