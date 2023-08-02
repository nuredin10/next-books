import Card from "@/components/BookCard/Card";

const CardContainer = ()=>{
    return(
        <div className='flex justify-center items-center flex-wrap gap-[2px]'>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
    )
}

export default CardContainer