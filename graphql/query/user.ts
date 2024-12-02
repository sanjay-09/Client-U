
import {graphql} from "@/src/gql"
export const getJWTToken = graphql(`
  query ExampleQuery($token: String!) {
    getJWTTokenFromGoogleToken(token: $token)
  }
`);


export const getCurrentUser=graphql(`
    query ExampleQuery2 {
  getCurrentUser {
    id
    name
    email
    profileImage
  }
}
  `);

export const getUserBasedOnId=graphql(`
    query GetUserById($id: ID!) {
  getUserById(id: $id) {
    id
    name
    email
    profileImage
    tweet {
      id
      content
      imageUrl
         author {
         id
        profileImage
      }
      
    }
  }
}
`);