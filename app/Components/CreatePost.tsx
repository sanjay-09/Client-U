import { MdOutlineCloudUpload } from "react-icons/md"
import { useCurrentUser } from "../hooks/user"
import { useState } from "react";
import { useCreateTweet, useGetAllTweet } from "../hooks/tweet";
import FeedCard from "./FeedCard";
import { uploadImage } from "@/Utility/upload";
import toast from "react-hot-toast";

type InputType={
    text:string|"",
    imageUrl:string|""


}

const CreatePost=()=>{
      console.log("CreatePost");
    const {user}=useCurrentUser();
   
    const {tweets}=useGetAllTweet();

    const [content,setContent]=useState<InputType>({
        text:"",
        imageUrl:""
    });

    console.log("content====>",content);
 
     const {mutate}=useCreateTweet();

    const createTweetHandler=()=>{
        mutate({
            content:content.text,
            imageUrl:content.imageUrl
        });

    
        setContent({
            text:"",
            imageUrl:""
        });
    

    }
    const handleImageClick=()=>{
        const input=document.createElement("input");
        input.setAttribute("type","file");
        input.setAttribute("accept","image/*");
        input.addEventListener("change",async(e:any)=>{
            console.log(e.target.files[0]);
             toast.loading("Uploading image....",{id:"2"});
            const url=await uploadImage(e.target.files[0]);
            toast.success("Image uploaded Successfully",{id:"2"})

            
             setContent({
                ...content,
                imageUrl:url!

             })
           
            
        })
        input.click();
 
     }
    return(
        <>
        <div className='min-h-[150px] grid grid-cols-12 gap-3 border-b-[1.5px] border-gray-400 p-2 m-2'>
        <div className='col-span-1'>
            <img src={user?.profileImage} alt="" className='w-[40px] h-[40px] rounded-full' />

        </div>
        <div className='col-span-10 relative'>
            <textarea value={content.text} onChange={(e)=>{
                  const obj={
                    ...content,
                    text:e.target.value
                  }
                  setContent(obj);

            }} rows={2} className='w-[100%] border-b-[1.5px] border-gray-400 p-2  bg-transparent ' placeholder='Whats Happening......'></textarea>
            {content.imageUrl && <div className="flex justify-center items-center p-2 m-2">
                <img src={content.imageUrl} alt="image-url" className="w-[100px] h-[100px]"/>
                </div>}
           <div className='flex justify-between mt-2'>
           <MdOutlineCloudUpload className='text-2xl' onClick={handleImageClick} />
           <button className=' bg-blue-400 rounded-full px-2 py-1' onClick={createTweetHandler}>Tweet</button>

           </div>
        </div>


    </div>
    {
             tweets?.map((tweet:any,i)=>{
                 return <FeedCard tweet={tweet} key={i}/>
             })
          }
        </>
    )
}
export default CreatePost;