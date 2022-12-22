import { useState } from "react";
import "./App.css";

const thottle = (fn:<T extends unknown>(x: T) => void, delay: number) => {
  let timer: any;
  const callback = (...args: any) => {
    if(timer) return;
    timer = setInterval(()=> {
      fn.apply({}, args);
      clearInterval(timer);
      timer = undefined;
    }, delay)
  }
  return callback;
}

const debounce = (fn: any, delay: number) =>{
  let timer: any;
  const callback = (...args: any) => {
    if(timer){
      clearTimeout(timer)
      setTimeout(()=>{
        fn.apply({}, args);
      }, delay)
    }
  }
  return callback;
}


function App() {
  const [npmCommand, setNpmCommand] = useState('');
  const [yarnCommand, setYarnCommand] = useState('');
  const handleNpmCommandChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNpmCommand(e.target.value);
  }
  return (
    <div className="App">
      <h2> Npm to yarn convertor </h2>
      <div className="input-container">
        <textarea placeholder="Input npm command" onChange={handleNpmCommandChange}>{npmCommand}</textarea>
        <textarea disabled placeholder="Output to yarn"></textarea>
      </div>
    </div>
  );
}

export default App;
