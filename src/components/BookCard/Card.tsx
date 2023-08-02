import CardImage from "@/components/BookCard/CardImage";
import Title from "@/components/BookCard/Title";
import DiscoundAndPrice from "@/components/BookCard/DiscoundAndPrice";

const Card = () =>{
    return(
        <div>
            <CardImage/>
            <Title/>
            <DiscoundAndPrice/>
        </div>
    )
}

export default Card