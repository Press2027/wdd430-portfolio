
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-blue-700 text-white shadow-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link href="/" className="text-xl font-bold">
          Preston Machanga
        </Link>

        <ul className="flex gap-6">
          <li>
            <Link href="/" className="hover:text-blue-200">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-blue-200">
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
