"use client";
import {useState} from "react";

export default function NewItem(){

    
    const[quantity, setQuantity]= useState(1);
    const[name, setName]= useState(" ");
    const[category, setCategory] = useState("Produce");
    
    
    let currentQuantity = quantity;
    let buttonDisable = "bg-gray-500 rounded text-white text-lg text-center h-10 w-10 hover:cursor-not-allowed ";
    let buttonEnable = "transition-all bg-green-700 hover:bg-green-800 active:bg-green-950 rounded text-white h-10 w-10 text-lg text-center";
    let fieldContainer = "flex flex-col bg-yellow-400 p-5 text-center rounded-lg shadow-inner shadow-yellow-900";
    let container = "flex flex-col bg-green-800 p-5 items-center rounded-3xl border-double border-x-2 border-b-8 border-yellow-500 shadow-2xl shadow-emerald-950";
    const incQuantity = () => currentQuantity < 20  && setQuantity(quantity + 1);
    const decQuantity = () => currentQuantity > 1 && setQuantity(quantity - 1);
    
    const handleSubmit = (event) => {
        event.preventDefault();
        let item = {
            name: name,
            category: category,
            quantity: quantity
        }
        console.log(item);
        alert("A name was submitted: " + name + "A category was submitted: " + category + "A quantity was submitted: " + quantity );
        setCategory("Produce");
        setName("");
        setQuantity(1);
      };


    return(
        <main >
            <form onSubmit={handleSubmit}>
                <div className={container}>
                    <div className={fieldContainer}>
                        <input type="text" placeholder="Item Name" required className="w-full font-mono mt-1 border-2 border-gray-300 p-2 rounded-md text-black" value={name} onChange={(event) => setName(event.target.value)}/>
                        <select className="w-full font-mono mt-1 border-2 border-gray-300 p-2 rounded-md text-black" value={category} onChange={(event) => setCategory(event.target.value)}>
                            <option disabled value>Category:</option>
                            <option value="produce">Produce</option>
                            <option value="dairy">Dairy</option>
                            <option value="bakery">Bakery</option>
                            <option value="meat">Meat</option>
                            <option value="frozen foods">Frozen Foods</option>
                            <option value="canned goods">Canned Goods</option>
                            <option value="dry goods">Dry Goods</option>
                            <option value="beverages">Beverages</option>
                            <option value="snacks">Snacks</option>
                            <option value="household">Household</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                <p className="text-4xl text-center font-light text-slate-100 font-mono mt-10">How Many?</p>
                    <div className="flex">
                        <div className={fieldContainer}>
                            <div className= "bg-slate-700 rounded-md p-2 mb-5">    
                                <p className="text-4xl" value={quantity} onChange={(event) => setQuantity(event.target.value)}>{quantity}</p>
                            </div>
                            <div className="flex gap-10 ">
                                <div className="transition ease-in-out delay-150 hover:scale-110 duration-300">
                                    <button type="button" onClick={decQuantity} className={currentQuantity > 1 ? buttonEnable: buttonDisable}> - </button>
                                </div>   
                                <div className="transition ease-in-out delay-150 hover:scale-110 duration-300">
                                    <button type="button" onClick={incQuantity} className={ currentQuantity < 20 ? buttonEnable: buttonDisable}> + </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <input type="submit" value="Add" className="text-4xl text-center font-light text-slate-100 font-mono mt-10" />
                </div>
            </form>
        </main>

    );
}4