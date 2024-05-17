import Home from './component/home';
import ExersicesList from './component/exersice';
 import {Route,Routes} from 'react-router-dom';
function App() {
  return (
    <>
      <Home/>
      <Routes>
        <Route path="/" elements={<Home/>}/>
        <Route path="/exersice/:id" elements={<ExersicesList/>}/>
      </Routes>
    </>
  )
}

export default App
