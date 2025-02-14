import Image from "next/image";
import Link from 'next/link'
import './globals.css'
export default function Home() {
  return (
      <main>
      <h1>Hello from zzak wanna create somthing</h1>
      <Link href="/users" alt="link to see users">Users from data</Link>
      </main>
  );
}
