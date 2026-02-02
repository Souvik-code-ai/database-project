import React from 'react'
import { Routes ,Route} from 'react-router-dom'
import Login from './Login'
const Routes = () => {
  return (
    <div>
      <Routes>
        {/* <Route path="/" element={}></Route> */}
        <Route path="/login" element={<Login/>}></Route>
      </Routes>
    </div>
  )
}

export default Routes
