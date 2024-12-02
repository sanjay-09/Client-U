import { graphQL } from "@/Client/graphQlClient";
import { createTweetMutation } from "@/graphql/Mutation/tweet";
import { getAllTweets } from "@/graphql/query/tweet";
import { CreateTweetData } from "@/src/gql/graphql";


import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import toast from "react-hot-toast";


export const useCreateTweet=()=>{
    const queryClient=useQueryClient();
    const mutation=useMutation({
        mutationFn:(payload:CreateTweetData)=>graphQL.request(createTweetMutation,{payload}),
        onMutate:()=>toast.loading("tweet is getting created...",{id:"2"}),
        onSuccess:()=>{
            queryClient.invalidateQueries({queryKey:["all-tweets"]})
            toast.success("tweet created successfully",{id:"2"});
        }
    })
    return mutation;
}

export const useGetAllTweet=()=>{

    const query=useQuery(

    {
        queryKey: ['all-tweets'], 
        queryFn:()=>graphQL.request(getAllTweets)
  
    }
    )
    return{
        ...query,
        tweets:query.data?.getAllTweets
        
    }

}