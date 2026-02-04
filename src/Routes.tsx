
import { Routes ,Route} from 'react-router-dom'
import Homepage from './Homepage'
import Users from './Users'
import Login from './Login'
import Modify from './Modify'
const RoutesFile = () => {
  return (
    <div>
      <Routes>
        {/* <Route path="/" element={}></Route> */}
        <Route path="/" element={<Homepage/>}></Route>
        <Route path="/users" element={<Users/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/modify" element={<Modify/>}></Route>
      </Routes>
    </div>
  )
}

export default RoutesFile
