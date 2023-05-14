if (typeof catvax == "undefined") 
  window.setInterval(cat, 1000);
else
  console.log("cats spawned!");

function cat() {
  let img = document.createElement("img");
  img.src = gifUrl();
  img.style.display = "block";
  img.style.position = "fixed";
  img.style.z_index = 1000;
  img.style.width = "10vw";
  img.style.left = Math.floor(Math.random() * 90) + "vw";
  img.style.bottom = Math.floor(Math.random() * 90) + "vh";
  document.getElementsByTagName('html')[0].appendChild(img);
}

function gifUrl() {
  let gifs = 10;
  return "https://megakilohertz.github.io/cat-gif-xss/gifs/" + Math.floor(Math.random() * (gifs + 1)) + ".gif";
}
