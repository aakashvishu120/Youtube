import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';
import { YOUTUBE_SEARCH_API } from '../utils/constants';
import { cacheResults } from '../utils/searchSlice';

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
        console.log("search API call" + json);
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
        <div className='grid grid-flow-col p-5 m-2 shadow-lg'>
            <div className='flex col-span-1'>
                <img onClick={() => toggleMenuHandler()} className='h-8 cursor-pointer' src="https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/What%20is%20a%20Hamburger%20Button.png?width=225&name=What%20is%20a%20Hamburger%20Button.png" alt="menu" />
                <a href="/"><img className='h-8 mx-2' src="https://t3.ftcdn.net/jpg/05/07/46/84/360_F_507468479_HfrpT7CIoYTBZSGRQi7RcWgo98wo3vb7.jpg" alt="youtube logo" /></a>
            </div>


            <div className='col-span-10 ml-72'>
                <input className='w-1/2 border border-gray-400 p-2 rounded-l-full' type="text" value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)} onFocus={()=> setShowSuggestions(true)} onBlur={()=>setShowSuggestions(false)} />


                    {showSuggestions  && suggestions.length > 0 &&
                    (<div className='fixed bg-white py-2 px-5 rounded-2xl w-1/3 shadow-lg border border-gray-100'>
                        <ul>
                            {suggestions.map((s) =>(
                                <li key={s} className='py-2 shadow-sm hover:bg-gray-200'>{s}</li> 
                            ))}
                        </ul>
                    </div>)
                    }
                
                <button className='border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100'>🔍</button>
            </div>


            <div className='col-span-1'>
                <img className='h-8' src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" alt="user-icon" />
            </div>
        </div>
    )
}

export default Head