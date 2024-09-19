import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const isMenuOpen = useSelector(store => store.app.isMenuOpen);
    // const closeMenu = useSelector(store => store.app.closeMenu);

    if(!isMenuOpen) return null;

    return (
    <div className='p-5 shadow-lg w-60'>
        <ul>
            <li> <Link to="/">Home</Link></li>
            <li> <Link to="/demo">Shorts</Link></li>
            <li>Subscription</li>
            <li>Videos</li>
            <li>Live</li>
        </ul>

        <h1 className='font-bold pt-5'>Subscriptions</h1>
        <ul>
            <li>Music</li>
            <li>Sports</li>
            <li>Gaming</li>
            <li>Movies</li>
        </ul>

        <h1 className='font-bold pt-5'>You</h1>
        <ul>
            <li>Your channel</li>
            <li>History</li>
            <li>Playlist</li>
            <li>Your Videos</li>
            <li>Watch later</li>
            <li>Liked Videos</li>
        </ul>

        <h1 className='font-bold pt-5'>Explore</h1>
        <ul>
            <li>Trending</li>
            <li>Shopping</li>
            <li>Music</li>
            <li>Movies</li>
            <li>Live</li>
            <li>Gaming</li>
            <li>News</li>
            <li>Sports</li>
        </ul>
    </div>
    )
}

export default Sidebar