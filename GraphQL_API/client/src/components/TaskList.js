import React from "react";
import { useState } from "react";
import { graphql } from "react-apollo";
import gql from "apollo-boost";

// components
import TaskDetails from './TaskDetails';

// Define the GraphQL query
const getTasksQuery = gql`
  {
    tasks {
      id
      title
    }
  }
`;

function TaskList(props) {
  
  const [state, setState] = useState({
    selected: null
  });

  console.log(props);

  return ( 
    <div>
      <ul id="task-list">
        {/* Task list will be populated here */}
      </ul>
      <TaskDetails/>
    </div>
  );
}

// Bind the query to the component
export default graphql(getTasksQuery)(TaskList);
