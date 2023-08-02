import CardImage from "@/components/BookCard/CardImage";
import Title from "@/components/BookCard/Title";
import DiscoundAndPrice from "@/components/BookCard/DiscoundAndPrice";
import CardTextWrapper from "@/components/BookCard/CardTextWrapper";

const Card = () => {
    return (
        <div>
            <CardImage/>
            <CardTextWrapper>
                <Title/>
                <DiscoundAndPrice/>
            </CardTextWrapper>
        </div>
    )
}

export default Card