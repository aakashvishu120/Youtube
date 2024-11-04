import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/chatSlice';
import { generateRandomName, makeRandomMessage } from '../utils/helper';
import { LIVE_CHAT_NAME } from '../utils/constants';


const LiveChat = () => {

    const [liveMessage , setLiveMessage] = useState("");

    const dispatch = useDispatch();
    const chatMessages = useSelector((store) => store.chat.messages);


    useEffect(() => {
        const i = setInterval(() => {
            //API Polling
            dispatch(addMessage({
                name : generateRandomName(),
                message : makeRandomMessage(20)
            }));
            
        }, 1000);
        return () => {
            clearInterval(i);
        };
    }, []);


    return (
        <div className=''>
            <div className='mx-2 my-4 p-2 border h-[500px] md:h-[600px] border-black bg-slate-100 rounded-lg overflow-y-scroll md:flex md:flex-col-reverse '>
                {chatMessages && chatMessages.map((c, index)=> <ChatMessage key={index} name={c.name} message={c.message} />)}
            </div>

            <form className='p-2 ml-2 border border-black rounded-lg' onSubmit={(e)=>{
                e.preventDefault();
                dispatch(addMessage({name : LIVE_CHAT_NAME, message : liveMessage}))
                setLiveMessage("");
                }}>
                <input className='px-2 m-1 outline outline-offset-2 outline-1 rounded-sm' type="text" value={liveMessage} onChange={(e)=>{setLiveMessage(e.target.value)}} />
                <button className='px-4 py-1 mx-2 md:text-xl bg-blue-600 rounded-lg shadow-lg'>Send</button>
            </form>
        </div>
    )
}

export default LiveChat