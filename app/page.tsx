"use client";
import Image from "next/image";
import Header from "./Components/Header";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import FeedCard from "./Components/FeedCard";
const queryClient = new QueryClient();

export default function Home() {
  return (
    <div>
       <QueryClientProvider client={queryClient}>
    <Header/>
   
    </QueryClientProvider>
    </div>
  );
}
