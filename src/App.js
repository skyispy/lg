import {Routes, Route} from 'react-router-dom'
import { Login } from './components/page/Login';
import Signup from './components/page/Signup';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
