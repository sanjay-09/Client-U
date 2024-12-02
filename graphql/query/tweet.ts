import {graphql} from "@/src/gql"

export const getAllTweets=graphql(
    `
    query GetAllTweet {
  getAllTweets {
    id
    content
     imageUrl
    author {
    id
      name
      profileImage
    }
  }
}
    `
)
