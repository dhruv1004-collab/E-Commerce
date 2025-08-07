"use client"
import Hero from "@/Components/Hero/Hero";
import NewCollection from "@/Components/NewCollection/NewCollection";
import NewsLetter from "@/Components/NewsLetter/NewsLetter";
import Offer from "@/Components/Offers/Offer";
import Popular from "@/Components/Popular/Popular";


export default function Home() {
  return (
    <>
    <Hero/>
    <Popular/>
    <Offer/>
    <NewCollection/>
    <NewsLetter/>
    
    </>
  );
}
