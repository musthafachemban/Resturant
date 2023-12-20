import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Pages/Home';
import RestView from './Pages/RestView';
import {Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div>
   {/*    <h2>
        Restuarent List
      </h2> */}
       <Header/> 


      <Routes>


        <Route path='/' element={<Home/>}/>
        <Route path='/restuarentview/:id' element={<RestView/>}/>

      </Routes>


      <Footer/>
    
    </div>
  );
}

export default App;
