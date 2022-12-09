
var host = 'ws://sleepy-reef-66846.herokuapp.com'
var ws = new WebSocket(host);

ws.onopen = function () {
  document.querySelector('#new-chat-form').addEventListener('submit', function (e) {
    e.preventDefault()
    ws.send(document.querySelector('[name="new-chat"]').value);
  });
};

ws.onmessage = function (msg) {
  const data = JSON.parse(msg.data)
  document.querySelector('#chat-responses').innerHTML += `<li>${data.name}: ${data.data}</li>`;
};
