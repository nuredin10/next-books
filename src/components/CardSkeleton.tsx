import Image from "next/image";

const CardSkeleton = () => {
    return (
        <div className='animate-pulse flex justify-start items-center flex-wrap gap-[2px]'>
            <div className='mt-5'>
                <div className='bg-[#EDEEF3] h-48 w-48 flex justify-center items-center'>
                    <Image src='/card-cover.svg' alt='book' width={24} height={24}/>
                </div>
                <div
                    className="w-48 mt-3 w-auto animate-pulse flex-row items-center justify-center space-x-1 border ">
                    <div className="flex flex-col space-y-2">
                        <div className="h-6 w-[12rem] rounded-md bg-gray-300 "></div>
                        <div className="h-6 w-[12rem] rounded-md bg-gray-300 "></div>
                    </div>
                </div>
            </div>

            <div className='mt-5'>
                <div className='bg-[#EDEEF3] h-48 w-48 flex justify-center items-center'>
                    <Image src='/card-cover.svg' alt='book' width={24} height={24}/>
                </div>
                <div
                    className="w-48 mt-3 w-auto animate-pulse flex-row items-center justify-center space-x-1 border ">
                    <div className="flex flex-col space-y-2">
                        <div className="h-6 w-[12rem] rounded-md bg-gray-300 "></div>
                        <div className="h-6 w-[12rem] rounded-md bg-gray-300 "></div>
                    </div>
                </div>
            </div>

            <div className='mt-5'>
                <div className='bg-[#EDEEF3] h-48 w-48 flex justify-center items-center'>
                    <Image src='/card-cover.svg' alt='book' width={24} height={24}/>
                </div>
                <div
                    className="w-48 mt-3 w-auto animate-pulse flex-row items-center justify-center space-x-1 border ">
                    <div className="flex flex-col space-y-2">
                        <div className="h-6 w-[12rem] rounded-md bg-gray-300 "></div>
                        <div className="h-6 w-[12rem] rounded-md bg-gray-300 "></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardSkeleton