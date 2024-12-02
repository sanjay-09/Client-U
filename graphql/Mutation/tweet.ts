import {graphql} from "@/src/gql"

export const createTweetMutation=graphql(`
    mutation Mutation($payload: CreateTweetData!) {
  createTweet(payload: $payload) {
    id
    content
    imageUrl
    author {
      id
      email
      name
    }
  }
}
    
    
`);