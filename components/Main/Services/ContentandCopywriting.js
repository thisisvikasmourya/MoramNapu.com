import React from 'react'
import Image from "next/image";
import About from "../../../public/images/webs.png";

const ContentandCopywriting = () =>
{
   const data2 = [
     
     {
       title: "Driving Community Engagement:",
       cont: "Engagement is the heartbeat of any gaming community. Our content and copywriting strategies are designed to ignite conversations, spark interest, and drive active participation.",
     },
     {
       title: "Optimized for Search Engines:",
       cont: "Our content and copywriting approach incorporates SEO best practices, ensuring that your gaming content ranks high in search engine results and reaches a wider audience.",
     },
     {
       title: "From Concept to Completion:",
       cont: "We take care of every aspect of content creation, from conceptualizing ideas to delivering the final polished product. Our attention to detail ensures that every piece of content aligns with your brand's vision.",
     },
     {
       title: "Leveraging Gaming Trends:",
       cont: "As gaming specialists, we stay updated with the latest gaming trends and industry insights. We leverage these trends to create content that resonates with the gaming community's current interests.",
     },
     {
       title: "Powerful Call-to-Actions:",
       cont: "Our content and copywriting services include powerful call-to-actions that prompt your audience to take action, whether it's signing up for a tournament, downloading a game, or joining your gaming community.",
     },
     {
       title: "Elevate Your Gaming Narrative:",
       cont: "The right words have the power to elevate your gaming narrative to new heights. Let 4WD Gaming be your storytelling partner, crafting compelling content that engages your audience and leaves a lasting impact.",
     },
   ];
   const data = [
     {
       title: "Crafting Compelling Narratives:",
       cont: "Our skilled copywriters and content creators are masters of their craft. They have the expertise to weave captivating narratives that not only entertain but also resonate with your gaming community.",
     },
     {
       title: "Engaging Content for Every Platform:",
       cont: "From blog posts and social media content to in-game dialogues and press releases, we provide engaging content tailored to each platform. We ensure that your brand's voice is consistent across all channels.",
     },
     {
       title: "Creating Brand Loyalty:",
       cont: "Effective content and copywriting go beyond words; they create emotional connections with your audience. We craft content that fosters brand loyalty, turning gamers into devoted fans.",
     },
     {
       title: "Showcasing Your Gaming Venture:",
       cont: "Whether you're launching a new game or promoting an esports event, our content and copywriting services showcase the uniqueness of your gaming venture, setting it apart from the competition.",
     },
   ];
    return (
      <div>
        <div className="content bg-[#17191d] py-16 lg:px-32 px-4">
          <h1 className=" outline text-center lg:text-9xl md:text-6xl text-4xl text-[#fff] outline-4 font-semibold">
            Content & Copywriting
          </h1>
        </div>

        <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 p-4 py-10 lg:px-32 px-4 bg-[#191C20]">
          <div>
            <Image src={About} alt="hello" layout="" className="rounded-lg" />
          </div>
          <div>
            <p className="py-1">
              Captivate your gaming community with powerful storytelling. At 4WD
              Gaming, we understand the significance of content and copywriting
              in creating meaningful connections with your audience.
            </p>

            {data.map((items, key) => (
              <div key={key}>
                <p className="text-[#c52326] text-xl">{items.title}</p>
                <p className="py-1"> {items.cont}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="p-4 grid lg:grid-cols-2 grid-cols-1 gap-2  lg:px-32 px-4 bg-[#191C20]">
          {data2.map((items, key) => (
            <div key={key}>
              <p className="text-[#c52326] text-xl">{items.title}</p>
              <p className="py-1"> {items.cont}</p>
            </div>
          ))}
        </div>
      </div>
    );
}

export default ContentandCopywriting