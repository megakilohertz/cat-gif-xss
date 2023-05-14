window.setInterval(cat, 1000);

function cat() {
  let img = document.createElement("img");
  img.src = gifUrl();
  img.style.display = "block";
  img.style.position = "fixed";
  img.style.z_index = 1000;
  img.style.width = "10vw";
  img.style.left = Math.floor(Math.random() * 90) + "vw";
  img.style.bottom = Math.floor(Math.random() * 90) + "vh";
  document.getElementById("history").appendChild(img);
}

function gifUrl() {
  let rand = Math.floor(Math.random() * 7);
  switch (rand) {
    case 2:
      return "https://media.discordapp.net/attachments/1012944039735214090/1097012595040452638/look_him_up.gif";
    case 3:
      return "https://media.tenor.com/YBIqWVj7ngsAAAAd/cat-memes.gif";
    case 4:
      return "https://media.tenor.com/H8sAslrgHQoAAAAS/persian-kitten.gif";
    case 5:
      return "https://media.tenor.com/bRCq925fqQcAAAAd/but-heres-the-kicker.gif";
    case 6:
      return "https://media.tenor.com/dKF7Y0CetwsAAAAC/but-heres.gif";
    default:
      return "https://media.discordapp.net/attachments/709554232021221420/1068692545464451162/rapidsave.com_rt8fff2q0lea1.gif";
  }
}
