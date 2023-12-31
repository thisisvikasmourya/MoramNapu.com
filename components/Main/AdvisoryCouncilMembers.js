import React from "react";
import Image from "next/image";
import vamsi from "../../public/images/Vamsi-Krishna-Talasila-1-1024x936.jpg";
import jay from "../../public/images/Jay-Sayta-3-1-2.jpg";
const AdvisoryCouncilMembers = () => {
  return (
    <>
      <div>
        <div className="content bg-[#eee2dc] py-16 lg:px-32 px-4">
          <h1 className=" outline text-center lg:text-9xl md:text-6xl text-4xl text-[#fff] outline-4 font-semibold">
            Advisory Council Members
          </h1>
        </div>

        <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 p-4 py-10 lg:px-32 px-4 bg-[#eee2dc] justify-center">
          <div>
            <Image src={jay} alt="hello" className="rounded-lg" />
          </div>

          <div>
            <p className="text-[#ac3b61] text-xl "> Jay Sayta</p>
            <p className="text-[#ac3b61] text-xl ">
              Technology and gaming lawyer in India
            </p>
            <p className="text-[#123c69]">
              Jay Sayta is a technology and gaming lawyer in India. He is well
              known in the media fraternity and is an expert on gaming laws. He
              has contributed through research and written extensively on
              gambling and betting laws. He has spoken on the issues of gaming
              legislation at various key industry forums and bodies like the
              Indian Merchants’ Chambers (IMC), Confederation of Indian Industry
              (CII), Federation of Indian Chambers of Commerce and Industry
              (FICCI), ICE Totally Gaming, All India Gaming Federation (AIGF)
              among others.
            </p>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 p-4 py-10 lg:px-32 px-4 bg-[#eee2dc] ">
          <div>
            <Image src={vamsi} alt="hello" className="rounded-lg" />
          </div>

          <div className="text-[#123c69]">
            <p className="text-[#ac3b61] text-xl ">Vamsi Talasila</p>
            <p className="text-[#ac3b61] text-xl">
              Gaming Technology and Digital Marketing
            </p>
            <p>
              Vamsi Talasila is a veteran and dynamic technology leader with two
              decades of experience in building technology for gaming, esports,
              and sports domains. He is an expert in converting various business
              problems into feasible technology solutions. For nearly a decade
              at Nazara Technologies Ltd., he led technology transformation
              initiatives across multiple lines of businesses and functions
              facilitating growth and rapid expansion of the company’s gaming
              services globally, enabling it to become India’s first listed
              gaming company.
            </p>
            <p>
              Vamsi has worked with new-age technology strategies and solutions
              across gaming verticals like subscription, freemium games, real
              money games, fantasy sports, and betting games along with
              performance marketing, analytics, and loyalty programs. He is also
              known for having built large consumer platforms and solutions
              catering to millions of subscribers, addressing critical factors
              like scalability, availability, security, analytics, and consumer
              experience.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdvisoryCouncilMembers;
