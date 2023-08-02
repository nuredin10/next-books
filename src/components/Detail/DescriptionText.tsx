
interface DescriptionTextProps {
    desc: string;
}


const DescriptionText = ({desc}:DescriptionTextProps)=>{
    return(
        <div>
            <p className='leading-[20px] text-[0.75rem] font-normal'>{desc}</p>
        </div>
    )
}

export default DescriptionText