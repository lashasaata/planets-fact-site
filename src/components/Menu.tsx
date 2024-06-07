import React from "react";
import styled from "styled-components";

function Menu({
  useData,
  choosenPlanet,
  setChoosenPlanet,
  setBurgerMenu,
}: {
  useData: TPlanetInfo[];
  choosenPlanet: string;
  setChoosenPlanet: React.Dispatch<React.SetStateAction<string>>;
  setBurgerMenu: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const bgcolors: { [key: string]: string } = {
    Mercury: "bg-[#def4fc]",
    Venus: "bg-[#f7cc7f]",
    Earth: "bg-[#545bfe]",
    Mars: "bg-[#ff6a45]",
    Jupiter: "bg-[#ecad7a] ",
    Saturn: "bg-[#fccb6b] ",
    Uranus: "bg-[#65f0d5]",
    Neptune: "bg-[#497efa]",
  };

  const choosePlanet = (
    e: React.MouseEvent<HTMLHeadingElement, MouseEvent>
  ) => {
    const targetElement = e.target as HTMLElement;
    const lowercase = targetElement.innerText.toLowerCase().split("");
    const firstUpper = lowercase[0].toUpperCase();
    lowercase[0] = firstUpper;
    setChoosenPlanet(lowercase.join(""));
    setBurgerMenu(false);
  };
  return (
    <Main>
      {useData.map((e: TPlanetInfo, index: number) => {
        const planetColor = bgcolors[e.name];
        const textcolors: { [key: string]: string } = {
          Mercury: `${
            e.name == choosenPlanet ? "text-[#def4fc]" : ""
          } hover:text-[#def4fc]`,
          Venus: `${
            e.name == choosenPlanet ? "text-[#f7cc7f]" : ""
          } hover:text-[#f7cc7f]`,
          Earth: `${
            e.name == choosenPlanet ? "text-[#545bfe]" : ""
          } hover:text-[#545bfe]`,
          Mars: `${
            e.name == choosenPlanet ? "text-[#ff6a45]" : ""
          } hover:text-[#ff6a45]`,
          Jupiter: `${
            e.name == choosenPlanet ? "text-[#ecad7a]" : ""
          } hover:text-[#ecad7a]`,
          Saturn: `${
            e.name == choosenPlanet ? "text-[#fccb6b]" : ""
          } hover:text-[#fccb6b]`,
          Uranus: `${
            e.name == choosenPlanet ? "text-[#65f0d5]" : ""
          } hover:text-[#65f0d5]`,
          Neptune: `${
            e.name == choosenPlanet ? "text-[#497efa]" : ""
          } hover:text-[#497efa]`,
        };
        return (
          <Section key={index} index={index}>
            <div className="flex items-center gap-[25px]">
              <div className={`${planetColor} w-5 h-5 rounded-full`}></div>
              <h2
                onClick={choosePlanet}
                className={`text-[15px] text-[#fff] font-[700] leading-[1.67] tracking-[1.36px] ${
                  textcolors[e.name]
                } hover:cursor-pointer`}
              >
                {e.name.toUpperCase()}
              </h2>
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

export default Menu;
