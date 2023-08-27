
/*import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
//import "./App.css";
  
const Calender = () => {
    
};
  
export default Calender;*/
import { useState } from 'react';
import ToDos from './ToDos';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
//import './App.css';

const Calender = () => {
  const [date, setDate]=useState(new Date());
  return (
    <div className='app'>
      
      <h1 className='text-center'>Calendar</h1>
      <div className='calendar-container'>
        <Calendar onChange={setDate} value={date} />
        
      </div>
      <p className='text-center'>
        <span className='bold'>Selected Date:</span>{' '}
        {date.toDateString()}
      </p>
      <ToDos></ToDos>
    
    </div>
  );
}

export default Calender;