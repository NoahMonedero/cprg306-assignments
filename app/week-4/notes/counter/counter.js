export default function Counter({currentCount, incrementCountFunction, resetCountFunction}){

    let buttonColorStyle;
    if(currentCount >= 10)
    {
        buttonColorStyle = "bg-gray-500 rounded text-white mt-5 px-4 py-2"
    } else {
        buttonColorStyle = "bg-blue-400 hover:bg-blue-800 active:bg-yellow-300 rounded text-white mt-5 px-4 py-2"
    }
    return(
        <div className="bg-slate-400 p-5">
            <h2 className="text-2xl">Increment Counter</h2>
            <p className="text-lg">Counter: {currentCount}</p>
            <button onClick={incrementCountFunction} className={buttonColorStyle} >Click Me!</button>
            <button onClick={resetCountFunction} className="bg-blue-400 hover:bg-blue-800 active:bg-yellow-300 rounded text-white mt-5 ml-10 px-4 py-2">Reset!</button>
        </div>
    );
}