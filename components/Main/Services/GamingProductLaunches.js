import React from "react";
import Image from "next/image";
import About from "../../../public/images/new/7.gif";
import Navigationbar from "@/components/Navbar/Navigationbar";

const GamingProductLaunches = () => {
  const data2 = [
    {
      title: "Strategic Marketing Campaigns:",
      cont: "Our gaming product launches are backed by strategic marketing campaigns that build anticipation and excitement among your target audience. From teaser trailers to influencer partnerships, we ensure your product gains momentum before it hits the shelves.",
    },

    {
      title: "Media Coverage and Publicity:",
      cont: "Our extensive media network allows us to secure comprehensive media coverage for your gaming product launch. We create compelling press releases, arrange media interviews, and leverage industry connections to put your product in the spotlight.",
    },
    {
      title: "Engaging Content Creation:",
      cont: "Content is king, and we create engaging content that tells the story of your gaming product, captivating players and building hype around its release.",
    },
    {
      title: "Seamless Launch Execution:",
      cont: "On the big day, we ensure a seamless launch execution, coordinating all aspects of the launch to deliver a smooth and memorable experience for players and fans.",
    },
    {
      title: "Post-Launch Support:",
      cont: "The launch is just the beginning. We provide post-launch support, analyzing performance metrics and gathering player feedback to optimize your gaming product's success.",
    },
    {
      title: "Collaboration with Influencers:",
      cont: "We collaborate with gaming influencers and content creators to showcase your product to their dedicated fanbase, expanding your reach and attracting new players.",
    },
    {
      title: "Industry Partnerships:",
      cont: "Our strong industry partnerships allow us to create strategic alliances that enhance the visibility and reach of your gaming product.",
    },
    {
      title: "Captivate Players Worldwide:",
      cont: "With Moram Napu's expertise, your gaming product launch is set to captivate players worldwide, establishing your brand as a force to be reckoned with in the gaming industry.",
    },
    {
      title: "Contact Us Today:",
      cont: "Ready to ignite success with your gaming product launch? Contact Moram Napu today and let our expert strategies take your gaming masterpiece to new heights.",
    },
  ];
  const data = [
    {
      title: "Launching Your Gaming Masterpiece:",
      cont: "At Moram Napu, we understand that launching a gaming product is more than just a release; it's an opportunity to make a lasting impact on the gaming industry. Our gaming product launches are meticulously crafted to ensure your masterpiece gets the attention it deserves.",
    },
    {
      title: "Tailored Launch Strategies:",
      cont: "Every gaming product is unique, and we believe in tailored launch strategies that cater to your specific goals and target audience. Whether you're an indie developer or a well-established gaming company, we have the expertise to create a launch plan that resonates with players worldwide.",
    },
    {
      title: "Comprehensive Pre-Launch Planning:",
      cont: "A successful gaming product launch starts with a well-executed pre-launch plan. We collaborate with you to understand your vision, analyze market trends, and identify the best launch window for maximum impact.",
    },
  ];
  const navData = [
    {
      href: "/services/strategy-and-digitalmarketing",
      name: "Strategy and Digital Marketing",
    },
    {
      href: "/services/creator-and-influencers",
      name: "Creator and Influencer",
    },
    {
      href: "/services/digital-brand-communication",
      name: "Digital Brand Communication",
    },
    {
      href: "/services/data-driven-gaming-insight",
      name: "Data Driven Gaming-Insight",
    },
    {
      href: "/services/outreachs-and-outreach",
      name: " Outreach",
    },
    {
      href: "/services/digital-gaming-events-and-expo",
      name: " Gaming Events and Expo",
    },
    {
      href: "/services/growth-marketing",
      name: "Growth Marketing",
    },
    {
      href: "/services/performance-marketing",
      name: "Performance Marketing",
    },
    {
      href: "/services/social-media-management-marketing",
      name: "Social Media Management Marketing",
    },
    {
      href: "/services/community-building-marketing",
      name: "Community Building Marketing",
    },
    {
      href: "/services/go-global-pr-marketing",
      name: "Go Global OutreachMarketing",
    },
  ];

  return (
    <div>
      <div className="bg-[#eee2dc]" data-aos="zoom-in">
        <div className="max-w-screen-xl mx-auto md:px-8">
          <div className="content bg-[#eee2dc] py-16  px-4">
            <h1 className=" outline text-center lg:text-9xl md:text-6xl text-4xl text-[#fff] outline-4 font-semibold">
              Gaming Product Launches
            </h1>
          </div>
        </div>
      </div>
      <div className="bg-[#eee2dc]" data-aos="zoom-in">
        <div className="max-w-screen-xl mx-auto md:px-8">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-6  pt-10  px-4 bg-[#eee2dc]">
            <div>
              <Image src={About} alt="hello" layout="" className="rounded-lg" />
            </div>
            <div>
              {data.map((items, key) => (
                <div key={key}>
                  <p className="text-[#ac3b61] text-[20px]">{items.title}</p>
                  <p className="pb-3 text-[#123c69] text-[18px]">
                    {" "}
                    {items.cont}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="p-4 grid lg:grid-cols-2 grid-cols-1 gap-2   px-4 bg-[#eee2dc]">
            {data2.map((items, key) => (
              <div key={key}>
                <p className="text-[#ac3b61] text-[20px]">{items.title}</p>
                <p className="pb-3 text-[#123c69] text-[18px]"> {items.cont}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Navigationbar navData={navData} />
    </div>
  );
};

export default GamingProductLaunches;
