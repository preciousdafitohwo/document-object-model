console.log("hello world");
console.dir(document);
const body = document.querySelector("body");
console.dir(body);

const h1 = document.querySelector("h1");
console.log(h1);

h1.textContent = "Does this really work?";
const image = document.querySelector("img");
image.src ="https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?cs=srgb&dl=daylight-environment-forest-459225.jpg&fm=jpg";
image.alt = "stunning views";
body.appendChild(image);
const h3 = document.querySelector("h3");
const h3 = document.createElement("h3");
h3.textContent = "I really hope this works";