const $ = document.querySelector.bind(document);

function handleEventListener(e) {
  console.log(`${e.type}: ${e.loaded} bytes transferred\n`);
}

function loadData() {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "data.txt");

  xhr.onprogress = handleEventListener;

  xhr.onload = function(e) {
    handleEventListener(e);
    $("#output").textContent = this.response;
  };

  xhr.onerror = handleEventListener;

  xhr.send();
}

$("#button").addEventListener("click", loadData);
