"use client";

import Link from "next/link";
import { BiChevronDown } from "react-icons/bi";

const Navbar = () => {
  return (
    <>
      <div className="flex items-center justify-between w-full px-10 py-5 fixed z-50">
        <div>Capsule</div>
        <div className=" flex justify-center items-center gap-5">
          <Link
            href={"/products"}
            className="flex justify-center items-center gap-1"
          >
            <span>PRODUCTS</span>
            <BiChevronDown />
          </Link>
          <Link
            href={"/products"}
            className="flex justify-center items-center gap-1"
          >
            <span>RESOURCES</span>
            <BiChevronDown />
          </Link>
        </div>
        <div>
          <Link href={"/contact"} className="bg-white px-4 py-3 text-black font-poppins">CONTACT</Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
