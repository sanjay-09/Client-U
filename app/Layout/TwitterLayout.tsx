"use client";
import { graphQL } from '@/Client/graphQlClient';
import { getJWTToken } from '@/graphql/query/user';
import { CredentialResponse, GoogleLogin } from '@react-oauth/google';
import toast, { Toaster } from 'react-hot-toast';
import { useCurrentUser } from '../hooks/user';
import { useQueryClient } from '@tanstack/react-query';
import { MdOutlineCloudUpload } from "react-icons/md";
import FeedCard from '../Components/FeedCard';
import { useGetAllTweet } from '../hooks/tweet';
import { Tweet } from '@/src/gql/graphql';
import CreatePost from '../Components/CreatePost';
import Link from 'next/link';
const TwitterLayout=({children}:{children:React.ReactNode})=>{
    const {user}=useCurrentUser();
  
    
    const queryClient=useQueryClient();
 
     const handleLogin=async(token:CredentialResponse)=>{
         const googleToken=token.credential;
         if(!googleToken){
           toast.error("token not found !!!!")
             return;
         }
         const data=await graphQL.request(getJWTToken,{token:googleToken});
         
         if(data.getJWTTokenFromGoogleToken){
             window.localStorage.setItem("token",data.getJWTTokenFromGoogleToken);
             toast.success("successfully logged into the application");
             await queryClient.invalidateQueries({queryKey:["current-user"]});
 
 
         }
 
 
     }
    return(
        <div className="flex justify-between w-[100%]  min-h-screen">
        <div className='sm:w-[25%] w-[20%] border-r relative'>
         <h1 className='text-xl text-center font-bold'><Link href="/">Twitter</Link></h1>
         {
             user && <div className='absolute bottom-0 left-14 flex gap-2'>
                 <img src={user?.profileImage} alt="image-not-found" className='w-[30px] h-[30px] rounded-md'/>
                 <h1 className='font-bold sm:block hidden'>{user.name}</h1>
                 </div>
         }
        </div>
        <div className='sm:w-[50%] w-[80%] border-r'>

       {children}
      
          
        </div>
       <div className='sm:w-[25%] sm:block hidden'>
     {
         !user  &&   <GoogleLogin onSuccess={handleLogin}/>
     }
       </div>

     </div>
    )
}

export default TwitterLayout