var images = document.getElementsByTagName("img");
var contactValue = document.getElementById("contactValue");

const buttonPressed = e => { 
    var id = e.target.id;
    if (id == 1) {
        contactValue.innerHTML = `<h1>0852-6772-7717</h1>`;
    } else if (id == 2) {
        contactValue.innerHTML = `<h1>helmudpgbn@gmail.com</h1>`;
    } else if (id == 3) {
        contactValue.innerHTML = `<h1>Helmud Panggabean</h1>`;
    } else if (id == 4) {
        contactValue.innerHTML = `<h1>helmudpgbn / Helmud Panggabean</h1>`;
    } else if (id == 5) {
        contactValue.innerHTML = `<h1>Helmud Panggabean</h1>`;
    } else {
        contactValue.innerHTML = `<h1>ID Tidak Ditemukan!!!</h1>`;
    }
  }

  for (let image of images) {
    image.addEventListener("click", buttonPressed);
  }