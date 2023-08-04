import Link from "next/link";
import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Navigationbar = () => {
  const data = [
    {
      href: "/services/strategy-and-marketing",
      name: "Strategy and Marketing",
    },
    {
      href: "/services/content-and-writing",
      name: "Content and Copywriting",
    },
    {
      href: "/services/creator-and-influencers",
      name: "Creator and Influencer",
    },
    {
      href: "/services/crisis-communication",
      name: "Crisis Communication",
    },
    {
      href: "/services/data-driven-pr-insight",
      name: "Data Driven Pr-insight",
    },
    {
      href: "/services/public-relations",
      name: "Public Relations",
    },
    {
      href: "/services/digital-gaming-events",
      name: "Digital Gaming Events",
    },
    {
      href: "/services/esports-tournament-organization",
      name: "Esports Tournaments",
    },
    {
      href: "/services/international-pr-expansion",
      name: "International Pr-Expansion",
    },
    {
      href: "/services/gaming-product-launches",
      name: "Gaming Product Launches",
    },
  ];
  return (
    <div className="bg-[#191C20]">
      <div className="px-4  max-w-screen-xl mx-auto md:px-8 ">
        <ul className="grid lg:grid-cols-5 grid-cols-2 gap-6 p-4 py-10  px-4 bg-[#191C20]">
          {data.map((items, key) => (
            <Link
              className="bg-[#c52326] flex items-center  rounded-lg place-content-center py-3 hover:bg-[#191c20] hover:border-white hover:border hover:animate-bounce delay-100	"
              href={items.href}
              key={key}
            >
              <MdOutlineKeyboardArrowRight /> {items.name}
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navigationbar;
