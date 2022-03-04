const images = ["bg1.png", "bg2.png", "bg3.png", "bg4.png", "bg5.png", "bg6.png"];
const chosenImage = images[Math.floor(Math.random() * images.length)];
const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);