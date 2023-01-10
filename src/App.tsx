import { useState } from "react";
import "./App.css";
import { NPM_TO_YARN } from "./contants/config";

// const thottle = (fn:<T extends unknown>(x: T) => void, delay: number) => {
//   let timer: any;
//   const callback = (...args: any) => {
//     if(timer) return;
//     timer = setInterval(()=> {
//       fn.apply({}, args);
//       clearInterval(timer);
//       timer = undefined;
//     }, delay)
//   }
//   return callback;
// }

// const debounce = (fn: any, delay: number) =>{
//   let timer: any;
//   const callback = (...args: any) => {
//     if(timer){
//       clearTimeout(timer)
//       setTimeout(()=>{
//         fn.apply({}, args);
//       }, delay)
//     }
//   }
//   return callback;
// }




function App() {
  const [npmCommand, setNpmCommand] = useState('');
  const [yarnCommand, setYarnCommand] = useState('');
  const handleNpmCommandChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNpmCommand(e.target.value);
  }

  const convertToYarn = () => {
    let npmCommandCopy = npmCommand;
    Object.keys(NPM_TO_YARN).forEach((key)=> {
      npmCommandCopy = npmCommandCopy.replace(key, NPM_TO_YARN[key])
    })
    setYarnCommand(npmCommandCopy);
  }

  return (
    <div className="App">
      <header> 
        <a href="https://github.com/upnotes-io/npm-to-yarn">Github</a>
        <a href="https://github.com/upnotes-io/npm-to-yarn/issues/1">Report a issue</a>
      </header>
      <h2> Npm to yarn convertor (Beta) </h2>
      <div className="input-container">
        <textarea placeholder="Input npm command" onChange={handleNpmCommandChange} value={npmCommand} />
        <button className="convert-button" onClick={convertToYarn}> Click to convert </button>
        <textarea disabled placeholder="Output to yarn" value={yarnCommand} />
      </div>
    </div>
  );
}

export default App;
