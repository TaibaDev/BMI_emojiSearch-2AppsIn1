import React,{useState} from 'react'

const DigitalWatch = () => {
    let time = new Date().toLocaleTimeString();

    const [cTime, setcTime]=useState(time);

    const updatedTime=()=>{
        time= new Date().toLocaleTimeString();
        setcTime(time);
    }

    setInterval(updatedTime,1000);
    
    setInterval(()=>{
        time= new Date().toLocaleTimeString();
    },1000)
  return (
    <div className='digital p-12 m-5'>
        <h1>{cTime}</h1>
    </div>
  )
}

export default DigitalWatch