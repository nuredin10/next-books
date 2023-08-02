'use client'

import Image from "next/image";
import React from "react";
import {useRouter} from "next/navigation";
interface HeaderProps {
    title: string,
    isHomePage: boolean
}

const Header: React.FC<HeaderProps> = ({title, isHomePage}) => {
    const router = useRouter()

    return (
        <div className='h-12 flex justify-between items-center px-5 py-2'>
            <div className='h-8 w-8 rounded-full flex justify-center items-center'>
                {!isHomePage && <Image className='cursor-pointer' onClick={()=>router.push('/')} src='/back-icon.svg' alt='profile' width={24} height={24}/>}
            </div>
            <h1 className='text-black text-lg font-bold'>{title}</h1>
            <div className={`${isHomePage && 'bg-[#EDEEF3] '}h-8 w-8 rounded-full flex justify-center items-center`}>
                {
                    isHomePage && <Image src='/header-pic.svg' alt='profile' width={8} height={8}/>
                }
            </div>
        </div>
    )
}

export default Header