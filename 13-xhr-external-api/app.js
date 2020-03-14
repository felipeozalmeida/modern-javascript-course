const $ = document.querySelector.bind(document);

function listJokes(e) {
  e.preventDefault();
  const xhr = new XMLHttpRequest();
  xhr.open("GET", `https://api.chucknorris.io/jokes/random/`);
  xhr.onload = function() {
    if (this.status == 200) {
      const response = JSON.parse(this.response);
      $("#joke").innerHTML = `
        <ul>
        <li><b>URL:</b> ${response.url}</li>
        <li><b>Value:</b> ${response.value}</li>
        <li><b>Created at:</b> ${response.created_at}</li>
        <li><b>Updated at:</b> ${response.updated_at}</li>
        </ul>
      `;
    }
  };
  xhr.send();
}
