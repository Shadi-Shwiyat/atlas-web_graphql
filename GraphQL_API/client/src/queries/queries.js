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

// Task mutation query
export const addTaskMutation = gql`
  mutation($title: String!, $weight: Int!, $description: String!, $projectId: ID!) {
    addTask(title: $title, weight: $weight, description: $description, projectId: $projectId) {
      title
      id
    }
  }
`;

// Project mutation query
export const addProjectMutation = gql`
  mutation($title: String!, $weight: Int!, $description: String!) {
    addProject(title: $title, weight: $weight, description: $description) {
      title
      id
    }
  }
`;
