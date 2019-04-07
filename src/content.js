let image = document.createElement("image");
image.id = "Shiba";
// adjust relative to window
image.style.positon = "fixed";
image.style.left = "30px";
image.style.bottom = "30px";
image.style.zstyle = "50";
// manifest has the src of the image, google will get it using the extension
image.src = chrome.extension.getURL("images/shiba.png"); 
// add to the content of a document
document.body.appendChild(image);

console.log("I am very cry, and this is hard");

// window.addEventListener('load', function load(event) {
// 	document.getElementById('Shiba').onclick = function() {
// 		console.log('page is fully loaded');
// 	};
// });

window.addEventListener('load', (event) => {
    console.log('page is fully loaded');
});