const { User, Thought } = require('../models/index');
const connection = require('../config/connection');
const { userData, thoughtData } = require('./data');

// Establish MongoDB connection
connection.once('open', async () => {
  console.log('Connected to MongoDB!');

  try {
    await seedUsers();
    await seedThoughts();
    console.log('Seeding completed successfully!');
  } catch (error) {
    console.error('Seeding failed:', error);
  } finally {
    // Close the database connection
    await connection.close();
    console.log('Connection closed.');
  }
});

// Function to seed users
async function seedUsers() {
  try {

    await User.deleteMany({}); // Clear existing users
    const createdUsers = await User.insertMany(userData);
    console.log('Users seeded successfully:', createdUsers);
  } catch (error) {
    throw new Error('Error seeding users:', error);
  }
}

async function seedThoughts() {
  try {
    await Thought.deleteMany({}); // Clear existing thoughts
    const createdThoughts = await Thought.insertMany(thoughtData);
    console.log('Thoughts seeded successfully:', createdThoughts);
  } catch (error) {
    console.error('Error seeding thoughts:', error); 
    throw error; 
  }
}
