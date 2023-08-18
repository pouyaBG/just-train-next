import { footerLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col text-black-100 mt-5 border-t border-gray-100">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
        <div className="flex flex-col justify-start items-start gap-6">
          <Link href={"/"} className="flex justify-center items-center">
            <Image
              src={"/logo.svg"}
              alt="logo"
              width={118}
              height={18}
              className="object-contain"
            />
          </Link>
          <p className="text-base text-gray-700">
            Carhub 2023 <br />
            All Rights Reserved &copy;
          </p>
        </div>

        <div className="footer__links">
          {footerLinks.map((links) => (
            <div key={links.title} className="footer__link">
              <h3 className="font-bold">{links.title}</h3>
              {links.links.map((item) => (
                <Link
                  href={item.url}
                  key={item.title}
                  className="text-gray-500"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          ))}
        </div>

        <div className="w-full flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10">
          <p>@2023 carHub. All Rights Reserved</p>
          <div className="footer__copyrights-link">
            <Link href={"/"}>Privacy policy</Link>
            <Link href={"/"}>Terms of use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
