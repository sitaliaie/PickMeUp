let activeShiba = document.getElementById('activeShiba');

activeShiba.onclick = function(element) {
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.onUpdated.addListener(
    	tabs[0].id,
    	{code: 'document.getElementById("Shiba").style.display = "none";'});
	});
};