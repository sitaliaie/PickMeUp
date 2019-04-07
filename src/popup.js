let toggleShiba = document.getElementById('toggleShiba');

toggleShiba.onclick = function(element) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
      tabs[0].id,
      {code: 'document.getElementById("Shiba").style.display = "none";'});
  });
};