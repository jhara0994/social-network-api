const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { getRandomName } = require('./data');
const { getRandomEmail } = require('./data');
const { getRandomFriends } = require('./data')
const { getRandomThoughts } = require('./data');
const { getRandomReactions} = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('Connected to MongoDB')

    await User.deleteMany({})

    await Thought.deleteMany({})

    const users = []
    const thoughts =[]
    // const thoughtData = getRandomThoughts(5)
    const singleThought = getRandomThoughts(1)
    const friends = getRandomFriends(3)
    // const randomFriends = getRandomFriends(3)
    const reactions = getRandomReactions(2)

    for (let i = 0; i < 3; i++) {
        const username = getRandomName() + [Math.floor(Math.random() * 5)]
        const email = getRandomEmail()
        const thought = getRandomThoughts(5)
        

        users.push({
            username,
            email,
            thought,
            friends,
        })

        thoughts.push({
            singleThought,
            username,
            reactions,
        })
    }

    await User.collection.insertMany(users)

    await Thought.collection.insertMany(thoughts)


    console.table(users);
    console.table(thoughts);
    console.info('Seeding complete!')
    process.exit(0)
})
