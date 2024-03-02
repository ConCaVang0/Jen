import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SeaImg from './Components/SeaImg';
import CategoryItem from './Components/Category/category';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/SeaImg" element={<SeaImg />} />
        <Route path="/" element={<CategoryItem />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;