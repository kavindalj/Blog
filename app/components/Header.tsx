"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Header() {
  const [scrollY, setScrollY] = useState(0);
  const [hidden, setHidden] = useState(false);
  const pathname = usePathname() || "/"; // Ensure default is "/"

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${scrollY > 50 ? "backdrop-blur-md shadow-md" : "bg-gray-200"
        } ${hidden ? "-translate-y-full" : "translate-y-0"}`}
    >
      <div className="p-4 flex flex-col justify-between items-center">
        <Link href="/">
          <h1 className="text-2xl font-bold">&lt; Kavinda&apos;s Blog &gt;</h1>
        </Link>
        <nav>
          <ul className="flex gap-4">
            {[
              { path: "/", label: "Home" },
              { path: "/about", label: "About" },
              { path: "/contact", label: "Contact" },
            ].map(({ path, label }) => (
              <li key={path}>
                <Link
                  href={path}
                  className={`px-2 py-1 ${pathname === path ? "border-b-2 border-gray-400" : ""
                    }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
