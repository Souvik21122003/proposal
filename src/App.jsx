import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Component from './Component';

function App() {
  const arr = [
    "When I first saw you, time seemed to freeze as your smile lit up the entire room.",
    "I couldn't help but notice how your eyes sparkled, carrying galaxies within them.",
    "Every word you spoke felt like music, and I knew I wanted to listen forever.",
    "You carry yourself with such grace and confidence, it's simply mesmerizing.",
    "Your laugh has the power to make even the dullest days feel magical.",
    "I admire how kind and thoughtful you are, always bringing light to those around you.",
    "I just don't want to regret later of not expressing my feelings ",
    "So, tell me rai will u give me a chance to be the love of your life ???"
  ];

  const [cnt, setCnt] = useState(0);
  const [lines, setLines] = useState(arr[0]);

  return (
    <>
      {cnt < arr.length+1 ? (
        <Component lines={lines} count={cnt} setCount={setCnt} setLines={setLines} arr={arr} />
      ) : (
        <div className='bg-no-repeat bg-center bg-cover bg-[url("img3.webp")] h-screen w-full p-14'></div>
      )}
    </>
  );
}

export default App;
