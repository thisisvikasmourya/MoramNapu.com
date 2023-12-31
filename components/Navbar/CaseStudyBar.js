import Link from "next/link";
import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const CaseStudyBar = ({ caseData }) => {
  return (
    <div className="bg-[#eee2dc]">
      <div className="  max-w-screen-xl mx-auto md:px-8 py-10">
        <h1 className="px-5 py-1">Read more Case study: </h1>
        <ul className="grid lg:grid-cols-4 grid-cols-1 gap-2 py-1   px-4 bg-[#eee2dc]">
          {caseData.map((items, key) => (
            <Link
              className="bg-[#ac3b61] flex items-center text-[18px]  rounded-lg place-content-center py-3 hover:bg-[#eee2dc] hover:border-white hover:border hover:animate-bounce delay-100	"
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

export default CaseStudyBar;
