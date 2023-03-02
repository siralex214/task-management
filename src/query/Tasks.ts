import { gql } from "@apollo/client";

export const GET_TASKS = gql`
  query Tasks {
    tasks {
      createdAt
      description
      id
      status
      title
      updatedAt
    }
  }
`;

export const GET_TASKS_BY_USER = gql`
  query TasksByUser {
    tasksByUser {
      id
      idUser
      title
      description
      status
      createdAt
      updatedAt
    }
  }
`;
