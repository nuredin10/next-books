'use client'
import { useQuery } from 'react-query'
import Header from "@/components/Header";
import Card from "@/components/BookCard/Card";
import CardContainer from "@/components/CardContainer";
export default function Home() {
    return (
    <main>
        <Header title='Books' isHomePage={true}/>
        <CardContainer/>
    </main>
  )
}
