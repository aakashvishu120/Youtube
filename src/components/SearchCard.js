import React from 'react'
// const numeral = require('numeral');

const SI_SYMBOL = ['', 'k', 'M', 'B', 'T', 'P', 'E'];
function abbreviateNumber(num) {
    const tier = Math.floor(Math.log10(num) / 3) || 0;
    let result = '' + num;
    if (tier > 0) {
        const suffix = SI_SYMBOL[tier];
        const scale = Math.pow(10, tier * 3);
        const scaled = num / scale;
        result = scaled.toFixed(1).replace('.0', '') + suffix;
    }
    return result;
}

const searchCard = ({info}) => {

    console.log("inside search card");
    console.log(info);
    return (
    <div className='flex'>
        <div className='m-2'>
            <img className="rounded-lg" src={info.snippet.thumbnails.medium.url} alt="" />
        </div>

        <div className='m-2'>
            <h4 className='font-medium py-2'>{info && info.snippet.localized.title}</h4>
            <p className='text-xs'>{info && abbreviateNumber(info.statistics.viewCount)} views</p>
            <div className='my-2'>
                <span className='bg-black text-sm text-white rounded-full p-2 me-1'>{info && info.snippet.channelTitle.substring(0,1)}</span>
                <span className='text-sm'>{info && info.snippet.channelTitle}</span>
            </div>
            <p className='text-xs'>{info && info.snippet.localized.description.substring(0,100)}</p>
            <p>{info && info.contentDetails.caption ? <span className='text-sm bg-slate-200 p-1 rounded-md'>CC</span> : ""}</p>
        </div>
    </div>
    )
}

export default searchCard