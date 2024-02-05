import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Elements/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
