import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Create from './Create';
import Delete from './Delete';
import Home from './Home.jsx';
import Update from './Update.jsx';
import Read from './Read.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/update/:id" element={<Update />} />
      <Route path="/read/:id" element={<Read />} />
      <Route path="/create" element={<Create />} />
      <Route path="/delete" element={<Delete />} />
    </Routes>
  );
}

export default App;
