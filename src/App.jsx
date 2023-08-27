import React from 'react';
import {Route, Routes} from "react-router-dom";
import Calendar from './Components/Calender';
import ToDos from './Components/ToDos';
import Menu from './Menu';
import './App.css';

const Home = () => {
    return<><h1 className='text-center' style={{color: "purple"}}>Event Planner</h1>
    <h2>Welcome to the Event Planner where you can arrange your everyday tasks. </h2>
    
    </> 
   
    
  }
const App = () => {


    return (
        <>
       
        <Menu />
        <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/Calendar' element={<Calendar/>} />
        <Route exact path='/ToDos' element={<ToDos/>} />
        </Routes>
        </>
    )

};

export default App;