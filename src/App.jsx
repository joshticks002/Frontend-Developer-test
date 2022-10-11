import Header from "./components/header/Header";
import Banner from "./components/banner/Banner";
import Categories from "./components/art-categories/Categories";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="bg-[#110C00] text-white px-10 font-sora not-italic ">
      <Routes>
        <Route path="/" element={<Header />}>
          <Route path="/" element={<Banner />}>
            <Route path="/" element={<Categories />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
