import { useState } from 'react'
import './App.css' 
import left_arrow from "./assets/arrow-left.svg";
import right_arrow from "./assets/arrow-right.svg";
function App() {
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
   const [selectedDate,setSelectedDate] = useState(new Date());

   const daysInMonth = ()=>{
     const daysArray = [];

     const firstDay = new Date(selectedDate.getFullYear(),selectedDate.getMonth(),1);
     const lastDay = new Date(selectedDate.getFullYear(),selectedDate.getMonth() +1,0);

     for(let i =0;i<firstDay.getDate();i++){
       daysArray.push(null)
     }
     for(let i =1;i<=lastDay.getDate();i++){
       daysArray.push(new Date(selectedDate.getFullYear(),selectedDate.getMonth(),i))
     }
     return daysArray;
   }
   const handleChangeMonth = (e)=>{
      const newMonth = parseInt(e.target.value,10);
      setSelectedDate(new Date(selectedDate.getFullYear(),newMonth,1))
   }
   const handleChangeYear = (e)=>{
    const newYear = parseInt(e.target.value,10);
    console.log(newYear)
    setSelectedDate(new Date(newYear,selectedDate.getMonth(),1))
   }

   const isSameDay = (date1,date2)=>{
     return date1.getDate() === date2.getDate() && date1.getMonth() === date2.getMonth() &&
     date1.getFullYear() === date2.getFullYear();
   }
  return (
    <>
      <div className='calender'>
          <div className="header">
              <button onClick={()=>{setSelectedDate(new Date(selectedDate.getFullYear(),
                selectedDate.getMonth()-1,1))}}>
                 <img src={left_arrow} alt="" />
              </button>
              <select name="" value={selectedDate.getMonth()} onChange={handleChangeMonth} id="">
                   {
                    month.map((month,index)=>(
                      <option key={index} value={index}>{month}</option>
                    ))
                   }
              </select>
              <select name="" value={selectedDate.getFullYear()} onChange={handleChangeYear} id="">
                 {
                  Array.from({length:10},(_,i)=>selectedDate.getFullYear() - 5 +i)
                  .map((year)=>(
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))
                 }
              </select>
              <button onClick={()=>{setSelectedDate(new Date(selectedDate.getFullYear(),
                selectedDate.getMonth()+1,1))}}>
                <img src={right_arrow} alt="" />
              </button>
              
          </div>
          <div className="daysOfWeek">
              {daysOfWeek.map((day)=>(
                 <div key={day} >{day}</div>
              ))}
          </div>
          <div className="days">
               {daysInMonth().map((day,index)=>(
                  <div className={day?(isSameDay(day,new Date())?"day current":"day"):"empty"} key={index}>{day?day.getDate():""}</div>
               ))}
          </div>
      </div>
    </>
  )
}

export default App
