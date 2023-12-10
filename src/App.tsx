import React, { useState } from 'react';
import './App.css';
import InfutField from './components/InfutField';


const App : React.FC = () => {

  const [todo, setTodo] = useState<string>(""); 


  return (
    <div className="App">
       <span className='heading'> TODO LIST APP</span>
       <InfutField todo={todo} setTodo={setTodo} />
    </div>
  );
}

export default App;
