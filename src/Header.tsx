import React from 'react'
import logo from "./assets/6490031.jpg"
import Navbarbutton from './Navbarbutton'
import Navbarlogo from "./assets/navigation-bar.png"
import CloseLogo from "./assets/close.png"
import { useRef } from 'react'
import { SmallNavbarbutton } from './Navbarbutton'
import Homepage from './Homepage'
// import { ref } from 'process'
import Login from './Login'
const Header = () => {
    const navBarRef = useRef<HTMLDivElement | null>();
    console.log(navBarRef);
    function handleNavbarLogo(): void {
        navBarRef.current.style.display = "block";
    }
    function handleCrossLogo(): void {
        // console.log(navBarRef.current?.style.display);
        navBarRef.current.style.display="none";
    }
    return (
        <div className='w-full  flex flex-row justify-center my-3'>
            <header id="header" className='flex flex-row justify-between items-center w-11/12 fixed bg-amber-50 top-0 py-4'>
                <div id="logo" className='flex flex-row justify-center items-center'>
                    <div id='image'><img src={logo} alt="" className='w-15 h-auto rounded-2xl' /></div>
                    <div id='title' className='text-3xl font-medium bg-linear-to-br from-blue-500 to-purple-600 bg-clip-text text-transparent  text-shadow-md mx-2'>Technofi</div>
                </div>
                <div id="navbar" className='min-[763px]:flex flex-row justify-around items-center gap-6 hidden'>
                    <Navbarbutton option={"Home"} endpoint={"/"} />
                    <Navbarbutton option={"About"} />
                    <Navbarbutton option={"Service"} />
                    <Navbarbutton option={"Career"} />


                </div>
                <div className='max-[763px]:flex hidden rounded-full cursor-pointer' onClick={handleNavbarLogo}><img src={Navbarlogo} alt="" className='h-6 w-6' /></div>


                <div id="log" className='bg-linear-to-br from-blue-500 to-purple-600 rounded-2xl min-[763px]:flex flex-row justify-center items-center text-xl md:text-2xl text-amber-50 px-9 py-2 hidden cursor-pointer'>Log In</div>
            </header>
            <div id='smallNavbar' ref={navBarRef} className='bg-linear-to-br from-blue-500 to-purple-600 rounded-2xl  hidden min-[763px]:hidden flex-col w-6/12 gap-5 absolute right-2'>
                <div>
                    <SmallNavbarbutton option={"Home"} endpoint={"/"} />
                    <SmallNavbarbutton option={"About"} />
                    <SmallNavbarbutton option={"Service"} />
                    <SmallNavbarbutton option={"Career"} />
                    <SmallNavbarbutton option={"Log In"} endpoint={"/login"}/>
                </div>
                <div className='max-[763px]:flex hidden rounded-full cursor-pointer absolute right-2 top-2' onClick={handleCrossLogo} ><img src={CloseLogo} alt="" className='h-4 w-4' /></div>

            </div>

        </div>
    )
}

export default Header
