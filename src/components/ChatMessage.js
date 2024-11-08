import React from 'react'

const ChatMessage = ({name, message}) => {
    return (
        <div className='flex p-2 items-center shadow-sm'>
            <img className='h-8 inline ' src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" alt="user-icon" />
            <span className='font-bold px-2'>{name}</span>
            <span>{message}</span>
        </div>
    )
}

export default ChatMessage