//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming


import bodyParser from "body-parser";
import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
// import bodyParser from "body-parser";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

var autho = false;


app.use(bodyParser.urlencoded({extended: true}));

function checkPass(req, res, next) {
    var pass = "ILoveProgramming";
    if (pass == req.body["password"]) {
        autho = true;
    }
    next();
}

app.use(checkPass);


app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
  });

app.post("/check", (req, res) => {
  if (autho) {
    res.sendFile(__dirname + "/public/secret.html");
  }
  else {
    res.redirect("/");
  }
})


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
