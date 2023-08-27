import React from 'react';
import {Route, Routes} from "react-router-dom";
import Calendar from './Components/Calender';
import ToDos from './Components/ToDos';
import Menu from './Menu';
const App = () => {
    const Home = () => {
        return <h1>Home Page</h1>
        
      }
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