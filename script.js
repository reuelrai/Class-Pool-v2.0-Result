const data = {
    "Mandip Shrestha": ["Helpful", "OG BHEDIYA", "Ramro xa", "Sojo xa", "Toppe", "Stat ko champ", "Handsome"],
    "Nikita Chaudary": ["Kind", "Cute", "HOMEWORK SOURCE"],
    "Muskan Rajbanshi": ["Helpful", "NIRAJ KO FAV STUDENT"],
    "Avishek Sigdel": ["LUND", "I want him to talk with me"],
    "Bigyan Sapkota": ["BALLER"],
    "Bipin Dawadi": ["Grow Up!!", "energetic fellow", "Yo manxe Ko harek sentence paxi pabitra sabda niklikxa","Bipin dawadi"],
    "Jenisha Shrestha": ["SILENT KILLER", "Why always Rizan lai Mafia banau ne?"],
    "Shristi Budha Magar": ["CUTENESS OVERLOAD", "SHRISTI WIFE MATERIAL!? MAGAR"],
    "Rakshya Shrestha": ["Next Archana Puran Singh"],
    "Rijan Riajl": ["KASSAM K SAATHI", "Same goes to you :( why?", "Height"],
    "Ritesh Chaudary": ["THARU SATHI JINDABAD"],
    "Reuel Rai": ["TOURIST", "Ruleeeeeee"],
    "Sakshyam Maharjan": ["BICEPS FLEX HANAM NA, KHAI TA"],
    "Srestaa Shrestha": ["You know", "Those eyes", "TOPPER IN THE HOUSE!", "DAMNN SHE'S GORGEOUS"],
    "Samyog Sapkota": ["INTELLIGENT MF","Gede"],
    "Sandeep Lamichhane": ["ALL ROUNDER"],
    "Smaran Bajracharya": ["ETTIKO HUNU PARYO"],
    "Sudip Bhandari": ["BHADARI BHANJA, WHAT'S UP!?"],
    "Umanga Magar": ["EXCUSE MEEE......HAVE YOU SEEN MY BOYFRIEND?"],
    "Aayusha Shresthacharya Baniya": ["SPECS + LONG NAME = FUTURE PRIME MINISTER"],
    "Asmita Silwal": ["class kai sojo"],
    "Bhumi Pradhan": ["HERE COMES THE CR! ROLI'S FAV! BOOOOM BOOOOM", "If 'Cool Girl' was a person that would be her"],
    "Aayush Giri": ["HEEEEEEYYYYYYYYYYYYYYYY!!!!","LODU"]
};

// Updated vote counts based on the provided list
const votes = {
    "Mandip Shrestha": 7,
    "Nikita Chaudary": 3,
    "Muskan Rajbanshi": 2,
    "Avishek Sigdel": 2,
    "Bigyan Sapkota": 1,
    "Bipin Dawadi": 4,
    "Jenisha Shrestha": 2,
    "Shristi Budha Magar": 2,
    "Rakshya Shrestha": 1,
    "Rijan Riajl": 3,
    "Ritesh Chaudary": 1,
    "Reuel Rai": 2,
    "Sakshyam Maharjan": 1,
    "Srestaa Shrestha": 4,
    "Samyog Sapkota": 2,
    "Sandeep Lamichhane": 1,
    "Smaran Bajracharya": 1,
    "Sudip Bhandari": 1,
    "Umanga Magar": 1,
    "Aayusha Shresthacharya Baniya": 1,
    "Asmita Silwal": 1,
    "Bhumi Pradhan": 2,
    "Aayush Giri": 2
};

function createPoll() {
    const pollContainer = document.getElementById('poll');
    pollContainer.innerHTML = ''; // Clear existing poll items

    // Sort names by votes in descending order
    const sortedNames = Object.keys(votes).sort((a, b) => votes[b] - votes[a]);

    sortedNames.forEach(name => {
        const pollItem = document.createElement('div');
        pollItem.classList.add('poll-item');
        pollItem.innerHTML = `
            <span class="name">${name} (${votes[name]} votes)</span>
            <div class="comment-box">
                <strong>Top Comments:</strong>
                ${data[name].map(comment => `<div class="comment">${comment}</div>`).join('')}
            </div>
        `;
        pollContainer.appendChild(pollItem);
    });
}

// Initialize the poll
createPoll();
