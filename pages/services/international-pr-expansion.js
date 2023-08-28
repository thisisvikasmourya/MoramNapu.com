import React from "react";
import Head from "next/head";
import InternationalPrExpansion from "@/components/Main/Services/InternationalPrExpansion";

const internationalprexpansion = () => {
  return (
    <div>
      <Head>
        <title>
          {" "}
          International PR Expansion - Unlocking Global Opportunities for Gaming
          Brands
        </title>
        <meta
          name="description"
          content="Engage your audience and boost brand loyalty with Moram Napu's expert content and copywriting services. Our skilled copywriters and content creators craft compelling stories that resonate with your gaming community, leaving a lasting impact on your audience."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <InternationalPrExpansion />
    </div>
  );
};

export default internationalprexpansion;
