import React from 'react';

function Component({ lines, count,setCount,setLines ,arr}) {
  
  function handleClick1(e) {
    setCount((count + 1))
    setLines(count<arr.length?arr[count]:"")
  }
  function handleClick2(e) {
    setCount((count - 1>=0?count-1:0))
    setLines(arr[count])
  }
  return (
      <div className="flex items-center justify-center h-screen 
     bg-[url('img2.webp')] bg-no-repeat bg-center bg-cover
     ">
          <div className="bg-[url('bg1.jpg')] bg-no-repeat bg-center bg-cover  h-3/4 w-4/5 rounded-4xl flex-col">
        <div className="h-full flex items-center justify-center p-10 w-full">
          <div className="bg-pink-400 rounded-full "onClick={handleClick2}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-16">
  <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
</svg>
          </div>
          {count<=arr.length&&<div className=" bg-pink-200 m-8 p-10 rounded-4xl h-3/4 w-3/4 text-center italic font-bold text-xl text-pink-900">
            { lines }
          </div>}
          <div className="bg-pink-400 rounded-full " onClick={handleClick1}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-16">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </div>
              </div>
      </div>
    </div>
  );
}

export default Component;
