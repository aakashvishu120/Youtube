import React from 'react'

const VideoCard = ({info}) => {

    const {snippet, statistics} = info;
    const {channelTitle , title , thumbnails} = snippet;

    return (
        <div className='p-1 m-2 w-80 shadow'>
            <img className='rounded-lg' alt="thumbnail" src= {thumbnails.medium.url} />
            <ul>
                <li className='font-bold py-2'>{title}</li>
                <li>{channelTitle}</li>
                <li>{statistics.viewCount} views</li>
            </ul>
        </div>
    )
}

//a function that takes a component ans return new component with added properties
//example of higher order function
export const AdVideoCard = ({info}) => {
    return (
        <div className='p-1 m-1 border border-red-400'>
            <VideoCard info={info}/>
            <p className='m-2 font-bold text-xs'>Ads Sponsored by ...</p>
        </div>
    )
}

export default VideoCard