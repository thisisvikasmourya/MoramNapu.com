import React from 'react'
import Image from "next/image";
import About from "../../../public/images/publicrelations-1.jpg";

const PublicRelations = () =>
{
  const data2 = [
    {
      title: "Pioneers in Gaming PR:",
      cont: "We take pride in being pioneers in gaming PR, having played a crucial role in shaping the gaming PR ecosystem in India. Our journey as early adopters and advocates of gaming PR has witnessed the industry's evolution from skill-based real money gaming to the exciting world of Web3 and blockchain gaming.",
    },
    {
      title: "Forward-Thinking Approach:",
      cont: "As part of every conversation that shapes the gaming landscape, we possess a deep understanding of the niche, dynamic, and continuously evolving gaming industry in India. Our forward-thinking approach sets us apart, as we anticipate challenges and predict industry trends to keep our clients at the forefront of the gaming industry.",
    },
    {
      title: "Beyond PR:",
      cont: "While PR is our forte, we go beyond that - we are marketers, brand planners, and reputation managers. Our expertise extends to helping gaming companies navigate the complexities of public listing processes, positioning them as industry leaders.",
    },
    {
      title: "Impressive Gaming Portfolio:",
      cont: "With an impressive gaming portfolio that includes major brands and IPs, we have garnered valuable experience in successful communication for gaming solutions. As industry pioneers, we assure guidance, training, and strategic direction that create successful brands.",
    },
    {
      title: "Challenge the Norms:",
      cont: "4WD Gaming's public relations strategies are designed to challenge the norms of traditional agencies. We focus on your brand objectives and goals, blending traditional media ideals with new-age strategies to capture the new-age media for our brands.",
    },
    {
      title: "Partner for Success:",
      cont: "We understand evolving client needs and media trends, working hand-in-hand with you to ensure success, escalate your brand image, and optimize communication strategies. Our success is measured by the success of our partner brands.",
    },
    {
      title:
        "Choose 4WD Gaming as your PR partner, and let us be your ammunition to conquer the world of gaming, Web3 gaming, and esports. Get in touch with us today and ignite your success in this thrilling and ever-evolving industry.",
    },
  ];
  const data = [
    {
      title: "Expert Gaming and Esports PR Strategies:",
      cont: "Our primary mission is to establish your gaming brand as a dominant force in the industry. Whether you're a gaming company seeking increased visibility, an esports team looking to build a loyal fan base, or a game developer aiming for widespread recognition, our PR strategies are custom-tailored to suit your specific needs.",
    },
    {
      title: "In-Depth Understanding of Gaming Industry:",
      cont: "With years of experience in the gaming and esports industry, we understand the unique challenges and opportunities you face. Our team of dedicated PR specialists is well-versed in the intricacies of the gaming world, enabling us to craft PR campaigns that resonate with your target audience.",
    },
    {
      title: "Comprehensive Suite of PR Services:",
      cont: "From media coverage and influencer partnerships to crisis communications and thought leadership articles, we offer a comprehensive suite of PR services. Our aim is to enhance your brand's reputation, forge valuable partnerships, and attract a broader audience to your gaming endeavors.",
    },
   
  ];
  return (
    <div>
      <div className="content bg-[#17191d] py-16 lg:px-32 px-4">
        <h1 className=" outline text-center lg:text-9xl md:text-6xl text-4xl text-[#fff] outline-4 font-semibold">
          Public Relations
        </h1>
      </div>

      <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 p-4 py-10 lg:px-32 px-4 bg-[#191C20]">
        <div>
          <Image src={About} alt="hello" layout="" className="rounded-lg" />
        </div>
        <div>
          <p className="py-1">
            Are you ready to take your gaming brand to the next level? At 4WD
            Gaming, we are not just any PR agency; we are brand builders who
            understand the immense power of a strong brand in attracting organic
            media and PR.
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

export default PublicRelations