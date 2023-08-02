import Header from "@/components/Header";
import DetailSlider from "@/components/Detail/DetailSlider";
import Title from "@/components/Detail/Title";
import DetailDescriptionWrapper from "@/components/Detail/DetailDescriptionWrapper";
import DescriptionText from "@/components/Detail/DescriptionText";
import DiscoundAndPrice from "@/components/BookCard/DiscoundAndPrice";
import Break from "@/components/Break";

const BookDetailPage = () => {
    return (
        <div className='text-black'>
            <Header title='New Book' isHomePage={false}/>
            <DetailSlider/>
            <DetailDescriptionWrapper>
                <Title title='New book title'/>
                <DescriptionText desc='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'/>
                <DiscoundAndPrice/>
                <Break/>
            </DetailDescriptionWrapper>
        </div>
    )
}

export default BookDetailPage