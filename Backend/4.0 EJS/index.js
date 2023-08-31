import express from "express";

const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });

app.get("/", (req, res) => {

    const d = new Date();
    const day = d.getDay();
    // console.log(day);

    let type = "a weekday";
    let adv = "it's time to work hard";

    if (day === 0 || day === 6) {
        type = "a weekend";
        adv = "take a chill pill";
    }

    res.render("index.ejs", {
        dayType: type,
        advice: adv
    });
});