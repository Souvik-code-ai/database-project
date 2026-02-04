
import logo from "./assets/6490031.jpg"
import Navbarbutton from './Navbarbutton'
import Navbarlogo from "./assets/navigation-bar.png"
import CloseLogo from "./assets/close.png"
import { Link } from 'react-router-dom'
import { useRef } from 'react'
import { SmallNavbarbutton } from './Navbarbutton'

// import { ref } from 'process'
// import Login from './Login'
const Header = () => {
    const navBarRef = useRef<HTMLDivElement | null>(null);
    // console.log(navBarRef);
    const navBarButton = useRef<HTMLDivElement | null>(null);
    // console.log(navBarButton.current);
    function handleNavbarLogo(): void {
        if (navBarRef.current && navBarButton.current) {
            navBarRef.current.style.display = "flex";
            navBarButton.current.style.display = "none";
        }

    }
    function handleCrossLogo(): void {
        // console.log(navBarRef.current?.style.display);
        if (navBarRef.current && navBarButton.current) {
        navBarRef.current.style.display = "none";
        navBarButton.current.style.display = "flex";
        }
    }
    return (
        <div className='w-full  flex flex-row justify-center my-3'>
            <header id="header" className='flex flex-row justify-between items-center  fixed bg-amber-50 top-0 py-4 min-[375px]:w-[95%] min-[414px]:w-[99%] min-[344px]:w-[90%] min-[853px]:w-[98%] min-[683px]:w-[98%] min-[414px]:px-3 min-[763px]:w-[98%] min-[763px]:pr-6 min-[768px]:w-[98%] min-[768px]:px-2'>
                <div id="logo" className='flex flex-row justify-center items-center'>
                    <div id='image'><img src={logo} alt="" className='w-15 h-auto rounded-2xl' /></div>
                    <div id='title' className='text-3xl font-medium bg-linear-to-br from-blue-500 to-purple-600 bg-clip-text text-transparent  text-shadow-md mx-2'>Technofi</div>
                </div>
                <div id="navbar" className='min-[763px]:flex flex-row justify-around items-center gap-6 hidden min-[763px]:gap-1
                min-[768px]:gap-4 min-[853px]:gap-6'>
                    <Navbarbutton option={"Home"} endpoint={"/"} />
                    <Navbarbutton option={"User"} endpoint={"/users"} />
                    <Navbarbutton option={"Modify"} endpoint={"/modify"} />


                </div>
                <div className='min-[763px]:hidden flex rounded-full cursor-pointer' onClick={handleNavbarLogo} ref={navBarButton}><img src={Navbarlogo} alt="" className='h-6 w-6' /></div>


                <Link to={"/login"}><div id="log" className='bg-linear-to-br from-blue-500 to-purple-600 rounded-2xl min-[763px]:flex flex-row justify-center items-center text-xl md:text-2xl text-amber-50 px-9 py-2 hidden cursor-pointer min-[763px]:mr-27 min-[768px]:mr-0 min-[853px]:mr-0'>Log In</div></Link>
            </header>
            <div id='smallNavbar' ref={navBarRef} className='bg-linear-to-br from-blue-500 to-purple-600 rounded-2xl  hidden min-[763px]:hidden flex-col w-6/12 gap-5 absolute right-2 min-[414px]:right-3'>
                <div>
                    <SmallNavbarbutton option={"Home"} endpoint={"/"} />
                    <SmallNavbarbutton option={"User"} endpoint={"/users"} />
                    <SmallNavbarbutton option={"Modify"} endpoint={"/modify"} />
                    <SmallNavbarbutton option={"Log In"} endpoint={"/login"} />
                </div>
                <div className='max-[763px]:flex hidden rounded-full cursor-pointer absolute right-2 top-2' onClick={handleCrossLogo} ><img src={CloseLogo} alt="" className='h-4 w-4' /></div>

            </div>

        </div>
    )
}

export default Header
