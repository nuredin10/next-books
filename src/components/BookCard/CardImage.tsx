import Image from "next/image";

const CardImage = ({coverImage}: {coverImage:string})=>{
    return(
        <div className='bg-[#EDEEF3] h-[185px] w-[185px] flex justify-center items-center'>
            <Image src={coverImage} alt='book' width={110} height={110} />
        </div>
    )
}

export default CardImage