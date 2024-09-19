import React, { useEffect, useRef, useState } from 'react'

//a var which will not reset like x var when my re-ender happens, it holds that value still
//useRef hold the values between states

const Demo2 = () => {
    const [y , setY] = useState(0);
    let x = 10;
    const ref = useRef(0);   //it is an object having key current which contains value
    /**
     * not like => ref =0
     * ref = {current : 0}
     */

    console.log("re-rendring demo2 component");

    const j = useRef(null);
    useEffect(() => {
        // const i  =setInterval(() => {
        //     console.log("namaste react " , Math.random);
        // }, 1000);
        // return () => clearInterval(i);
        
        //as soon as page change it should stop printing namaste react, clearInterval
        //but we also want setInterval to be stop on page change as well as using button click, refer the current interval using use ref

        j.current = setInterval(() => {
            console.log("namaste react " , Math.random());
        }, 1000);

        //page change clear interval
        return () => clearInterval(j.current);

    }, []);

    return (
        <div className='m-4 p-2 bg-slate-50 border border-black w-96 h-96'>
            <div>
                <button className='bg-green-600 px-2 m-4 rounded-sm' onClick={()=>{
                    x = x+1;
                    console.log("x = ", x);
                    }}>Increase x</button>
                <span className='font-bold text-xl'>
                    Let = {x}
                </span>
            </div>

            <div>
                <button className='bg-slate-600 px-2 m-4 rounded-sm' onClick={()=>{
                    setY(y+1);
                    console.log("y = ", y);
                    }}>Increase Y</button>
                <span className='font-bold text-xl'>
                    State = {y}
                </span>
            </div>


            <div>
                <button className='bg-pink-400 px-2 m-4 rounded-sm' onClick={()=>{
                    ref.current = ref.current + 1;
                    console.log("ref = ", ref.current);
                    }}>Increase Ref</button>
                <span className='font-bold text-xl'>
                    Ref = {ref.current}
                </span>
            </div>


            <di>
                <button className='bg-red-500 p-2 m-4 font-bold rounded-sm text-white' onClick={()=>{
                    clearInterval(j.current)
                    console.log("stop printing called");
                }}>
                    Stop Printing
                </button>
            </di>
        </div>
    )
}

export default Demo2