import exp from "constants";

interface DiscoundAndPriceProps {
    discountRate: number;
    price: number;
}
const DiscoundAndPrice:  React.FC<DiscoundAndPriceProps>= ({discountRate,price})=>{
    return(
        <div className='flex justify-between items-center'>
            <h1 className='text-[#FF003E] text-sm font-semibold'>{discountRate}%</h1>
            <h1 className='text-black text-[16px] font-semibold'>{price} <span className='text-[14px]'>원</span></h1>
        </div>
    )
}

export default DiscoundAndPrice