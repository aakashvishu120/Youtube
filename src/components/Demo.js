import React, { useMemo, useState } from 'react'
import { findNthPrime } from '../utils/helper';

//when i want to change the variable but we dont want re-render then use useRef hook


//react will re render the entire component when any prop and state variable changes
const Demo = () => {
    const [text, setText] = useState(0);
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    //heavy operation on large input(6th digit)
    //changing theme between does not need the calculation of prime number need some memoization 
    console.log("Rendering");

    // const prime = findNthPrime(text);

    //useMemo return values
    const prime = useMemo(() => findNthPrime(text), [text]);


    return (
    <div className={"m-4 p-3 w-96 h-96 border border-black " + (isDarkTheme && "bg-gray-900 text-white")}>

        <div>
            <button className='m-10 p-2 bg-green-200' onClick={()=>{setIsDarkTheme(!isDarkTheme)}}>Toggle</button>
        </div>

        <div>
            <input className='outline outline-1 px-2 rounded-sm w-72 text-black' type="number" value={text} onChange={(e)=>{setText(e.target.value)}} />
        </div>

        <div>
            <h1 className='mt-4 font-bold'>Nth Prime : {prime}</h1>
        </div>

    </div>
    )
}

export default Demo 