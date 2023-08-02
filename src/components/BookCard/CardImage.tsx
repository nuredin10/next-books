import Image from "next/image";

const CardImage = ({coverImage}: {coverImage:string})=>{
    return(
        <div className='bg-[#EDEEF3] h-48 w-48 flex justify-center items-center'>
            <Image src={coverImage} alt='book' width={100} height={100} />
        </div>
    )
}

export default CardImage