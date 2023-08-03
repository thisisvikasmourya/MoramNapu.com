import React from "react";
import Image from "next/image";
import About from "../../../public/images/webs.png";

const DataDrivenPrInsights = () => {
  const data2 = [
   
    {
      title: "Audience Segmentation:",
      cont: "Understanding your target audience is fundamental to PR success. Our data-driven insights help in audience segmentation, allowing you to tailor your messages and engagements to resonate with different player segments.",
    },
    {
      title: "Data-backed PR Strategies:",
      cont: "With data as our foundation, we craft data-backed PR strategies that align with your gaming brand's objectives. Our insights empower you to make decisions that resonate with players and elevate your brand in the gaming community.",
    },
    {
      title: "Real-time Monitoring:",
      cont: "The gaming industry is dynamic, and real-time monitoring is essential. We provide continuous data analysis, enabling you to adapt your PR approach promptly and seize emerging opportunities.",
    },
    {
      title: "Data Visualization:",
      cont: "We understand the power of visual storytelling. Our data visualization techniques present complex data in easily digestible formats, empowering you to grasp the impact of your PR efforts at a glance.",
    },
    {
      title: "Optimize Engagement and Reach:",
      cont: "Data-driven insights guide us in optimizing engagement and reach. We identify the most effective communication channels and PR tactics to connect with players and influencers, amplifying your brand's presence.",
    },
    {
      title: "Stay Ahead with 4WD Gaming:",
      cont: "Embrace the power of data-driven PR insights with 4WD Gaming and stay ahead in the competitive gaming landscape. Our expertise in data analysis and PR ensures your gaming brand's success and prominence in the gaming community.",
    },
  ];
  const data = [
    {
      title: "Leverage the Power of Data in Gaming PR:",
      cont: "At 4WD Gaming, we recognize the significance of data-driven insights in shaping effective PR strategies. Our data-driven PR insights offer a holistic view of your gaming brand's performance, allowing you to make informed decisions for maximum impact.",
    },
    {
      title: "In-depth Data Analysis:",
      cont: "We delve deep into gaming industry data, social media metrics, player engagement, and media coverage to extract valuable insights. Our comprehensive data analysis reveals trends, identifies opportunities, and highlights potential areas of improvement.",
    },
    {
      title: "Measure PR Campaign Success:",
      cont: "With data-driven PR insights, you can precisely measure the success of your PR campaigns. We track key performance indicators (KPIs) to evaluate the effectiveness of each campaign, providing you with real-time data to gauge performance.",
    },
    {
      title: "Competitor Benchmarking:",
      cont: "Knowing your competition is vital in the gaming industry. We perform competitor benchmarking to compare your PR efforts with industry peers, enabling you to stay ahead in the competitive gaming landscape.",
    },
  ];
  return (
    <div>
      <div className="content bg-[#17191d] py-16 lg:px-32 px-4">
        <h1 className=" outline text-center lg:text-9xl md:text-6xl text-4xl text-[#fff] outline-4 font-semibold">
          Data Driven Pr-Insights
        </h1>
      </div>

      <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 p-4 py-10 lg:px-32 px-4 bg-[#191C20]">
        <div>
          <Image src={About} alt="hello" layout="" className="rounded-lg" />
        </div>
        <div>
          <p className="py-1 text-white">
            Captivate your gaming community with powerful storytelling. At 4WD
            Gaming, we understand the significance of content and copywriting in
            creating meaningful connections with your audience.
          </p>

          {data.map((items, key) => (
            <div key={key}>
              <p className="text-[#c52326] text-xl">{items.title}</p>
              <p className="py-1 text-white"> {items.cont}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-2 p-4  lg:px-32 px-4 bg-[#191C20]">
        {data2.map((items, key) => (
          <div key={key}>
            <p className="text-[#c52326] text-xl">{items.title}</p>
            <p className="py-1 text-white"> {items.cont}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DataDrivenPrInsights;
