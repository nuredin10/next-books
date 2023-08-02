import LikeAndReply from "@/components/CommentSection/LikeAndReply";
import Like from "@/components/CommentSection/Like";

const ReplyDesc = ()=>{
    return(
        <div className='pl-[35px] flex flex-col gap-3'>
            <p className='text-[0.75rem] font-normal'>어머 제가 있던 테이블이 제일 반응이 좋았나보네요🤭
                우짤래미님도 아시겠지만 저도 일반인 몸매 그 이상도 이하도
                아니잖아요?! 그런 제가 기꺼이 도전해봤는데 생각보다
                괜찮았어요! 오늘 중으로 라이브 리뷰 올라온다고 하니
                꼭 봐주세용~!</p>
            <Like/>



        </div>
    )
}

export default ReplyDesc