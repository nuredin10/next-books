'use client'

import {RecoilRoot} from 'recoil'
import {ReactNode} from "react";

interface RecoilRootProps {
    children: ReactNode;
}


export default function RecoilRootWrapper({children}: RecoilRootProps) {
    return (
        <RecoilRoot >
            {children}
        </RecoilRoot>
    )
}