'use client'

import {QueryClient, QueryClientProvider} from 'react-query'
import {ReactNode} from "react";

const queryClient = new QueryClient()

interface ReactQueryProps {
    children: ReactNode;
}


export default function ReactQuery({children}: ReactQueryProps) {
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    )
}