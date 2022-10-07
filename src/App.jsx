import Header from "./components/header/Header";
import Banner from "./components/banner/Banner";
import Categories from "./components/art-categories/Categories";
import { useDispatch, useSelector } from "react-redux";
import { getArts } from "./redux/features/art-slice";
import React from "react";

const App = () => {
  const { arts, loading } = useSelector((state) => state.art);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getArts());
    console.log(arts);
  }, [dispatch]);

  return (
    <div>
      <Header />
      <Banner />
      <Categories />
    </div>
  );
};

export default App;
