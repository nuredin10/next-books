import CardImage from "@/components/BookCard/CardImage";
import Title from "@/components/BookCard/Title";
import DiscoundAndPrice from "@/components/BookCard/DiscoundAndPrice";
import CardTextWrapper from "@/components/BookCard/CardTextWrapper";
import Book from "@/types/Book";
import {useRouter} from "next/navigation";

const Card = ({book}: { book:Book }) => {

    const router = useRouter();

    return (
        <div onClick={()=>router.push('/1')}>
            <CardImage coverImage={book.coverImage} />
            <CardTextWrapper>
                <Title title={book.title}/>
                <DiscoundAndPrice discountRate={book.discountRate} price={book.price}/>
            </CardTextWrapper>
        </div>
    )
}

export default Card