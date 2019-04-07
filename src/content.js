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
img.style.zIndex = 200;
// add to the content of a document
document.body.appendChild(img);
console.log("I am very cry, and this is hard");

let curr = Math.floor(Math.random() * 31);
let prev = curr;
window.addEventListener('load', function load(event) {
    // Randomly pick a phrase on-click
    document.getElementById('Shiba').onclick = function() {
        // Display Message
        let prevID = "hiddenMessage" + prev;
        let currID = "hiddenMessage" + curr;
        if(document.getElementById(prevID).style.display != 'block') {
            document.getElementById(currID).style.display = 'block';
            setTimeout(function(){ document.getElementById(currID).style.display = "none"; }, 6000);
        }
        prev = curr;
        while(prev == curr) {
            curr = Math.floor(Math.random() * 31);
        }
    };
});

// idk why but the program hates this
// let quotes = [
// 	{src: chrome.extension.getURL("bubbles/one.png")},
// 	{src: chrome.extension.getURL("bubbles/two.png")},
// 	{src: chrome.extension.getURL("bubbles/three.png")}
// ];

let quotes = new Array(31);
for(let i = 0; i < quotes.length; i++) {
	quotes[i] = document.createElement("img");
	quotes[i].id = "hiddenMessage" + i;
    quotes[i].style.display = "none";
    quotes[i].style.position = "fixed";
    quotes[i].style.left = "175px";
    quotes[i].style.bottom = "175px";
    quotes[i].style.height = "130px";
	quotes[i].style.width = "auto";
    quotes[i].style.zIndex = 200;
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
quotes[9].src = chrome.extension.getURL("bubbles/ten.png");
quotes[10].src = chrome.extension.getURL("bubbles/eleven.png");
quotes[11].src = chrome.extension.getURL("bubbles/twelve.png");
quotes[12].src = chrome.extension.getURL("bubbles/thirteen.png");
quotes[13].src = chrome.extension.getURL("bubbles/fourteen.png");
quotes[14].src = chrome.extension.getURL("bubbles/fifteen.png");
quotes[15].src = chrome.extension.getURL("bubbles/sixteen.png");
quotes[16].src = chrome.extension.getURL("bubbles/seventeen.png");
quotes[17].src = chrome.extension.getURL("bubbles/eighteen.png");
quotes[18].src = chrome.extension.getURL("bubbles/nineteen.png");
quotes[19].src = chrome.extension.getURL("bubbles/twenty.png");
quotes[20].src = chrome.extension.getURL("bubbles/tone.png");
quotes[21].src = chrome.extension.getURL("bubbles/ttwo.png");
quotes[22].src = chrome.extension.getURL("bubbles/tthree.png");
quotes[23].src = chrome.extension.getURL("bubbles/tfour.png");
quotes[24].src = chrome.extension.getURL("bubbles/tfive.png");
quotes[25].src = chrome.extension.getURL("bubbles/tsix.png");
quotes[26].src = chrome.extension.getURL("bubbles/tseven.png");
quotes[27].src = chrome.extension.getURL("bubbles/teight.png");
quotes[28].src = chrome.extension.getURL("bubbles/tnine.png");
quotes[29].src = chrome.extension.getURL("bubbles/thirty.png");
quotes[30].src = chrome.extension.getURL("bubbles/thirtyone.png");
