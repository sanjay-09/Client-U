"use client";
import { graphQL } from '@/Client/graphQlClient';
import { getJWTToken } from '@/graphql/query/user';
import { CredentialResponse, GoogleLogin } from '@react-oauth/google';
import toast, { Toaster } from 'react-hot-toast';
import { useCurrentUser } from '../hooks/user';
import { useQueryClient } from '@tanstack/react-query';
import { MdOutlineCloudUpload } from "react-icons/md";
import FeedCard from './FeedCard';
import { useGetAllTweet } from '../hooks/tweet';
import { Tweet } from '@/src/gql/graphql';
import CreatePost from './CreatePost';
import TwitterLayout from '../Layout/TwitterLayout';
const Header=()=>{
  

   
    return(
        <TwitterLayout>
           <CreatePost/>
        </TwitterLayout>
    )
}

export default Header;