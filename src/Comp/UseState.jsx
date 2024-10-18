import React from 'react';
import { useState,useEffect } from 'react';
import {useParams } from 'react-router-dom';
export default function UseState() {
const {cca2}=useParams("");
const [single,setSingle]=useState("");

async function f() {
  let a = await fetch(`https://restcountries.com/v3.1/alpha/${cca2}`);
  let data = await a.json();
  setSingle(data[0]);

}
useEffect(()=>{
  f();
},[]);
  return (
     <>
    <div className='w-[100%] h-screen flex  justify-center items-center '>
     { 
      single ? (<div className='border-2 border-black w-[280px] h-[300px]  rounded-lg'>
         <img className="h-[50%] w-[100%] rounded-md"src={single.flags.png} alt='kkr'/>
       <div className=' flex flex-col justify-center items-center p-4'>
        <h1>Country : {single.name.common}</h1>
        <h1>Population : {single.population}</h1>
        <h1>Time : {single.timezones}</h1>
      </div>
      </div>
      ):(
      <div>loading...</div>)
        
     }
    </div>
    </>
  );
}
