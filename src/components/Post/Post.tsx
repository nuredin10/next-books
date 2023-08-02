import Image from "next/image";

const Post = ()=>{
    return(
        <div>
           <form className='flex'>
               <div className='w-[10%]'>
                   <label htmlFor="fileToUpload">
                       <Image className='' src='/card-cover.svg' alt='book' width={24} height={24} />
                   </label>
                   <input type="file" name="fileToUpload" id="fileToUpload" className="hidden"
                         />
               </div>
                <input
                    className='outline-none w-[75%] text-[#4b515e]'

                    placeholder='댓글을 남겨주세요.'
                />
               <button type='submit' className='w-[15%] border-none text-[#919EB6]' >
                   등록
               </button>

           </form>
        </div>
    )
}

export default Post