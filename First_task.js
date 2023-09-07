const express = require('express');

const app = express ();
app.use(express.json());

app.get("/api", (req, res) => {
    const {slack_name, track} = req.query;


const todaysDate = new Date ();
const currentDay = todaysDate.toLocaleDateString('en-US', { weekday: 'long' });
const utcTime = todaysDate.toISOString();
const githubFileUrl = "https://github.com/SeunScape/";
const githubRepoUrl = "https://github.com/SeunScape/Zuri";

if (!slack_name || !track) {
    return res.status(400).json({
      error: 'Include slack_name and track in your http query',
    });
  }

res.json({
    slack_name,
    "current_day": currentDay,
    "utc_time": utcTime,
    track,
    "github_file_url": githubFileUrl,
    "github_repo_url": githubRepoUrl,
    status_code: 200
})

})
const port = process.env.PORT || 3000;
const hostname = 'example.com';

app.listen(port, () => {
    console.log(`Server Listening on ${hostname}: ${port}`);
  });