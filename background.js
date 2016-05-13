console.log(chrome.extension.getViews());
chrome.browserAction.onClicked.addListener(function(tab) {
    console.log("wow!")
    chrome.tabs.executeScript(null, {file: "script_to_execute.js"});
});
