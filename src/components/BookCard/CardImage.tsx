import Image from "next/image";

const CardImage = ()=>{
    return(
        <div className='bg-[#EDEEF3] h-48 w-48 flex justify-center items-center'>
            <Image src='/card-cover.svg' alt='book' width={24} height={24} />
        </div>
    )
}

export default CardImage