import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './component/nodes/Main';
import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </Router>
  );
};

export default App;
