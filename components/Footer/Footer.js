import React from 'react'
import logo from "../../public/images/4WD.png";
import Image from 'next/image';
// import {AiOutlineInstagram} from "react-icons/ai"
import {
  BiLogoFacebook,
  BiLogoLinkedin,
  BiLogoTwitter,
  BiLogoInstagram,
} from "react-icons/bi";

const Footer = () =>
{
      const footerNavs = [
        {
          label: "About Us",
          items: [
            {
              href: "/about-founder",
              name: "About the Founder",
            },
            {
              href: "/about-us",
              name: "About Company",
            },
            {
              href: "/what-we-do-and-how-we-do",
              name: "What We Do & How We Do It",
            },
            {
              href: "javascript:void()",
              name: "Why Choose Us",
            },
          ],
        },
        {
          label: "Case Study",
          items: [
            {
              href: "/case-study",
              name: "Nazara Technologies",
            },
            {
              href: "/case-study",
              name: "World Cricket ChampionShip",
            },

            {
              href: "/case-study",
              name: "World Cricket ChampionShip",
            },

            {
              href: "/case-study",
              name: "World Cricket ChampionShip",
            },
          ],
        },
        {
          label: "Services",
          items: [
            {
              href: "/services/public-relations",
              name: "Public Relations",
            },
            {
              href: "/services/strategy-and-marketing",
              name: "Strategy & Marketing",
            },
            {
              href: "content-and-writing",
              name: "Content & CopyWriting",
            },
            {
              href: "",
              name: "Creator & Influencers",
            },
            {
              href: "javascript:void()",
              name: "Digital Gaming Events",
            },
          ],
        },
      ];

  return (
    <div className="bg-[#191c20]">
      <footer className="text-white  px-4 py-10 max-w-screen-xl mx-auto md:px-8">
        <div className="gap-6 justify-between md:flex">
          <div className="flex-1">
            <div className="max-w-xs">
              <Image src={logo} alt="Logo" className="w-32" />
              <p className="leading-relaxed mt-2 text-[15px] text-white">
                LET&apos;S BRING TOMORROW CLOSER
              </p>
            </div>
            {/* <form onSubmit={(e) => e.preventDefault()}>
              <label className="block pt-4 pb-2">Stay up to date</label>
              <div className="max-w-sm flex items-center border rounded-md p-1">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full p-2.5 outline-none"
                />
                <button className="p-2.5 rounded-md text-white bg-indigo-600 outline-none shadow-md focus:shadow-none sm:px-5">
                  Subscribe
                </button>
              </div>
            </form> */}
          </div>
          <div className="flex-1 mt-10 space-y-6  justify-between sm:flex md:space-y-0 md:mt-0">
            {footerNavs.map((item, idx) => (
              <ul className="space-y-4" key={idx}>
                <h2 className="text-[#c52326] text-[#18px] font-bold">{item.label}</h2>
                {item.items.map((el, idx) => (
                  <li key={idx}>
                    <a
                      href={el.href}
                      className="hover:underline text-white hover:text-[#c52326]"
                    >
                      {el.name}
                    </a>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
        <div className="mt-8 py-6 border-t items-center justify-between sm:flex">
          <div className="mt-4 sm:mt-0">
            &copy; Sharmilee Daru 2023. All Rights Reserved .
          </div>
          <div className="mt-6 sm:mt-0">
            <ul className="flex items-center space-x-4">
              <li className="w-10 h-10 border rounded-full flex items-center justify-center">
                <a href="javascript:void()">
                  <BiLogoInstagram />{" "}
                </a>
              </li>

              <li className="w-10 h-10 border rounded-full flex items-center justify-center">
                <a href="javascript:void()">
                  <BiLogoTwitter />
                </a>
              </li>

              <li className="w-10 h-10 border rounded-full flex items-center justify-center">
                <a href="javascript:void()">
                  <BiLogoLinkedin />{" "}
                </a>
              </li>

              <li className="w-10 h-10 border rounded-full flex items-center justify-center">
                <a href="javascript:void()">
                  <BiLogoFacebook />{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <style jsx>{`
          .svg-icon path,
          .svg-icon polygon,
          .svg-icon rect {
            fill: currentColor;
          }
        `}</style>
      </footer>
    </div>
  );
}

export default Footer