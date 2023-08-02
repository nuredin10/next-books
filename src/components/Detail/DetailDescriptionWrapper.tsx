import {ReactNode} from "react";

interface DetailDescriptionWrapperProps {
    children: ReactNode;
}

const DetailDescriptionWrapper = ({children}:DetailDescriptionWrapperProps)=>{
    return(
        <div className='p-4 flex flex-col gap-2'>
            {children}
        </div>
    )
}

export default DetailDescriptionWrapper