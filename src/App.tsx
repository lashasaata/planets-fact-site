import { useState } from "react";
import "./App.css";
import data from "../data.json";
import Header from "./components/Header";
import Menu from "./components/Menu";

function App() {
  const [useData, setUseData] = useState(data);
  const [burgerMenu, setBurgerMenu] = useState<boolean>(true);
  return (
    <>
      <Header />
      {burgerMenu ? <Menu useData={useData} /> : ""}
    </>
  );
}

export default App;
