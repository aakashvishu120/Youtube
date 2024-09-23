import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEOS_BY_ID } from '../utils/constants';
import { combineSlices } from '@reduxjs/toolkit';
import Shimmer from './Shimmer';
import SearchCard from './SearchCard';


const SearchContainer = ({info}) => {
    const videoId = info.id.videoId;
    const [video ,setvideo] = useState("");

    console.log("inside searchContainer");
    console.log(video);

    useEffect(() => {
        getVideos();
    },[]);
// 
    const getVideos = async () => {
        const data = await fetch(YOUTUBE_VIDEOS_BY_ID + videoId);
        const json = await data.json();
        console.log(json);
        setvideo(json.items);
    }


    return Object.keys(video).length === 0 ? <Shimmer/> :(
        <div className='m-2 p-2'>
            {video.map((result, index) => <SearchCard key={index} info={result}></SearchCard>)}
        </div>
    )
}

export default SearchContainer