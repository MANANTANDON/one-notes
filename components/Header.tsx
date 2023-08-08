import Image from "next/image";
import logo from "./Assets/logo two.png";
import { useState, useEffect } from "react";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScrolled]);

  return (
    <header className={`z-[100]`}>
      <div className="flex items-center space-x-4 md:space-x-10">
        <Image
          src={logo}
          alt=""
          width={100}
          height={100}
          className="cursor-pointer object-contain"
        />
        <ul className=" flex space-x-4">
          <li className="headerLink">Class 11</li>
          <li className="headerLink">Class 12</li>
        </ul>
      </div>
      <div className="flex items-center space-x-4 text-sm font-light">
        <img
          src="https://rb.gy/g1pwyx"
          alt="user image"
          className="cursor-pointer rounded-full"
        />
      </div>
    </header>
  );
};
