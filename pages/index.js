import Head from "next/head";
import { Inter } from "next/font/google";
import StarsCanvas from "@/components/StarCanvas";
import Page2 from "@/components/Main/Page2";
import Services from "@/components/Main/OurServices";
import Testimonial from "@/components/Main/Review/Testimonial";
// import ClientScroll from "@/components/Main/Review/ClientScroll";
import WhyChooseUs from "@/components/Main/WhyChooseUs";
import ClientReview from "@/components/Main/Review/ClientReview";
import ScrollButton from "@/components/Main/ScrollButton";
// import BubbleEffect from "@/components/Main/BubbleEffect";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Moram Napu India&apos;s First Gaming PR and Marketing</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <StarsCanvas />
        <Page2 />
        <Services />
        <ClientReview />
        <Testimonial />
        {/* <ClientScroll /> */}
        <WhyChooseUs />
        <ScrollButton />
        {/* <BubbleEffect/>  */}
      </main>
    </>
  );
}
