import CommentProfile from "@/components/CommentSection/CommentProfile";
import CommentDesc from "@/components/CommentSection/CommentDesc";
import LikeAndReply from "@/components/CommentSection/LikeAndReply";
import ReplyDesc from "@/components/CommentSection/ReplyDesc";
import ReplyProfile from "@/components/CommentSection/ReplyProfile";

const ReplySection = ()=>{
    return(
        <div>
            <ReplyProfile/>
            <ReplyDesc/>
        </div>
    )
}

export default ReplySection