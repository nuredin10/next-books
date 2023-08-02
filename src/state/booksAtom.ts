import { atom } from 'recoil'
import Book from "@/types/Book";

export const booksState = atom<Book[]>({
    key: 'books',
    default: []
})