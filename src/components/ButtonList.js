import React from 'react'
import Button from './Button'

const list= [ "IT" , "React" , "Gaming", "Songs" , "Supercar", "Mixes", "Podecast" , "Live" , "Cricket", "News" , "Cooking", "Valentine" , "Films" , "Airport", "SuperCar" , "Universe" , "3D" , "Physics" , "Watched" ,"Recent" , "News" , "Watched" , "Lamborghini" , "Akshay"];

//Higher order button
const Firstbutton = ({name}) => {
    return (
        <div>
            <button className='px-4 py-1 mx-2 mt-2 mb-4 text-white bg-black rounded-lg'>{name}</button>
        </div>
    )
}

const ButtonList = () => {
    return (
        <div className='flex overflow-x-auto no-scrollbar'>
            <Firstbutton name="All" />
            {list.map((items, index) => ( <Button name={items} key={index}/>)) }

        
        </div>
    )
}

export default ButtonList