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
        <h1>© 2025 by Kavinda.</h1>
        <div className="flex gap-4">
          <Link href="https://web.facebook.com/kavindalj" className="flex">
            <FacebookIcon />
          </Link>
          <Link href="https://www.linkedin.com/in/kavindalj" className="flex">
            <LinkedInIcon />
          </Link>
          <Link href="https://github.com/kavindalj" className="flex">
            <GitHubIcon />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
