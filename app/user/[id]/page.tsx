"use client"
import UserProfile from "@/app/Components/UserProfile";
import TwitterLayout from "@/app/Layout/TwitterLayout";
import { graphQL } from "@/Client/graphQlClient";
import { createTweetMutation } from "@/graphql/Mutation/tweet";
import { getUserBasedOnId } from "@/graphql/query/user";
import { User } from "@/src/gql/graphql";
import {
    QueryClient,
    QueryClientProvider,
  } from '@tanstack/react-query'
import { useEffect, useState } from "react";
interface PageProps {
    params: {
      id: string; // Matches the [id] in the file path
    };
  }

const queryClient = new QueryClient();

const Page=({ params }: PageProps)=>{
    const { id } = params;

   
     const [data,setData]=useState<User|null>(null);
     useEffect(()=>{

        fetchData();

     },[]);

     const fetchData=async()=>{

        const data=await graphQL.request(getUserBasedOnId,{id});
        //@ts-ignore
        setData(data.getUserById);
        
     }





    

    return(
        <QueryClientProvider client={queryClient}>
        <TwitterLayout>
            <UserProfile data={data}/>

        </TwitterLayout>
        </QueryClientProvider>
    )

}

export default Page;