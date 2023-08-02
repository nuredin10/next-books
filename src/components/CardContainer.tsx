// 'use client'
import { useRecoilValue } from 'recoil';
import { booksState } from '@/state/booksAtom';
import Card from '@/components/BookCard/Card';

const CardContainer = () => {
    const books = useRecoilValue(booksState);

    console.log(books, 'success');

    return (
        <div className="flex justify-center items-center flex-wrap gap-[2px]">
            {books.map((book, i) => {
                return <Card key={i} book={book}/>;
            })}
        </div>
    );
};

export default CardContainer;
