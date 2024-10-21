import Link from "next/link";
import NewItem from "./new-item";
export default function Page(){
    return(
        <main className=" bg-gray-800 h-screen ">
            <Link className="absolute font-mono bg-slate-900 p-1 rounded-md" href="./"> ⬅️Go back </Link>
            <div className="mb-10 p-12">  
                <h2 className="text-6xl  text-center font-semibold text-slate-300 font-mono underline underline-offset-8 decoration-4 decoration-slate-500">Shopping list</h2>
            </div>
            <div className="flex justify-center items-center">
                <NewItem/>
            </div>
        </main>
    );
};