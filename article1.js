setTimeout(function(){
            alert("Au trecut 20 de secunde, citesti articolul?");
          },
          20000);

document.getElementById("italic").addEventListener("click", changeFontToItalic);

function changeFontToItalic() {
  let h3 = document.querySelector('h3');
  let computedStyle = window.getComputedStyle(h3);
  para = document.getElementsByClassName('para');
  for (p of para) {
    p.style.fontStyle = computedStyle.getPropertyValue('font-style');
  }
}

function randomChangeBackground() {
  const colors = ["red", "orange", "#968b08", "green", "blue", "purple"];
  var choice = Math.floor(Math.random() * 6);
  ar = document.getElementById("ar");
  ar.style.backgroundColor = colors[choice];
}

var rc = setInterval(randomChangeBackground, 2400);
