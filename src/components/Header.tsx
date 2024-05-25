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

  const colors: { [key: string]: string } = {
    Mercury: "lg:border-t-4 lg:border-solid lg:border-[#419ebb]",
    Venus: "lg:border-t-4 lg:border-solid lg:border-[#eda249]",
    Earth: "lg:border-t-4 lg:border-solid lg:border-[#6d2ed5]",
    Mars: "lg:border-t-4 lg:border-solid lg:border-[#d14c32]",
    Jupiter: "lg:border-t-4 lg:border-solid lg:border-[#d83a34]",
    Saturn: "lg:border-t-4 lg:border-solid lg:border-[#cd5120]",
    Uranus: "lg:border-t-4 lg:border-solid lg:border-[#1ec1a2]",
    Neptune: "lg:border-t-4 lg:border-solid lg:border-[#2d68f0]",
  };

  return (
    <Heading className="md:flex-col lg:flex-row items-center lg:items-end md:gap-10 py-4 md:pt-[32px] lg:pt-[0px] px-6 md:px-[52px] lg:pl-8 lg:pr-[41px] md:pb-[27px]">
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
            <div
              key={index}
              className={`${
                choosenPlanet == e.name
                  ? `${colors[choosenPlanet]} lg:pt-[29px]`
                  : "lg:pt-[33px]"
              } `}
            >
              <h2
                onClick={choosePlanet}
                className={`${
                  choosenPlanet == e.name ? "opacity-100" : "opacity-65"
                } text-xs text-[#fff] font-[700] leading-[2.27] tracking-[1.5px] hover:opacity-100 hover:cursor-pointer`}
              >
                {e.name.toUpperCase()}
              </h2>
            </div>
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
