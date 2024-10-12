"use client"
import { useState } from "react";
import Counter from "./counter";


export default function CounterPage(){

    //useState returns an array and a setter function. Needs to add a directive to work, which basically saying to use the client not the server. "use client"
    const[counter,setCounter] = useState(0);
    const incrementCounter = () => {
        let currentCount = counter;
        if(counter <=9 )
        {
            setCounter(currentCount + 1);
        }
    }

    const resetCount = () => {
        setCounter(0);
    }

    return(
        <main>
            <div>
                <p>{counter}</p>
                <button onClick={incrementCounter}>Click me!</button>
            </div>
            <div className="bg-slate-100">
            <Counter currentCount={counter} incrementCountFunction ={incrementCounter} resetCountFunction={resetCount}></Counter>
            </div>
        </main>
    );

}