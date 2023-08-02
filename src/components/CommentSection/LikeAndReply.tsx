import Image from "next/image";

const LikeAndReply = ()=>{
    return(
        <div className='flex gap-2'>
            <Image src='like-icon.svg' alt='like' width={25} height={25}/>
            <Image src='reply-icon.svg' alt='reply' width={25} height={25}/>

        </div>
    )
}

export default LikeAndReply