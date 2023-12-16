const { User, Thought } = require('../models/index');
// Sample user data
const userData = [
    {
      username: 'user1',
      email: 'user1@example.com',
      thoughts: [],
      friends: []
    },
    {
      username: 'user2',
      email: 'user2@example.com',
      thoughts: [],
      friends: []
    },
    {
        username: 'user3',
        email: 'user3@example.com',
        thoughts: [],
        friends: []
      },
  
  ];
  
  // Sample thought data with reactions
  const thoughtData = [
    {
      thoughtText: 'This is a thought by user1',
      username: 'user1',
      reactions: [
        {
          reactionBody: 'Interesting!',
          username: 'user2' 
        }
      ]
    },
    {
      thoughtText: 'Another thought by user2',
      username: 'user2',
      reactions: [
        {
          reactionBody: 'Agreed!',
          username: 'user1'
        },
        {
          reactionBody: 'Nice one!',
          username: 'user1'
        }
      ]
    },
    {
        thoughtText: ' thought by user',
        username: 'user3',
        reactions: [
          {
            reactionBody: 'mmmhh!',
            username: 'user1' 
          },
          {
            reactionBody: 'Nice one!',
            username: 'user2'
          }
        ]
      },
  ];
  

  module.exports = { userData, thoughtData };

  