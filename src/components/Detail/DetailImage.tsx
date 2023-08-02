import Image from "next/image";

const DetailImage = ()=>{
    return(
        <div className="h-[28rem] w-full bg-[#EDEEF3] flex justify-center items-center ">
            <Image src='/card-cover.svg' alt='detail' width={45} height={45}/>
        </div>
    )
}

export default DetailImage