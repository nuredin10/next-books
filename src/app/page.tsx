'use client'
import { useState, useEffect } from 'react';
import { useBooksQuery } from '@/api/booksApi';
import { useRecoilState } from 'recoil'; // Changed from useSetRecoilState to useRecoilState
import { booksState } from '@/state/booksAtom';
import CardContainer from '@/components/CardContainer';
import Header from '@/components/Header';
import CardSkeleton from "@/components/CardSkeleton";

export default function Home() {
    const [page, setPage] = useState(1);
    const { data: fetchedData, isLoading, isFetching } = useBooksQuery(page);
    const [books, setBooks] = useRecoilState(booksState); // Changed from useSetRecoilState to useRecoilState

    useEffect(() => {
        if (fetchedData) {
            // Append the new data to the existing state
            setBooks((prevBooks) => [...prevBooks, ...fetchedData.data]);
        }
    }, [fetchedData, setBooks]);

    // Function to load the next page
    const loadNextPage = () => {
        if (!isLoading && fetchedData?.hasNext) {
            setPage((prevPage) => prevPage + 1);
        }
    };

    useEffect(() => {
        // Attach the scroll listener
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [fetchedData, isLoading]);

    // Function to handle scroll event
    const handleScroll = () => {
        const isBottom =
            window.innerHeight + document.documentElement.scrollTop ===
            document.documentElement.offsetHeight;

        if (isBottom) {
            loadNextPage();
        }
    };

    return (
        <main>
            <Header title="Books" isHomePage={true} />
            <CardContainer />
            {isFetching && <CardSkeleton/>}
        </main>
    );
}
