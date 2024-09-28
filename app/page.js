import Link from "next/link";

export default function Home() {

  let linkStyle = "underline text-cyan-700 hover:text-cyan-950"
  return (
    <main>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <ul>
        <li>
          <Link className={linkStyle} href="week-2">Week 2 Assignment</Link>
        </li>
        <li>
          <Link className={linkStyle} href="week-3">Week 3 Assignment</Link>
        </li>
        <li>
          <Link className={linkStyle} href="./week-4/functions">Week 4 function</Link>
        </li>
        <li>
          <Link className={linkStyle} href="./week-4/counter">Week 4 counter</Link>
        </li>
      </ul>
    </main>
  );
}
