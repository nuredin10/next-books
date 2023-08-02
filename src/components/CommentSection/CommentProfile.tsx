import Image from "next/image";

const CommentProfile = ()=>{
    return(
        <div className='flex justify-between items-center py-2'>
            <div className='flex items-center gap-2'>
                <Image src='/profile-pic1.svg' alt='profile pix' height={34} width={34}/>
                <div className='flex gap-2 items-center justify-center'>
                    <h1 className='text-[0.9rem] font-bold'>안녕 나 응애 </h1>
                    <Image src='/verified.svg' alt='verified' height={14} width={14}/>
                    <span className='text-[0.65rem] font-medium'>1일전</span>
                </div>
            </div>
            <Image src='/more-icon.svg' alt='more' width={14} height={4}/>
        </div>
    )
}

export default CommentProfile