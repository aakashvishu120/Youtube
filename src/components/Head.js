import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';
import { YOUTUBE_SEARCH_API } from '../utils/constants';
import { cacheResults } from '../utils/searchSlice';
import { Link } from 'react-router-dom';
import SearchContainer from './SearchContainer';
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { FaMicrophone, FaChromecast  } from "react-icons/fa";
import { MdOutlineVideoCameraFront } from "react-icons/md";
import { IoMdNotifications } from "react-icons/io";


const Head = () => {

    const [searchQuery, setSearchQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);

    //getting chache means subscribing the search slice
    const searchCache = useSelector((store) => store.search);
    const dispatch = useDispatch();
    
    useEffect(() => {
        //make an api call after every key press
        //but if the difference between 2 api call is <200ms
        //decline the api call

        const timer = setTimeout(()=> {
                if(searchCache[searchQuery]){
                    setSuggestions(searchCache[searchQuery]);
                }
                else{
                    getSearchSuggestions()
                }
            }, 200)
        return () => {
            clearInterval(timer);
        }

    }, [searchQuery]);


    /**
     * Lifecycle of search sugegstion of query=iphone: 
     * key press - i 
     * - render the component
     * - useeffect()
     * - start timer => make api call after 200ms
     * 
     * key press -ip
     * - destroy the last component useeffect return method will be called, means evertime the searchQuery changes, return of useeffect calls first
     * - re-render the component
     * - useeffect()
     * - start timer => make api call after 200ms  
     */
    
    const getSearchSuggestions = async () => {
        const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
        const json = await data.json();
        // console.log("search API call" + json);
        setSuggestions(json[1]);

        //update cache
        dispatch(cacheResults({
            [searchQuery] : json[1]
        }));
    }



    const toggleMenuHandler = () => {
        dispatch(toggleMenu());
    }

    return (
        <div className='flex justify-between my-4 mx-2 p-2 w-full md:grid md:grid-flow-col md:p-5 md:m-2 md:shadow-lg md:justify-between '>
         {/* <div className='flex p-5 m-2'> */}
            <div className='md:flex md:col-span-3'>
                <img onClick={() => toggleMenuHandler()} className='hidden md:inline md:h-8 md:cursor-pointer' src="https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/What%20is%20a%20Hamburger%20Button.png?width=225&name=What%20is%20a%20Hamburger%20Button.png" alt="menu" />
                <a href="/"><img className='h-8 md:h-8 md:mx-2' src="https://t3.ftcdn.net/jpg/05/07/46/84/360_F_507468479_HfrpT7CIoYTBZSGRQi7RcWgo98wo3vb7.jpg" alt="youtube logo" /></a>
            </div>



            <div className='md:col-span-8 md:ml-10 md:flex'>
                {/* <input className='w-1/2 border border-gray-400 p-2 rounded-l-full' type="text" value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)} onFocus={()=> setShowSuggestions(true)} onBlur={()=>setShowSuggestions(false)} /> */}
                <input className='hidden md:inline-block md:w-1/2 md:border md:border-gray-400 md:p-2 md:rounded-l-full' type="text" value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)} onFocus={()=> setShowSuggestions(true)}  />

                    {showSuggestions  && suggestions.length > 0 &&
                    (<div onMouseLeave={()=>setShowSuggestions(false)} className='fixed bg-white py-2 px-5 rounded-2xl w-1/3 shadow-lg border border-gray-100'>
                        <ul>
                            {suggestions.map((s,index) =>(
                                <li key={s} className='py-2 shadow-sm hover:bg-gray-200'>{s}</li> 
                                // <Link to={"results?search_query="+ s} key={index} query={s} className='block py-2 shadow-sm hover:bg-gray-200'>
                                //     {s}                                    
                                //     </Link>

                            ))}
                        </ul>
                    </div>)
                    }
                
                <button className='hidden md:inline md:border md:border-gray-400 md:px-5 md:py-1 md:rounded-r-full md:bg-gray-200'><HiMiniMagnifyingGlass className='text-2xl block ' />
                </button>

                <button className='hidden md:inline md:mx-4 md:bg-gray-200 md:rounded-full p-2'>
                    <FaMicrophone className='text-xl' />
                </button>


            </div>




            <div className='flex md:col-span-1 md:px-1'>
                <FaChromecast className='text-xl mx-2 md:hidden' />
                <MdOutlineVideoCameraFront className='hidden md:inline md:inline md:text-2xl md:mx-2' />
                <IoMdNotifications className='text-xl mx-2 md:inline md:text-2xl md:mx-2' />
                <HiMiniMagnifyingGlass className='text-xl mx-2 inline md:hidden' />
                <img className='hidden md:h-8 md:inline' src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" alt="user-icon" />
            </div>
        </div>
    )
}

export default Head