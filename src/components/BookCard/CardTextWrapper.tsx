
import {ReactNode} from "react";

interface CardTextWrapperProps {
    children: ReactNode;
}

const CardTextWrapper = ({children}:CardTextWrapperProps)=>{
    return(
        <div className='p-4 flex flex-col gap-2'>
            {children}
        </div>
    )
}

export default CardTextWrapper