import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaRegNewspaper  } from 'react-icons/fa';
import { BsEmojiAngry } from "react-icons/bs";
import { MdSubscriptions, MdHomeFilled, MdLiveTv , MdMusicNote, MdLocalMovies, MdOutlinePlaylistPlay, MdWatchLater  } from "react-icons/md";
import { SiYoutubeshorts, SiYoutubegaming  } from "react-icons/si";
import { BiSolidVideos, BiLike  } from "react-icons/bi";
import { FaTrophy,FaHistory   } from "react-icons/fa";
import { RiFolderUserLine } from "react-icons/ri";
import { LiaFileVideoSolid } from "react-icons/lia";
import { IoMdTrendingUp } from "react-icons/io";
import { LuShoppingBag } from "react-icons/lu";




const Sidebar = () => {
    const isMenuOpen = useSelector(store => store.app.isMenuOpen);
    // const closeMenu = useSelector(store => store.app.closeMenu);

    if(!isMenuOpen) return null;

    return (
    <div className='m-5 p-1 w-1/6 *:text-sm *:leading-8'>
        {/* leading is used for line height */}
        <ul className='w-56'>
            <li> <MdHomeFilled className='inline text-xl m-2'/> <Link to="/"> Home</Link></li>
            <li> <SiYoutubeshorts className='inline text-xl m-2' /> <Link to="/demo"> Shorts</Link></li>
            <li> <MdSubscriptions className='inline text-xl m-2' />Subscription</li>
            <li><BiSolidVideos className='inline text-xl m-2' /> Videos</li>
            <li> <MdLiveTv className='inline text-xl m-2' /> Live</li>
        </ul>

        <h1 className='font-bold pt-5'>Subscriptions</h1>
        <ul>
            <li><MdMusicNote className='inline text-xl m-2' />Music</li>
            <li><FaTrophy className='inline text-xl m-2'/>Sports</li>
            <li><SiYoutubegaming className='inline text-xl m-2'/>Gaming</li>
            <li><MdLocalMovies className='inline text-xl m-2'/>Movies</li>
        </ul>

        <h1 className='font-bold pt-5'>You</h1>
        <ul>
            <li><RiFolderUserLine className='inline text-xl m-2'/>Your channel</li>
            <li><FaHistory className='inline text-xl m-2'/>History</li>
            <li><MdOutlinePlaylistPlay className='inline text-xl m-2'/>Playlist</li>
            <li><LiaFileVideoSolid className='inline text-xl m-2'/>Your Videos</li>
            <li><MdWatchLater className='inline text-xl m-2'/>Watch later</li>
            <li><BiLike className='inline text-xl m-2'/>Liked Videos</li>
        </ul>

        <h1 className='font-bold pt-5'>Explore</h1>
        <ul>
            <li><IoMdTrendingUp className='inline text-xl m-2'/>Trending</li>
            <li><LuShoppingBag className='inline text-xl m-2' />Shopping</li>
            <li><MdMusicNote className='inline text-xl m-2' />Music</li>
            <li><BiSolidVideos className='inline text-xl m-2' />Movies</li>
            <li> <MdLiveTv className='inline text-xl m-2' />Live</li>
            <li><SiYoutubegaming className='inline text-xl m-2'/>Gaming</li>
            <li><FaRegNewspaper className='inline text-xl m-2' />News</li>
            <li><FaTrophy className='inline text-xl m-2'/>Sports</li>
        </ul>
    </div>
    )
}

export default Sidebar