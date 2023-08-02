import CommentProfile from "@/components/CommentSection/CommentProfile";
import CommentDesc from "@/components/CommentSection/CommentDesc";
import LikeAndReply from "@/components/CommentSection/LikeAndReply";
import ReplyDesc from "@/components/CommentSection/ReplyDesc";

const ReplySection = ()=>{
    return(
        <div>
            <CommentProfile/>
            <ReplyDesc/>
        </div>
    )
}

export default ReplySection