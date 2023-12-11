const complimentBtn = document.getElementById("complimentButton");
const fortunecookieBtn = document.getElementById("fortunecookieButton");
const affirmationButton = document.getElementById("affirmationButton");
const goalInput = document.getElementById("goalInput");
const setGoalButton = document.getElementById("setGoalButton");
const getGoalButton = document.getElementById("getGoalButton");
const moodSelector = document.getElementById("moodSelector");
const moodButton = document.getElementById("moodButton");


const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortunecookie/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

complimentBtn.addEventListener('click', getCompliment);
fortunecookieBtn.addEventListener('click', getFortune);


const getAffirmation = () => {
    axios.get("http://localhost:4000/api/affirmation/")
        .then(res => {
            const affirmation = res.data;
            alert(affirmation);
        });
};

affirmationButton.addEventListener('click', getAffirmation);

let userGoal = "";

setGoalButton.addEventListener('click', () => {
    userGoal = goalInput.value;
    alert(`Goal set: ${userGoal}`);
});

getGoalButton.addEventListener('click', () => {
    if (userGoal !== "") {
        axios.post("http://localhost:4000/api/goal", { goal: userGoal })
            .then(res => {
                const progress = res.data;
                alert(`${userGoal} Progress: ${progress}%`);
            });
    } else {
        alert("Please set a goal first.");
    }
});

const getMoodBooster = () => {
    const selectedMood = moodSelector.value;

    axios.get(`http://localhost:4000/api/mood/${selectedMood}`)
        .then(res => {
            const moodBooster = res.data;
            alert(moodBooster);
        });
};

moodButton.addEventListener('click', getMoodBooster);