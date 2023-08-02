// 'use client'
import { useQuery } from 'react-query';
import Book, { BookApi } from '@/types/Book';

export function useBooksQuery(page: number) {
    return useQuery<BookApi>(['books', page], async () => {
        const res = await fetch(`http://15.165.74.54:3000/?page=${page}`);
        return res.json();
    });
}
