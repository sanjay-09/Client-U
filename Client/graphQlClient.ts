import { gql, GraphQLClient } from 'graphql-request'

const client=typeof window !== undefined;
export const graphQL=new GraphQLClient("http://localhost:3003/graphql",{
    headers:()=>({
        Authorization:client ? `Bearer ${window.localStorage.getItem("token")}` :""
    })

});
