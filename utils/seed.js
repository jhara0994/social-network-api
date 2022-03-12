const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { getRandomName } = require('./data');
const { getRandomEmail } = require('./data');
const { getRandomThoughts } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('Connected to MongoDB')

    await User.deleteMany({})

    await Thought.deleteMany({})

    const users = []
    const thoughts = getRandomThoughts(5)

    for (let i = 0; i < 5; i++) {
        const username = getRandomName() + [Math.floor(Math.random() * 5)]
        const email = getRandomEmail()

        users.push({
            username,
            email,
            thoughts,
        })
    }

    await Thought.collection.insertOne({
        thoughtText: "There's a snake in my boot",
        username: [...users],
    })

    console.table(users);
    console.table(thoughts);
    console.info('Seeding complete!')
    process.exit(0)
})
