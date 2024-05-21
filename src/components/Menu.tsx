import React from "react";
import styled from "styled-components";

function Menu({ useData }: { useData: TPlanetInfo[] }) {
  const colors: { [key: string]: string } = {
    Mercury: "#def4fc",
    Venus: "#f7cc7f",
    Earth: "#545bfe",
    Mars: "#ff6a45",
    Jupiter: "#ecad7a",
    Saturn: "#fccb6b",
    Uranus: "#65f0d5",
    Neptune: "#497efa",
  };
  return (
    <Main>
      {useData.map((e: TPlanetInfo, index: number) => {
        const planetColor = colors[e.name];
        console.log(planetColor);
        return (
          <Section key={index} index={index}>
            <div className="flex items-center gap-[25px]">
              <div
                className={`bg-[${planetColor}]  w-5 h-5 rounded-full`}
              ></div>
              <PlanetNames>{e.name}</PlanetNames>
            </div>
            <img src="./assets/icon-chevron.svg" alt="arrow" />
          </Section>
        );
      })}
    </Main>
  );
}
const Main = styled.main`
  width: auto;
  margin: 44px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;
const Section = styled.section<{ index: number }>`
  width: 327px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 20px;
  border-bottom: ${(props) =>
    props.index == 7 ? "" : "1px solid rgba(255, 255, 255, 0.1)"};
`;
const PlanetNames = styled.h2`
  font-size: 15px;
  font-weight: 700;
  line-height: 1.67;
  letter-spacing: 1.36px;
  color: white;
`;
export default Menu;
