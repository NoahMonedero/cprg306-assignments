"use client";
import ItemsList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";
import {useState} from "react";


export default function Page(){
    const [items,setItems] = useState(
        itemsData.map((item) => ({...item}))
    );

    const handleNewItem = (newItem) =>{
        setItems([newItem,...items]);
    };

    return(
        <main className=" bg-emerald-900 h-full justify-center items-center">
            <h1 className="text-6xl  text-center font-semibold text-slate-300 font-mono underline underline-offset-8 decoration-4 decoration-slate-500 mb-10">Shopping List</h1>
            <div>
                <NewItem onAddItem={handleNewItem}/>
            </div>
            <div className="mt-5">
                <ItemsList itemsArray={items}/>
            </div>
        </main>
    );

}