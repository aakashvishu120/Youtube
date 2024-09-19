import React from 'react'
import Button from './Button'

const list= ["All","Gaming", "Songs" , "Supercar", "Mixes", "Podecast" , "Live" , "Cricket", "News" , "Cooking", "Valentine"];

const ButtonList = () => {
    return (
        <div className='flex'>
            {/* <Button name="All"/>
            <Button name="Gaming"/>
            <Button name="Songs"/>
            <Button name="Supercar"/>
            <Button name="Mixes"/>
            <Button name="Podcast"/>
            <Button name="Live"/>
            <Button name="Cricket"/>
            <Button name="News"/>
            <Button name="Cooking"/>
            <Button name="Valentine"/> */}

            {list.map((items, index) => ( <Button name={items} key={index}/>)) }

        
        </div>
    )
}

export default ButtonList