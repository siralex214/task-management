import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation Login($userInput: userInputLogin) {
    login(userInput: $userInput) {
      token
      user {
        id
        name
        username
        email
        createdAt
        deactivatedAt
        updatedAt
      }
    }
  }
`;

export const REGISTER = gql`
  mutation Mutation(
    $userInput: userInputLogin
    $registerUserInput2: userInputRegister
  ) {
    login(userInput: $userInput)
    register(userInput: $registerUserInput2) {
      id
      name
      username
      email
      createdAt
      deactivatedAt
      updatedAt
    }
  }
`;
