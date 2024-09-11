import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <ul>
        <li>
          <Link className="underline text-cyan-700 hover:text-cyan-950" href="week-2">Week 2 Assignment</Link>
        </li>
      </ul>
    </main>
  );
}
