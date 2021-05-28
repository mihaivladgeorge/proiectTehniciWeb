var card = document.getElementById("card");

function openReg() {
  card.style.transform = "rotateY(-180deg)";
}

function openLogin() {
  card.style.transform = "rotateY(0deg)";
}

function checkUserInfo(e) {
e.preventDefault();
const email = document.getElementById("registerMail").value;
const password = document.getElementById("registerPass").value;
fetch("http://localhost:3000/login", {
  method:"POST",
  body:JSON.stringify({email, password}),
  headers: {
    "Content-Type": "application/json"
  }
}).then(function(response) {
  if(response.status == 200) {
    console.log("ok");
  }
  if(response.status == 401) {
    console.log("not ok");
  }
})
}
function saveUserInfo(e) {
  e.preventDefault();
  const email = document.getElementById("registerMail").value;
  const password = document.getElementById("registerPass").value;
  fetch("http://localhost:3000/register", {
    method:"POST",
    body:JSON.stringify({email, password}),
    headers:{
      "Content-Type": "application/json"
    }
  }).then(function(response) {
    if(response.status == 200) {
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);
    }
  })
}

document.getElementById("registerSubmit").addEventListener("click", saveUserInfo);
document.getElementById("loginSubmit").addEventListener("click", checkUserInfo);
