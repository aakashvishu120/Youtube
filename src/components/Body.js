import React from 'react'
import Sidebar from './Sidebar'
import MainContainer from './MainContainer'
import WatchPage from './WatchPage'
import { Outlet } from 'react-router-dom'

const Body = () => {
    return (
        <div className='flex justify-center md:flex md:w-full'>
            <Sidebar/>

            {/* these component are depend on route, use OUTLET */}
            {/* <MainContainer/>
            <WatchPage/> */}
            
            <Outlet/>
        </div>
    )
}

export default Body