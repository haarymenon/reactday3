// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import One from './components/One';
import Two from './components/Two';
import Three from './components/Three';
import { Table } from '@mui/material';
import Four from './components/Four';
import Five from './components/Five';

function App() {
  return (
    <div className="App">
    {/* <One/> */}
    <Two/>
    <Routes>
      <Route path='/' element={<One/>}/>
      <Route path='/s' element={<Three/>}/>
      <Route path='/t' element={<Four/>}/>
      <Route path='/a' element={<Five/>}/>
    </Routes>
    <Table/>
    
    </div>
  );
}

export default App;
