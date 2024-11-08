import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEOS_API } from '../utils/constants';
import VideoCard, { AdVideoCard } from './VideoCard';
import Loading from './Loading';
import { Link } from 'react-router-dom';


const VideoContainer = () => {

    const [videos, setVideos] = useState([]);

    useEffect(() => {
        getVideos();
    }, [])

    const getVideos = async () => {
        const data = await fetch(YOUTUBE_VIDEOS_API);
        const json = await data.json();
        setVideos(json.items);
    }

    if(videos.length == 0){
        return <Loading/>
    }

    return  (
        <div className='flex flex-wrap justify-center md:flex md:flex-wrap md:justify-start md:align-top'>
            {videos[0] && <AdVideoCard info={videos[0]} />}
            {/* <VideoCard info={videos[0]} /> */}
            {videos.map((video) => <Link key={video.id} to={"/watch?v="+video.id}> <VideoCard key={video.id} info={video} /> </Link> )}
        </div>
    )
}

export default VideoContainer