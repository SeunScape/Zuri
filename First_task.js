const express = require('express');

const app = express ();
app.use(express.json());

app.get("/user", (req, res) => {
    const {slack_name, track} = req.query
})

const todaysDate = new Date ();
const currentDay = todaysDate.toLocaleDateString('en-US', { weekday: 'long' });
const utcTime = currentDate.toISOString();
const githubFileUrl = "https://github.com/SeunScape/";
const githubRepoUrl = ""

app.listen(PORT, () => {
    console.log("Server Listening on PORT:", port);
  });