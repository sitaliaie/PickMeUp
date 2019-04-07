// Shib
let img = document.createElement("img");
img.id = "Shiba";
// manifest has the src of the image, google will get it using the extension
img.src = chrome.extension.getURL("images/shiba.png");
img.style.position = "fixed";
img.style.left = 0;
img.style.bottom = "20px";
img.style.height = "200px";
img.style.width = "auto";
img.style.zIndex = 1000;
// add to the content of a document
document.body.appendChild(img);
console.log("I am very cry, and this is hard");

let curr = Math.floor(Math.random() * 9);
let prev = curr;
window.addEventListener('load', function load(event) {
    // Randomly pick a phrase on-click
    document.getElementById('Shiba').onclick = function() {
        // Display Message
        let prevID = "hiddenMessage" + prev;
        let currID = "hiddenMessage" + curr;
        if(document.getElementById(prevID).style.display != 'block') {
            document.getElementById(currID).style.display = 'block';
            setTimeout(function(){ document.getElementById(currID).style.display = "none"; }, 5000);
        }
        prev = curr;
        while(prev == curr) {
            curr = Math.floor(Math.random() * 9);
        }
    };
});

// idk why but the program hates this
// let quotes = [
// 	{src: chrome.extension.getURL("bubbles/one.png")},
// 	{src: chrome.extension.getURL("bubbles/two.png")},
// 	{src: chrome.extension.getURL("bubbles/three.png")}
// ];

let quotes = new Array(9);
for(let i = 0; i < quotes.length; i++) {
	quotes[i] = document.createElement("img");
	quotes[i].id = "hiddenMessage" + i;
    quotes[i].style.display = "none";
    quotes[i].style.position = "fixed";
    quotes[i].style.left = "175px";
    quotes[i].style.bottom = "175px";
    quotes[i].style.height = "70px";
    quotes[i].style.zIndex = 1000;
    document.body.appendChild(quotes[i]);
}

quotes[0].src = chrome.extension.getURL("bubbles/one.png");
quotes[1].src = chrome.extension.getURL("bubbles/two.png");
quotes[2].src = chrome.extension.getURL("bubbles/three.png");
quotes[3].src = chrome.extension.getURL("bubbles/four.png");
quotes[4].src = chrome.extension.getURL("bubbles/five.png");
quotes[5].src = chrome.extension.getURL("bubbles/six.png");
quotes[6].src = chrome.extension.getURL("bubbles/seven.png");
quotes[7].src = chrome.extension.getURL("bubbles/eight.png");
quotes[8].src = chrome.extension.getURL("bubbles/nine.png");

