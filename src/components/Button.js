import React from 'react'

const Button = ({name}) => {
    return (
    <div>
        <button className='px-4 py-1 mx-2 mt-2 mb-4  bg-gray-200 rounded-lg'>{name}</button>
    </div>
    )
}

export default Button