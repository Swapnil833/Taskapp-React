import { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { AddTask } from './components/AddTask';
import { ShowTask } from './components/ShowTask';
import './App.css';

function App() {
  const localTask = JSON.parse(localStorage.getItem("tasklist"));
  const[tasklist, setTasklist] = useState( localTask || []);
  //const[tasklist, setTasklist] = useState(/*JSON.parse(localStorage.getItem("tasklist")) || */[]);   //4  
  const[task, setTask] = useState({});

  useEffect(() => 
  {localStorage.setItem("tasklist", JSON.stringify(tasklist))}          
  ,[tasklist]);     //2     //3

  return (
    <div className="App">
      <Header/>
      <AddTask tasklist={tasklist} setTasklist={setTasklist} task={task} setTask={setTask}/>
      <ShowTask tasklist={tasklist} setTasklist={setTasklist} task={task} setTask={setTask}/>
    </div>
  );
}

export default App;


/********************************************** COMMENT BOX ********************************************
1.a) JSON is to exchange data to/from a web server. When receiving data from a web server, the data is always a string.
    Parse the data with JSON.parse(), and the data becomes a JavaScript object. 
1.b) The localStorage object stores data with no expiration date & allows you to save key/value pairs in the browser.
    The data is not deleted when the browser is closed, and are available for future sessions.
1.c) Yaha pr agar koi value available hai storage main, toh we get the item, else hum usse initially NULL dete hai.
2) useEffect has function {} as an argument and then has the dependencies []. So, everytime we update the tasklist, we update the local Storage
3.a) Local storage main humne tasklist ko set kr diya, aur jab bhi naya content ayega, usse hum tasklist main save krte jayenge.
    setItem is usually written in key/value pair.
3.b) A common use of JSON is to exchange data to/from a web server. When sending data to a web server, the data has to be a string.
    Convert a JavaScript object into a string with JSON.stringify().
4) Yaha humein error mila for some unknown reason, issliye humne pehle saare tasklist ko store kiya in some variable and then
    and then we used the variable in ORing it with the default value.

*/