let activateIcon = document.getElementById('activateIcon');

activateIcon.onclick = function(element) {
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
    	tabs[0].id,
    	{code: 'document.getElementById("Icon").style.display = "none";'});
	});
};