import React from "react";
import Image from "next/image";
import About from "../../../public/images/content.jpg";

const DigitalGamingEvents = () => {
  const data2 = [
    {
      title: "Professional Event Execution:",
      cont: "Our experienced team handles every aspect of event execution, from planning and logistics to promotion and coordination, ensuring a seamless and memorable experience for all attendees.",
    },
    {
      title: "Tailored to Your Brand:",
      cont: "We understand that each gaming brand has a unique identity. Our team tailors gaming events to align with your brand's values and image, creating a cohesive and impactful experience for your audience.",
    },
    {
      title: "Engaging Activities and Contests:",
      cont: "We curate engaging activities and contests that add an element of excitement to your gaming events. From friendly matches to high-stakes competitions, we keep participants and viewers enthralled.",
    },
    {
      title: "Spectator Engagement:",
      cont: "We believe in involving spectators in the gaming experience. Our spectator engagement initiatives, such as live streams and interactive sessions, enhance the overall event appeal.",
    },
    {
      title: "Showcasing Your Game Titles:",
      cont: "Gaming events are the perfect platform to showcase your game titles to a captivated audience. We ensure your games take center stage, sparking curiosity and interest among players.",
    },
    {
      title: "Community Building:",
      cont: "Gaming events foster a sense of community among gamers. We emphasize community-building aspects in our event planning, bringing players together for a shared passion.",
    },
    {
      title: "Networking Opportunities:",
      cont: "Our gaming events provide valuable networking opportunities for gamers, developers, and industry stakeholders, facilitating collaborations and connections within the gaming ecosystem.",
    },
    {
      title: "Memories that Last:",
      cont: "With meticulous planning and execution, we create memories that last a lifetime for participants and gaming enthusiasts, establishing your brand as a leader in the gaming events space.",
    },
    {
      title: "Create Unforgettable Moments.",
      cont: "Elevate your gaming events to new heights with 4WD Gaming. Let us craft unforgettable gaming experiences that resonate with your audience, driving engagement and loyalty to your gaming brand.",
    },
  ];
  const data = [
    {
      title: "Unforgettable Gaming Experiences:",
      cont: "4WD Gaming specializes in crafting unforgettable gaming events that leave a lasting impression on participants and spectators alike.",
    },
    {
      title: "Virtual Gaming Tournaments:",
      cont: "With the rise of virtual gaming, we excel in organizing online tournaments that transcend geographical boundaries. Engage players from around the world in immersive virtual competitions that unite the gaming community.",
    },
    {
      title: "Live Gaming Extravaganzas:",
      cont: "For an electrifying experience, we orchestrate live gaming events that bring enthusiasts together under one roof. From LAN parties to grand championships, we ensure seamless event management and an exhilarating atmosphere.",
    },
  ];
  return (
    <div>
      <div className="content bg-[#17191d] py-16 lg:px-32 px-4">
        <h1 className=" outline text-center lg:text-9xl md:text-6xl text-4xl text-[#fff] outline-4 font-semibold">
          Digital Gaming Events
        </h1>
      </div>

      <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 p-4 py-10 lg:px-32 px-4 bg-[#191C20]">
        <div>
          <Image src={About} alt="hello" layout="" className="rounded-lg" />
        </div>
        <div>
          {data.map((items, key) => (
            <div key={key}>
              <p className="text-[#c52326] text-xl">{items.title}</p>
              <p className="py-1"> {items.cont}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="p-4 grid lg:grid-cols-2 grid-cols-1 gap-2 lg:px-32 px-4 bg-[#191C20]">
        {data2.map((items, key) => (
          <div key={key}>
            <p className="text-[#c52326] text-xl">{items.title}</p>
            <p className="py-1"> {items.cont}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DigitalGamingEvents;