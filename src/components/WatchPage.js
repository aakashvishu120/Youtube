import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import CommentsContainer from './CommentsContainer';
import LiveChat from './LiveChat';

const WatchPage = () => {

    const [searchParams] = useSearchParams();

    //when watch page will be open then siderbar always(not true/false) collapses therefore dispatch an action(send input to redux store)
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(closeMenu())
    },[]);

    return (
        <div className='flex flex-row md:w-full md:flex md:flex-col  '>
            {/* <div className='flex flex-col w-full justify-center md:px-5 md:ml-28  md:flex md:flex-row'>
             */}
            <div className='md:flex md:justify-center md:w-full'>
                    <iframe className='md:rounded-lg md:block md:my-4 md:w-[1000px] md:h-[550px] w-full ' src={"https://www.youtube.com/embed/"+ searchParams.get('v')} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

                    <LiveChat className=""/>
            </div>

            <CommentsContainer/>
        </div>
        
    )
}

export default WatchPage;