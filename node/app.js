const express = require('express');
const app = express();
const bodyParser = express.json();
const cors = require("cors");

app.use(cors());
app.use(bodyParser);
const users = [];
app.post("/register", function(request, response) {
  const body = request.body;
  users.push(body);
  response.sendStatus(200);
})
app.post("/login", function(request, response) {
  const {email, password} = request.body;
  var correctMail = 0;
  console.log(email);
  console.log(password);
  for(var user of users) {
    if(user.email == email && user.password == password) {
      correctMail = 1;
    }
  }
  if(correctMail == 1) {
    response.sendStatus(200);
  }
  else {
    response.sendStatus(401);
  }
})
app.listen(3000);
console.log('works');
