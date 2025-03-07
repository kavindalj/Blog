import Link from "next/link";

export default function Header() {
  return (
    <header className="p-4 flex flex-col justify-between items-center static ">
      <Link href="/">
        <h1 className="text-2xl font-bold"> &lt; Kavinda&apos;s Blog &gt;</h1>
      </Link>
      <nav>
        <ul className="flex gap-4 ">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
