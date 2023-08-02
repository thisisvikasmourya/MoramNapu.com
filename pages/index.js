import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import HomeDefault from "@/components/Main/HomeDefault";
import StarsCanvas from "@/components/StarCanvas";
import Page2 from "@/components/Main/Page2";
import Services from "@/components/Main/OurServices";
// import OurClients from "@/components/Main/OurClient";
// import Testimonial from "@/components/Main/testimonial";
// import ClientReview from "@/components/Main/Review/ClientReview";
// import Clients from "@/components/Main/Clients";
import Testimonial from "@/components/Main/Review/Testimonial";
import AdvisoryCouncil from "@/components/Main/AdvisoryCouncil";
import ClientScroll from "@/components/Main/Review/ClientScroll";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>4WD Gaming India&apos;s First Gaming PR and Marketing</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <StarsCanvas />
        <ClientScroll/>
        <Page2 />
        <Services />
        {/* <OurClients /> */}
        <Testimonial/>
        {/* <HomeDefault /> */ }
        {/* <ClientReview/> */}
        {/* <Clients/> */ }
        {/* <AdvisoryCouncil/> */}
      </main>
    </>
  );
}
