chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
        console.log(request.cmd);
        if (request.cmd == "request")
            sendResponse({result: "success"});
        else
            sendResponse({result: "fail"});
});