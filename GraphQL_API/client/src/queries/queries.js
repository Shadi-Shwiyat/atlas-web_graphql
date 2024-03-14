import { gql } from "apollo-boost";

// Project query
export const getProjectsQuery = gql`
  {
    projects {
      id
      title
    }
  }
`;

// Task query
export const getTasksQuery = gql`
  {
    tasks {
      id
      title
    }
  }
`;

// Mutation query
export const addTaskMutation = gql`
  mutation($title: String!, $weight: Int!, $description: String!, $projectId: ID!) {
    addTask(title: $title, weight: $weight, description: $description, projectId: $projectId) {
      title
      id
    }
  }
`;

