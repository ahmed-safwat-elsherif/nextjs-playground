import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Home page",
  authors: {
    name: "Ahmed",
  },
};

export default function Home() {
  return (
    <div>
      <h1>Hello nextjs</h1>
      <Link href="/dashboard" className="block">
        To dashboard
      </Link>
      <Link href="/users" className="block">
        To users
      </Link>
    </div>
  );
}
