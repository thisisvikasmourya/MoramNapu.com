import React from "react";
import BackgroundImage from "../../public/images/bgscr.png";
// import bg from "../../public/images/bg/1.png";
// import ClientScroll from "./Review/ClientScroll";
const Page2 = () => {
  return (
    <div
      className="bg-[#eee2dc]  "
      data-aos="zoom-in"
      // style={{
      //   backgroundImage: `url(${BackgroundImage.src})`,
      //   backgroundSize: "cover", // Adjust as needed
      //   backgroundRepeat: "no-repeat",
      //   width: "100%",
      //   // height: "100vh", // Adjust for desired height
      // }}
    >
      <div className="px-4  max-w-screen-xl mx-auto md:px-8 " id="page2">
        {/* bg-[#eee2dc] */}
        <div className="  rounded-lg py-10   ">
          <p className="lg:text-6xl text-[#ac3b61]  text-3xl font-bold text-center py-3 ">
            Welcome to Moram Napu:
          </p>
          <p className="lg:text-5xl text-3xl font-semibold text-[#123c69]  text-center pb-1">
            Turning Gaming OutreachMedia and Digital Marketing for Gaming Upside
            Down
          </p>
          <p className="lg:text-3xl text-2xl font-semibold text-center border-b border-gray-300 pb-5 "></p>
          <div className="max-w-3xl mx-auto text-center py-8 text-[20px] text-[#123c69]">
            +1UP your gaming brand with Moram Napu, Gaming Outreach, and
            Fullstack Digital Marketing. We specialize in Gaming
            OutreachServices, Content Management, Digital Marketing, Social
            Media Engagement, community building, growth marketing and
            performance marketing. We connect gaming companies with their ideal
            audience and build trust in the gaming community.
            <div className="    text-[20px] py-5" data-aos="zoom-in">
              We have Secret tricks to win in the gaming industries? CHEAT CODE
              - MORAM NAPU, Our special marketing powers are like cheat codes
              that help you do better, score more, and become a gaming superstar
              in no time.{" "}
              <div className="text-[20px] py-5">
                MORAM NAPU is like a friend who helps gaming brands and
                companies become famous and loved. We use our special tricks to
                tell everyone how awesome the games are. Our goal is to make
                games and gamers happy by connecting them in a fun and cool way.{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page2;
