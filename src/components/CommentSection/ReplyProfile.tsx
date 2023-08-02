import Image from "next/image";

const ReplyProfile = ()=>{
    return(
        <div className='flex justify-between items-center py-2'>
            <div className='flex items-center gap-2'>
                <Image src='/profile-pic2.svg' alt='profile pix' height={34} width={34}/>
                <h1 className='text-[0.9rem] font-bold'>ㅇㅅㅇ <span className='text-[0.65rem] font-medium'>1일전</span></h1>
            </div>
            <Image src='/more-icon.svg' alt='more' width={14} height={4}/>
        </div>
    )
}

export default ReplyProfile