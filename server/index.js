const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const { getCompliment, getFortune, getAffirmation, setGoal, getMoodBooster } = require('./controller');

app.get("/api/compliment", getCompliment);
app.get("/api/fortunecookie", getFortune);
app.get("/api/affirmation", getAffirmation);
app.post("/api/goal", setGoal);
app.get("/api/mood/:mood", getMoodBooster);

app.listen(4000, () => console.log("Server running on 4000"));