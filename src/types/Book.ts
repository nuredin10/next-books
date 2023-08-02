export interface BookApi{
    data: Book[];
    totalPage: number;
    hasNext: boolean;
}

interface Book{
    id: number;
    title: string;
    description: string;
    discountRate: number;
    coverImage: string;
    price: number;
}

export default Book;