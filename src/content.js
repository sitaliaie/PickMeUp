// Shib
let img = document.createElement("img");
img.id = "Shiba";
// manifest has the src of the image, google will get it using the extension
img.src = chrome.extension.getURL("images/koko.png");
img.style.position = "fixed";
img.style.left = 0;
img.style.bottom = "20px";
img.style.height = "175px";
img.style.width = "auto";
img.style.zIndex = 200;
// add to the content of a document
document.body.appendChild(img);
console.log("I am very cry, and this is hard");

// having issues with this in the eventListener
// probably bc the prev is getting set to curr 
// when it only needs to happen on startup
// curr bubble 
let curr = Math.floor(Math.random() * 31);
// pre bubble is current bubble at the beginning
let prev = curr;
window.addEventListener('load', function load(event) {
    // user clicks - program chooses a random index
    document.getElementById('Shiba').onclick = function() {
        // Display Message
        let idPrev = "bubble" + prev;
        let idCurr = "bubble" + curr;
        if(document.getElementById(idPrev).style.display != 'block') {
            document.getElementById(idCurr).style.display = 'block';
            setTimeout(function(){ document.getElementById(idCurr).style.display = "none"; }, 6000);
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
	quotes[i].id = "bubble" + i;
    quotes[i].style.display = "none";
    quotes[i].style.position = "fixed";
    quotes[i].style.left = "200px";
    quotes[i].style.bottom = "175px";
    quotes[i].style.height = "130px";
	quotes[i].style.width = "auto";
    quotes[i].style.zIndex = 200;
    document.body.appendChild(quotes[i]);
}

// quote images
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
