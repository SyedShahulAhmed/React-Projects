import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Background from './components/Background';

function App() {
  const [heroCount, setheroCount] = useState(0);


  const HeroData = [
    { text1: "Experience the Old West", text2: "Like Never Before" },
    { text1: "A World of Law, Outlaws", text2: "and Adventure" },
    { text1: "Unleash Your", text2: "Inner Outlaw" },
    { text1: "Uncover the Untold Stories of", text2: "the Van Der Linde Gang" },
    { text1: "Enter the Last Days", text2: "of the Wild West" }
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setheroCount((prevCount) => (prevCount === 4 ? 0 : prevCount + 1));
    }, 10000);
    return () => clearInterval(intervalId);
  }, []); 

  return (
    <div>
      <Background heroCount={heroCount} />
      <Navbar />
      <Hero 
        heroCount={heroCount} 
        HeroData={HeroData[heroCount]} 
        setheroCount={setheroCount} 
      />
    </div>
  );
}

export default App;
