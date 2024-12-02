import { useCurrentUser } from "../hooks/user";
import { FaComment } from "react-icons/fa";
import { FaRetweet } from "react-icons/fa";
import { CiHeart,CiShare2} from "react-icons/ci";
import { Tweet } from "@/src/gql/graphql";
import Link from "next/link";

const FeedCard=({tweet}:{tweet:Tweet})=>{
  

    return(
        <div className="min-h-[120px] border-b-[1.5px]  grid grid-cols-12 gap-2 p-2 m-2">
        <div className="col-span-1">
            <img src={tweet.author?.profileImage} alt="profile-image" className="h-[40px] w-[40px] rounded-full" />

        </div>
        <div className="col-span-10">
            <h3 className=" font-bold text-xl"><Link href={`/user/${tweet.author?.id}`}>{tweet.author?.name}</Link></h3>
            <p className="mt-2">{tweet.content}</p>
         {
          tweet.imageUrl && <div className="flex justify-center items-center">
          <img src={tweet.imageUrl} alt="profile-image" className="w-[100px] h-[100px] "  />
          </div>
         }
     <div className="flex justify-between mt-4 text-xl">
          <FaComment />
          <FaRetweet />
          <CiHeart />
          <CiShare2 />



          </div>
           

        </div>

      </div>
    )
}
export default FeedCard;
