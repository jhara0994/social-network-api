const userName = [
    'metabit64',
    'LadyX379',
    'moneyMan4eva',
    'neoIsGoat',
    '2good2beTrue',
    'techlord98',
    'JsLivin',
    'StyleChief',
]

const friendName = [
    'KyleT',
    'JordanB',
    'CrystalA',
    'BarryS',
]

const email = [
    '@aol.com',
    '@yahoo.com',
    '@gmail.com',
    '@bellsouth.net',
    '@hotmail.net',
]


const thoughts = [
    'Cars on the moon',
    'Racing at every level',
    'Ocean animals are the best',
    "What's next?",
    'Show me the money',
    'We are, We are......Champions',
    'When will ancient aliens reveal themselves?',
    'Tomorrow is the start of the rest of your life',
    'Here I go again on my own',
    'Next stock crash date',
    'Ideas for new technology',
    "The next space race"
]

const reactions = [
    "thumbs-up",
    "smiley",
    "mad",
    "sad",
    "ecstatic",
    "happy",
    "furious",
    "thinking",
    "inspired"
]

const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)]

const getRandomName = () => `${getRandomArrItem(userName)}`

const getRandomEmail = () => `${getRandomName()}${getRandomArrItem(email)}`

const getRandomFriends = (int) => {
    const results = []
    for(let i = 0; i < int; i++) {
        results.push({
            username: getRandomArrItem(friendName),
            email: getRandomEmail()
        })
    }
    return results;
}

const getRandomThoughts = (int) => {
    const results = []
    for(let i = 0; i < int; i++) {
        results.push({
            thoughtText: getRandomArrItem(thoughts),
        })
    }
    return results;
}

const getRandomReactions = (int) => {
    const results = []
    for(let i = 0; i < int; i++) {
        results.push({
            reactions: getRandomArrItem(reactions)
        })
    }
    return results
}

module.exports = { getRandomName, getRandomEmail, getRandomFriends, getRandomThoughts, getRandomReactions }