import { useState } from "react";
import "./App.css";
import data from "../data.json";
import Header from "./components/Header";
import Menu from "./components/Menu";
import styled from "styled-components";

function App() {
  const [useData, setUseData] = useState(data);
  const [burgerMenu, setBurgerMenu] = useState(false);
  return (
    <MainCard>
      <Header burgerMenu={burgerMenu} setBurgerMenu={setBurgerMenu} />
      {burgerMenu ? <Menu useData={useData} /> : ""}
    </MainCard>
  );
}

const MainCard = styled.main`
  min-height: min-content;
  background-color: #070724;
  background-image: url("/assets/background-stars.svg");
  background-repeat: no-repeat;
  padding-bottom: 1px;
`;
export default App;
