import React from "react";
import styled from "styled-components";

function Header({
  burgerMenu,
  setBurgerMenu,
  useData,
  choosenPlanet,
  setChoosenPlanet,
}: {
  burgerMenu: boolean;
  setBurgerMenu: React.Dispatch<React.SetStateAction<boolean>>;
  useData: TPlanetInfo[];
  choosenPlanet: string;
  setChoosenPlanet: React.Dispatch<React.SetStateAction<string>>;
}) {
  const handleMenu = () => {
    setBurgerMenu(!burgerMenu);
  };

  const choosePlanet = (e) => {
    const lowercase = e.target.innerText.toLowerCase().split("");
    const firstUpper = lowercase[0].toUpperCase();
    lowercase[0] = firstUpper;
    setChoosenPlanet(lowercase.join(""));
  };

  return (
    <Heading className="md:flex-col lg:flex-row items-center lg:items-end md:gap-10 py-4 md:pt-[32px] lg:pt-[22px] px-6 md:px-[52px] lg:pl-8 lg:pr-[41px] md:pb-[27px]">
      <MainText>THE PLANETS</MainText>
      <MenuIng
        onClick={handleMenu}
        className="md:hidden"
        src="/assets/icon-hamburger.svg"
        alt="menu"
      />
      <div className="hidden md:flex gap-10">
        {useData.map((e, index: number) => {
          return (
            <h2
              key={index}
              onClick={choosePlanet}
              className={`${
                choosenPlanet == e.name ? "opacity-100" : "opacity-65"
              } text-xs text-[#fff] font-[700] leading-[2.27] tracking-[1.5px]`}
            >
              {e.name.toUpperCase()}
            </h2>
          );
        })}
      </div>
    </Heading>
  );
}

const Heading = styled.header`
  width: auto;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
`;

const MainText = styled.h1`
  font-size: 28px;
  font-weight: 500;
  letter-spacing: -1.05px;
  color: white;
`;
const MenuIng = styled.img`
  opacity: 0.25;
`;
export default Header;
