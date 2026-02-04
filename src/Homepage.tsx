
import Button from './Button'
import photo from './assets/database.jpg'
import Heading from './Heading'
import Description from './Description'
const Homepage = () => {
  return (
    <div className='flex min-[683px]:flex-row flex-col-reverse min-[683px]:justify-center items-center bg-linear-to-br from-blue-50 via-white to-purple-50 my-8'>
      <div className=' gap-4 w-full flex flex-col justify-center items-center px-3'>
        {/* <h1 className='bg-linear-to-br from-blue-500 to-purple-600 bg-clip-text text-transparent  text-shadow-md min-[1080px]:text-6xl flex flex-row justify-center items-center text-center mx-5 min-[380px]:text-4xl text-3xl'>Welcome to Technofi</h1> */}
        <Heading style={'bg-linear-to-br from-blue-500 to-purple-600 bg-clip-text text-transparent  text-shadow-md min-[1080px]:text-6xl flex flex-row justify-center items-center text-center mx-5 min-[380px]:text-4xl text-3xl'} headingTitle={"Welcome to Technofi"}/>
        {/* <h3 className='text-gray-500 min-[1080px]:text-5xl min-[380px]:text-3xl text-2xl text-center'>A reliable platform to store users' information.Just Register and enjoy!!! </h3> */}
        <Description style={'text-gray-500 min-[1080px]:text-5xl min-[380px]:text-3xl text-md text-center min-[375px]:mx-6'} description={'A reliable platform to store users information.Just Register and enjoy!!!'}/>
        <Button title={"Register"} style={'bg-linear-to-br from-blue-500 to-purple-600 flex flex-row justify-center items-center p-3 rounded-2xl cursor-pointer text-amber-50 text-center text-2xl '}/>
      </div>
      <div className='min-[683px]:w-3xl min-[540px]:w-2xl w-xl min-[344px]:w-95 min-[344px]:my-3'><img src={photo} alt="" /></div>
    </div>

  )
}

export default Homepage
