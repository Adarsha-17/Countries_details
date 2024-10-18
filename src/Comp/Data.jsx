import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Data() {
  const data = "https://restcountries.com/v3.1/all";
  const [State, setState] = useState([]);
  const [search,setSearch] = useState("");
  async function my() {
    const featching = await fetch(data);
    const json = await featching.json();
    setState(json);
  }
  const filterData = State.filter((obj)=>
    obj.name.common.toLowerCase().includes(search.toLowerCase())
  )
  useEffect(() => {
    my();
  }, []);
  return (
    <>
    <div>
        <div>
        <input type="text" placeholder="Search a name"
        value={search}
        onChange={(obj)=>
            setSearch(obj.target.value)
        }
         className="p-2 w-[15%] mt-12 ml-20 border-solid border-4 border-red-500 rounded-md "/>
        </div>

    
    
      <div className="mt-10 flex flex-wrap gap-20 justify-center">
        {filterData.map((q) => {
          return ( 
         <Link to={`/about/${q.cca2}`} style={{ textDecoration: 'none' }} key={q.caa2}>
            
            <div
               className="border-2 border-black w-[280px] h-[400px]  rounded-lg shadow-inner	"
            >
              <img
                className="h-[50%] w-[100%] rounded-md"
                src={q.flags.png}
                alt="images"
              />
              <div className="flex flex-col justify-around p-2 items-center h-[50%] w-[100%] break-words ">
                <h1 className="font-bold text-[16px]">Country : {q.name.common}</h1>
                <p>Population: {q.population.toLocaleString()}</p>
                <button className="border-2 border-gray-600 w-[80%] p-3 rounded-lg">Region: {q.region}</button>
                <p>Capital: {q.capital ? q.capital[0] : 'N/A'}</p>
                
              </div>
            </div>
            
            </Link>
          );
        })}
      </div>
      </div>
    </>
  );
}
