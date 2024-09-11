import Link from "next/link";

export default function MyFirstComponent() {
  return (
    <div>
        <h1>Noah Monedero</h1>
        <Link className="underline text-cyan-700 hover:text-cyan-950" href="https://github.com/NoahMonedero/cprg306-assignments">My Week 2 Repository!</Link>
    </div>
  );
}
