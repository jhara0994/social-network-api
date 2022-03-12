const userName = [
    'metabit64',
    'LadyX379',
    'moneyMan4eva',
    'neoIsGoat',
    '2good8teen',
    'techlord98',
    'JsLivin',
    'StyleChief',
],

const email = [
    '@aol.com',
    '@yahoo.com',
    '@gmail.com',
    '@bellsouth.net',
    '@hotmail.net',
],


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
]

const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)]

const getRandomName = () => {
    `${getRandomArrItem(userName)}`
}

const getRandomEmail = () => {
    `${getRandomName}` + `${getRandomArrItem(email)}`
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

module.exports = { getRandomName, getRandomEmail, getRandomThoughts }