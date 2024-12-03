"use client";
import Item from "./item";
import {useState} from "react";


export default function ItemsList({itemsArray}){

  let [sortBy, setSortBy] = useState("name");

  const itemSort = itemsArray.sort(
  (sortBy === 'name')? ((item1,item2) => (item1.name < item2.name)? -1 : (item1.name > item2.name)? 1 : 0) :
  ((item1,item2) => (item1.category < item2.category)? -1 : (item1.category > item2.category)? 1 : 0)
);

  const nameSort = () => setSortBy("name") && itemSort();
  const catSort = () => setSortBy("category") && itemSort();
  let buttonDisable = "bg-gray-500 rounded text-white text-lg text-center h-10 w-40 hover:cursor-not-allowed ";
  let buttonEnable = "transition-all bg-green-700 hover:bg-green-800 active:bg-green-950 rounded text-white h-10 w-40 text-lg text-center";

  return(
    <div className="flex flex-col max-h-f m-auto w-1/2 bg-green-800 p-5 items-center rounded-3xl border-double border-x-2 border-b-8 border-yellow-500 shadow-2xl shadow-emerald-950">
      <div className=" flex gap-10 m-auto ">
        <button onClick={nameSort} className = {sortBy === "name" ? buttonDisable : buttonEnable}>Sort by <span className="font-black">Name</span></button>
        <button onClick={catSort} className = {sortBy === "category" ? buttonDisable : buttonEnable}>Sort by <span className="font-black">Category</span></button>
      </div>
      <div className="m-auto">
        <p className="text-2xl  text-center font-semibold text-slate-300 font-mono underline underline-offset-8 decoration-4 decoration-slate-500 m-10">Sorted by: <span className="capitalize">{sortBy}</span></p>
        <div className="grid grid-cols-3 gap-5">
          {itemsArray.map(
            (itemData) => (<Item itemObj={itemData} key={itemData.id}/>)
          )}
        </div >
      </div>
    </div>
  );


}