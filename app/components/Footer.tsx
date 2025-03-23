"use client";

import React from "react";
import Link from "next/link";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="container mx-auto max-w-15xl flex justify-between items-center text-xl p-4">
        <h1 className="text-gray-600">© 2025 by Kavinda.</h1>
        <div className="flex gap-4">
          <Link href="https://github.com/kavindalj" className="flex text-gray-600 hover:text-black">
            <GitHubIcon />
          </Link>
          <Link href="https://www.linkedin.com/in/kavindalj" className="flex text-gray-600 hover:text-blue-600">
            <LinkedInIcon />
          </Link>
          <Link href="https://web.facebook.com/kavindalj" className="flex text-gray-600 hover:text-blue-600">
            <FacebookIcon />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
