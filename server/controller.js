module.exports = {
    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        const fortunecookie = [
            "A beautiful, smart, and loving person will be coming into your life.",
            "A dubious friend may be an enemy in camouflage.",
            "A faithful friend is a strong defense."
        ];
        let randomIndex = Math.floor(Math.random() * fortunecookie.length);
        let randomFortune = fortunecookie[randomIndex];
        res.status(200).send(randomFortune);
    },

    getAffirmation: (req, res) => {
        const affirmations = [
            "You are capable of amazing things.",
            "Your potential is limitless.",
            "Every day in every way, you are getting better and better."
        ];

        let randomIndex = Math.floor(Math.random() * affirmations.length);
        let randomAffirmation = affirmations[randomIndex];

        res.status(200).send(randomAffirmation);
    },

    setGoal: (req, res) => {
        const { goal } = req.body;

       
        let userGoalProgress = Math.floor(Math.random() * 10) + 1;

       
        userGoalProgress = Math.min(userGoalProgress, 100);

        res.status(200).send(userGoalProgress);
    },

    getMoodBooster: (req, res) => {
        const moodBoosters = {
            happy: "Dance like nobody's watching!",
            motivated: "You've got this! Keep going!",
            relaxed: "Take a deep breath and enjoy the moment.",
            creative: "Let your imagination run wild!"
        };

        const selectedMood = req.params.mood;
        const moodBooster = moodBoosters[selectedMood] || "Invalid mood selection.";

        res.status(200).send(moodBooster);
    }
};