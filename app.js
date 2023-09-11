const express = require("express");
const dayjs = require("dayjs");
const utc = require("dayjs/plugin/utc");

dayjs.extend(utc);

const app = express();

//routes
app.get("/", (req, res) => {
    res.json({ message: "Stage One API." });
  });

app.get("/api", (req, res) => {
    var slack_name = req.query.slack_name;
    var track = req.query.track;
    today = new Date()
    var current_day = today.toLocaleDateString('en-US', {weekday: 'long'});
    var utc_time = dayjs.utc().format();
    res.json({ 
        "slack_name": slack_name,
        "current_day": current_day,
        "utc_time": utc_time,
        "track": track,
        "github_file_url": "https://github.com/sa-pphire/stage-one/app.js",
        "github_repo_url": "https://github.com/sa-pphire/stage-one",
        "status_code": res.statusCode });
  });


// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});