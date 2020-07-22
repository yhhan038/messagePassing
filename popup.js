document.getElementById("send").onclick = function() {
  var msg = $('#msg').val();
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {cmd: msg}, function(response) {
            $('#result').val(response.result);
        });
    });
}