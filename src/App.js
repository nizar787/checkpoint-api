import logo from './logo.svg';
import './App.css';

import Header from './components/Header.js';
import Person from './components/Person';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [persons,setpersons]=useState([]);
  useEffect(async()=>{
    let result = await axios.get('https://jsonplaceholder.typicode.com/users').then(res=>setpersons(res.data))

  }, []);

  
  return (
    <div>
      <Header />
      <div className='list'>
        {persons.length}
        {persons.map((el )=>(
          <Person user={el}/>
        ))}
      </div>
    </div>
  )
}

export default App;
