// 'use client'
import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { booksState } from '@/state/booksAtom';
import Card from '@/components/BookCard/Card';

const CardContainer = () => {
    const [isRefreshing, setIsRefreshing] = useState(false);
    const books = useRecoilValue(booksState);

    const handleRefresh = () => {
        setIsRefreshing(true);
        // Perform the data refresh here, for example, refetch the data using react-query
        // Once the data is fetched, setIsRefreshing(false) to stop the refresh indicator
        setTimeout(() => {
            setIsRefreshing(false); // Simulating a data refresh with a delay, replace this with actual data fetching
        }, 2000);
    };

    return (
        <div
            className="flex justify-center items-center flex-wrap gap-[2px]"
            onScroll={(e) => {
                const scrollOffset = e.currentTarget.scrollTop;
                const isAtTop = scrollOffset === 0;
                if (isAtTop) {
                    handleRefresh();
                }
            }}
            // Disable the pull-to-refresh default behavior of mobile browsers
            onTouchMove={(e) => {
                const scrollOffset = e.currentTarget.scrollTop;
                const isAtTop = scrollOffset === 0;
                if (isAtTop) {
                    e.preventDefault();
                }
            }}
        >
            {isRefreshing && <p className="text-center w-full">Refreshing...</p>}
            {books.map((book, i) => {
                return <Card book={book} key={i} />;
            })}
        </div>
    );
};

export default CardContainer;
