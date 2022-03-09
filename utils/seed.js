const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { getRandomName, getRandomThoughts } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('Connected to MongoDB')

    await User.deleteMany({})

    await Thought.deleteMany({})

    const users = []
    const thoughts = getRandomThoughts(2)

    for (let i = 0; i < 2; i++) {
        const name = getRandomName()
        const first = name.split(' ')[0];
        const last = name.split(' ')[1];

        users.push({
            first,
            last,
            thoughts,
        })
    }
    await Thought.collection.insertOne({
        thoughtContent: "There's a snake in my boot",
        users: [...users],
    })

    console.table(users);
    console.table(thoughts);
    console.info('Seeding complete!')
    process.exit(0)
})
