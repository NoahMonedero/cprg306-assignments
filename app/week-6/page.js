import ItemsList from "./item-list";
export default function Page(){
    return(
        <main className="flex flex-col bg-emerald-900 h-screen justify-center items-center">
            <h1 className="text-6xl  text-center font-semibold text-slate-300 font-mono underline underline-offset-8 decoration-4 decoration-slate-500 m-10">Shopping List</h1>
            <ItemsList/>
        </main>
    );

}