import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import InputField from './components/InputField';
import Table from './components/Table';
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
  const [change,setChange] = useState('press button to render table');
  const [table,setTable] = useState<any>([]);

  return (
    <div className="App">
      <div className='container-fluid card mt-5 w-50'>
        <div className='d-flex'>
        <InputField onChange={(e:any)=> setChange(e.target.value)} value={change} className="col-10"/>
        <Button OnClick={()=>{setTable(<Table />)}} className="btn btn-primary col-2"/>
        </div>
       
        {table}
      </div>
    </div>
  );
}

export default App;
