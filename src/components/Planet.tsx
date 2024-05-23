import { useState } from "react";
import styled from "styled-components";

function Planet({
  useData,
  choosenPlanet,
}: {
  useData: TPlanetInfo[];
  choosenPlanet: string;
}) {
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

  const sizes: { [key: string]: string } = {
    Mercury: "size-28 my-[95px]",
    Venus: "w-[154px] h-[154px] my-[74px]",
    Earth: "w-[173px] h-[173px] my-[64px]",
    Mars: "size-32 my-[87px]",
    Jupiter: "size-56 my-10",
    Saturn: "w-[235px] h-[235px] my-[44px]",
    Uranus: "size-44 my-[64px]",
    Neptune: "size-44 my-[64px]",
  };

  const geoSizes: { [key: string]: string } = {
    Mercury: "w-[60px] h-[70px] bottom-[-20px]",
    Venus: "w-[75px] h-[90px] bottom-[-30px]",
    Earth: "w-[85px] h-[100px] bottom-[-40px]",
    Mars: "w-[65px] h-[80px] bottom-[-30px]",
    Jupiter: "w-[80px] h-[100px] bottom-[5px]",
    Saturn: "w-[80px] h-[100px] bottom-[5px]",
    Uranus: "w-[80px] h-[95px] bottom-[-30px]",
    Neptune: "w-[80px] h-[95px] bottom-[-30px]",
  };

  const [planetLevel, setPlanetLevel] = useState<string>("overview");
  const changeContent = (e) => {
    setPlanetLevel(e.target.innerText.toLowerCase());
  };
  return (
    <main>
      {useData
        .filter((e) => e.name === choosenPlanet)
        .map((planet, index) => {
          const planetContent = planet[planetLevel].content;

          return (
            <div key={index} className="flex flex-col items-center">
              <PlanetLevels>
                <div onClick={changeContent}>
                  <h3>OVERVIEW</h3>
                </div>
                <div onClick={changeContent}>
                  <h3>STRUCTURE</h3>
                </div>
                <div onClick={changeContent}>
                  <h3>GEOLOGY</h3>
                </div>
              </PlanetLevels>
              <div>
                {planetLevel == "overview" || planetLevel == "structure" ? (
                  <img
                    className={`${sizes[choosenPlanet]}`}
                    src={`${
                      planetLevel == "overview"
                        ? planet.images.planet
                        : planetLevel == "structure"
                        ? planet.images.internal
                        : ""
                    }`}
                  />
                ) : (
                  <div className="relative">
                    <img
                      className={`${sizes[choosenPlanet]} relative`}
                      src={`${planet.images.planet}`}
                    />
                    <img
                      className={`${geoSizes[choosenPlanet]} absolute left-1/2 transform -translate-x-1/2`}
                      src={`${planet.images.geology}`}
                    />
                  </div>
                )}
              </div>
              <section className="flex flex-col items-center gap-4">
                <h2 className="text-[40px] text-[#fff] font-[500]">
                  {planet.name.toUpperCase()}
                </h2>
                <p className="text-[11px] text-[#fff] font-[400] leading-[2] px-6 text-center opacity-70">
                  {" "}
                  {planetContent}
                </p>
                <div className="flex items-center gap-1 mt-4">
                  <p className="text-xs text-[#fff] font-[500] leading-[2.08] opacity-50">
                    Source :{" "}
                    <a
                      className="font-[700] underline"
                      href={`${planet[planetLevel].source}`}
                    >
                      Wikipedia
                    </a>
                  </p>
                  <img src="/assets/icon-source.svg" alt="source" />
                </div>
              </section>
              <section className="flex flex-col gap-2 mt-[28px] mb-10">
                <div className="w-[327px] flex justify-between items-center border border-solid border-border pt-[9px] pb-[13px] px-6">
                  <span className="text-[8px] text-[#fff] font-[700] leading-[2] tracking-[0.72px] opacity-50">
                    ROTATION TIME
                  </span>
                  <span className="text-[20px] text-[#fff] font-[500] tracking-[-0.75px]">
                    {planet.rotation.toUpperCase()}
                  </span>
                </div>
                <div className="w-[327px] flex justify-between items-center border border-solid border-border pt-[9px] pb-[13px] px-6">
                  <span className="text-[8px] text-[#fff] font-[700] leading-[2] tracking-[0.72px] opacity-50">
                    REVOLUTION TIME
                  </span>
                  <span className="text-[20px] text-[#fff] font-[500] tracking-[-0.75px]">
                    {planet.revolution.toUpperCase()}
                  </span>
                </div>
                <div className="w-[327px] flex justify-between items-center border border-solid border-border pt-[9px] pb-[13px] px-6">
                  <span className="text-[8px] text-[#fff] font-[700] leading-[2] tracking-[0.72px] opacity-50">
                    radius
                  </span>
                  <span className="text-[20px] text-[#fff] font-[500] tracking-[-0.75px]">
                    {planet.radius.toUpperCase()}
                  </span>
                </div>
                <div className="w-[327px] flex justify-between items-center border border-solid border-border pt-[9px] pb-[13px] px-6">
                  <span className="text-[8px] text-[#fff] font-[700] leading-[2] tracking-[0.72px] opacity-50">
                    AVERAGE TEMP.
                  </span>
                  <span className="text-[20px] text-[#fff] font-[500] tracking-[-0.75px]">
                    {planet.temperature.toUpperCase()}
                  </span>
                </div>
              </section>
            </div>
          );
        })}
    </main>
  );
}

const PlanetLevels = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 0px 24px;
  margin-top: 20px;
  width: 100%;
  border-bottom: solid 1px rgba(255, 255, 255, 0.2);

  & div {
    padding-bottom: 20px;
  }

  & h3 {
    opacity: 0.5;
    font-size: 9px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: 1.93px;
    text-align: center;
    color: #fff;
  }
`;

export default Planet;
