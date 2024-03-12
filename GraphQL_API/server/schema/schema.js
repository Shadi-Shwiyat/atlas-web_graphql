// A graphql schema that imports
// different types

const { GraphQLObjectType, GraphQLString, GraphQLInt } = require('graphql');

// Define TaskType
const TaskType = new GraphQLObjectType({
  name: 'Task',
  fields: {
    id: { type: GraphQLString },
    title: { type: GraphQLString },
    weight: { type: GraphQLInt },
    description: { type: GraphQLString },
  },
});

module.exports = { TaskType };
