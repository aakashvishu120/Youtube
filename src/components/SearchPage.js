import React, { useEffect, useState } from 'react'
import { YOUTUBE_SEARCHBAR } from '../utils/constants';
import { useSearchParams } from 'react-router-dom';
import SearchContainer from './SearchContainer';
import Loading from './Loading';

const SearchPage = () => {

    // console.log("props received in search page");

    const [searchParams] = useSearchParams();
    const query = searchParams.get('search_query');
    const [searchResults, setsearchResults] = useState("");

    console.log("inside searchPage");
    console.log(searchResults);

    useEffect(() => {
        getVideos();
    }, []);

    const getVideos = async () => {
        const data = await fetch(YOUTUBE_SEARCHBAR + query);
        const json = await data.json();
        setsearchResults(json);
        // console.log(Object.keys(searchResults).length);
    }


    return Object.keys(searchResults).length === 0 ? <Loading/> :   (
        <>
            <div>

            {searchResults.items && searchResults.items.map((results, index)=><SearchContainer info={results}></SearchContainer>)}
            </div>
        </>
    )
}

export default SearchPage