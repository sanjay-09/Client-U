
import { FaArrowLeft } from "react-icons/fa";
import { useCurrentUser } from "../hooks/user";
import { graphQL } from "@/Client/graphQlClient";
import { getUserBasedOnId } from "@/graphql/query/user";
import { Tweet, User } from "@/src/gql/graphql";
import FeedCard from "./FeedCard";

const UserProfile=({data}:{data:User|null})=>{
   

    



    return(
        <>
        <div className="min-h-[200px] border-b-[1.5px] border-gray-400">
            <div className="flex  gap-4 p-2 m-2 items-center">
              <div className="text-xl">
              <FaArrowLeft/>
              </div>
              <div className="text-xl">
                <p className="font-bold ">Sanjay Singh</p>
                <h3 className="shadow-lg text-gray-400" >103 followers</h3>
              </div>
            </div>
            <div>
                {data && <img src={data.profileImage} alt="profile-image" className="w-[100px] h-[100px] rounded-full" />}
            </div>


        </div>
        {
          data?.tweet?.map((t:any,i)=>{
            return <FeedCard tweet={t} key={i}/>
          })
        }
        </>
    )
}
export default UserProfile;