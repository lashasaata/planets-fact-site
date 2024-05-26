import { useState, useEffect } from "react";
import "./App.css";
import data from "../data.json";
import Header from "./components/Header";
import Menu from "./components/Menu";
import styled from "styled-components";
import Planet from "./components/Planet";
import { useScreenType } from "../WindowWidth";

function App() {
  const { isMobile } = useScreenType();
  const useData = data;
  const [burgerMenu, setBurgerMenu] = useState<boolean>(false);
  const [choosenPlanet, setChoosenPlanet] = useState<string>(
    JSON.parse(localStorage.getItem("choosenPlanet")) || "Mercury"
  );

  useEffect(() => {
    localStorage.setItem("choosenPlanet", JSON.stringify(choosenPlanet));
  }, [choosenPlanet]);

  return (
    <MainCard>
      <Header
        burgerMenu={burgerMenu}
        setBurgerMenu={setBurgerMenu}
        useData={useData}
        choosenPlanet={choosenPlanet}
        setChoosenPlanet={setChoosenPlanet}
      />
      {burgerMenu && isMobile ? (
        <Menu
          useData={useData}
          choosenPlanet={choosenPlanet}
          setChoosenPlanet={setChoosenPlanet}
          setBurgerMenu={setBurgerMenu}
        />
      ) : (
        <Planet useData={useData} choosenPlanet={choosenPlanet} />
      )}
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
