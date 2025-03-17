"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [scrollY, setScrollY] = useState(0);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setHidden(true); // Hide when scrolling down
      } else {
        setHidden(false); // Show when scrolling up
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${scrollY > 50
        ? "backdrop-blur-md shadow-md"
        : "bg-transparent"
        } ${hidden ? "-translate-y-full" : "translate-y-0"}`}
    >
      <div className="p-4 flex flex-col justify-between items-center">
        <Link href="/">
          <h1 className="text-2xl font-bold">&lt; Kavinda&apos;s Blog &gt;</h1>
        </Link>
        <nav>
          <ul className="flex gap-4">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
