document.getElementById("impozitCalcul").addEventListener("click", calculImpozit);

function calculImpozit() {
  var input = Number(document.getElementById("cc").value);
  var output;
  if(input < 1600) {
    output = input/200*8;
  }
  else if(input>1600 && input<2001) {
    output = input/200*18;
  }
  else if(input>2000 && input<2601) {
    output = input/200*72;
  }
  else if(input>2600 && input<3001) {
    output = input/200*144;
  }
  else if(input>3000) {
    output = input/200*290;
  }
  if(output > 0) {
    var text = "Impozitul Auto pentru un motor de " + input + " centimetri cubi este: " + output +" de lei.\n";
  }
  else {
    var text = "Va rugam introduceti capacitatea motorului in caseta de text.\n";
  }
  var p = document.createElement("p");
  var t = document.createTextNode(text);
  p.appendChild(t);
  document.getElementById("impozitRezultat").appendChild(p);
}

window.onload = function() {
  articol = document.getElementById("articol");
  articol.style.transform = "translateY(0%)";

  sus = document.getElementById("sus");
  sus.style.transform = "translateY(0%)";

  stanga = document.getElementById("stanga");
  stanga.style.transform = "translateX(0%)";

  dreapta = document.getElementById("dreapta");
  dreapta.style.transform = "translateX(0%)";

  var httpObject = new XMLHttpRequest();
  var data;
  httpObject.open('GET', 'carLuckData.json', 'TRUE');
  httpObject.send();
  httpObject.onreadystatechange = function() {
    if(httpObject.readyState == 4 && httpObject.status == 200) {
      data = JSON.parse(httpObject.responseText);
      cycleCars(data);
    }
  };
}

function cycleCars(data) {

  var rotator = document.getElementById('rotator');
    var carImages = ['carImage1.jpg', 'carImage2.jpg', 'carImage3.jpg', 'carImage4.jpg', 'carImage5.jpg', 'carImage6.jpg', 'carImage7.jpg', 'carImage8.jpg', 'carImage9.jpg', 'carImage10.jpeg'];
    var i = 0;
    var changeImage = function() {
        var len = carImages.length;
        rotator.src = carImages[i++];
        if (i == len) {
            i = 0;
        }
    };

    document.getElementById("stopCycling").addEventListener("click", stopEvent);

    var int = setInterval(changeImage, 150);

    function stopEvent() {
      clearInterval(int);
      var carImgSrc = document.getElementById("rotator").src;
      var infoDiv = document.getElementById("infoDiv");
      var info = document.createElement("h3");
      var potrivire = Math.random()*100;
      var p5 = document.createElement("p");
      var t5 = document.createTextNode("Potrivirea ta cu masina: " + potrivire.toFixed(2) + "%.");
      infoDiv.appendChild(p5.appendChild(t5));
      info.appendChild(document.createTextNode("Informatiile masinii: "));
      infoDiv.appendChild(info);
      for(let i=0;i<data.cars.length;i++) {
        if(carImgSrc == data.cars[i].carImage) {
          var p1 = document.createElement("p");
          var t1 = document.createTextNode("Nume: " + data.cars[i].carName);
          infoDiv.appendChild(p1.appendChild(t1));
          infoDiv.appendChild(document.createElement("br"));
          var p2 = document.createElement("p");
          var t2 = document.createTextNode("Capacitate Motor: " + data.cars[i].engineCapacity);
          infoDiv.appendChild(p2.appendChild(t2));
          infoDiv.appendChild(document.createElement("br"));
          var p3 = document.createElement("p");
          var t3 = document.createTextNode("An fabricatie: " + data.cars[i].year);
          infoDiv.appendChild(p3.appendChild(t3));
          infoDiv.appendChild(document.createElement("br"));
          var p4 = document.createElement("p");
          var t4 = document.createTextNode("Combustibil: " + data.cars[i].gasType);
          infoDiv.appendChild(p4.appendChild(t4));
          infoDiv.appendChild(document.createElement("br"));
        }
      }
    }
};

var time = new Date();
document.getElementById("time").innerHTML = time.toLocaleTimeString();
