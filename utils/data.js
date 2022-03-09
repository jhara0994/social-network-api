const firstName = [
    'Aaron',
    'Aaron-James',
    'Abdisalam',
    'Abdul',
    'Abdul-Aziz',
    'Dale',
    'Jim',
    'Kobe',
    'Timbo',
    'Yves',
    'Zhuo',
    'Zi',
    'Jared',
    'Courtney',
    'Gillian',
]

const lastName = [
    'Abdul-Jabar',
    'Bryant',
    'Earnhardt',
    'Haralson',
    "O'neil",
    "Stewart",
    'Zhong',
    'Zidane',
    'Larson',
    'Gordon',
]

const thoughts = [
    'Cars on the moon',
    'Racing at every level',
    'Ocean animals are the best',
    "What's next?",
    'Show me the money',
]

const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)]

const getRandomName = () => {
    `${getRandomArrItem(firstName)} ${getRandomArrItem(lastName)}`
}

const getRandomThoughts = (int) => {
    const results = []
    for(let i = 0; i < int; i++) {
        results.push({
            thoughtContent: getRandomArrItem(thoughts),
        })
    }
    return results;
}

module.exports = { getRandomName, getRandomThoughts }