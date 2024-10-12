

export default function FunctionPage(){

    function helloWorld(userName,dayOfWeek){
        //return "Hello World! Welcome Back " + userName + ". Today is " + dayOfWeek;
        return `Hello World! Welcome back ${userName}. Today is ${dayOfWeek}.`;
    }

    const helloWorld2 = (userName,dayOfWeek) =>
    {
        return `Hello World! Welcome back ${userName}. Today is ${dayOfWeek}. `;
    }
    const helloWorld3 = (userName) => `Hello ${userName}`;

    const helloMath = (a,b) => a + b ;

    const louder = (textFunc, userName) => {
        let thisText = textFunc(userName);

        return `${thisText.toUpperCase()}!!!!`;
    }

    //Think about this function as a factory that produces more functions (?)
    //So when this function returns the function, the new variable will be a function that will need a num2 parameter.
    const multiBy = (nm1) =>{
        return (nm2) => nm1 * nm2;
    }

    const multiByThree = multiBy(3);
    const multiByTen = multiBy(10);

    const origFunc = (num) => num + 2;
    const newFunc = origFunc;

    //<p>{louder(helloWorld3,'Susan')}</p> is envocing a function in a function.
    return(
        <main>
            <h1>Functions:</h1>
            <p>{helloWorld("Alice","Wednesday")}</p>
            <p>{helloWorld2("Noah","Tuesday")}</p>
            <p>{helloWorld3("Joe")}</p>
            <p>{helloMath(1,2)}</p>
            <p>{louder(helloWorld3,'Susan')}</p>
            <p>{louder(helloWorld2,'Anne')}</p>
            <p>{multiByThree(7)}</p>
            <p>{multiByTen(7)}</p>
            <p>{newFunc(2)}</p>
        </main>
    );

}