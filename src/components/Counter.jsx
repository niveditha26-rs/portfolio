import React, { useEffect, useState } from "react";

function Counter() {
  const [count,setCount] = useState(0);
  const [multi,setMulti] = useState(2);

useEffect(()=>{
    console.log("components loaded");
    return()=>{
        console.log("components unloaded");
    };

},[count]);

  function Increment() {
    if (count < 20) {
      setCount(count+ multi*multi);
    }
  }

  function Decrement() {
    if (count > 0) {
      setCount(count -multi*multi);
    }
  }

  function Reset() {
    setCount(1);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 flex items-center justify-center px-6">
      
      <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-10 shadow-2xl text-center w-full max-w-md">
        
        <h1 className="text-5xl font-extrabold mb-8 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
          Counter App
        </h1>

        <div className="text-7xl font-bold text-white mb-10">
          {count}
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          
          <button
            onClick={Increment}
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-semibold transition duration-300 hover:scale-105 shadow-lg"
          >
            Increment
          </button>

          <button
            onClick={Decrement}
            className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-xl font-semibold transition duration-300 hover:scale-105 shadow-lg"
          >
            Decrement
          </button>

          <button
            onClick={Reset}
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-xl font-semibold transition duration-300 hover:scale-105 shadow-lg"
          >
            Reset
          </button>

        </div>

        <p className="text-gray-300 mt-8">
          Minimum: 0 | Maximum: 20
        </p>

      </div>
    </div>
  );
}

export default Counter;