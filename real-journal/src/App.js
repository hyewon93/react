import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import RouteTest from "./components/RouteTest";

import Home from './pages/Home';
import New from './pages/New';
import Journal from './pages/Journal';
import Edit from './pages/Edit';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <h2>App.js</h2>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<New />} />
          <Route path="/journal/:id" element={<Journal />} />
          <Route path="/edit" element={<Edit />} />
        </Routes>
      </div>
      <RouteTest />
    </BrowserRouter>
  )
}

export default App;
