import { useEffect, useState } from "react";
import styled from "styled-components";

function Planet({
  useData,
  choosenPlanet,
}: {
  useData: TPlanetInfo[];
  choosenPlanet: string;
}) {
  const colors: { [key: string]: string } = {
    Mercury: "border-[#419ebb]",
    Venus: "border-[#eda249]",
    Earth: "border-[#6d2ed5]",
    Mars: "border-[#d14c32]",
    Jupiter: "border-[#d83a34]",
    Saturn: "border-[#cd5120]",
    Uranus: "border-[#1ec1a2]",
    Neptune: "border-[#2d68f0]",
  };
  const colorsBg: { [key: string]: string } = {
    Mercury: "bg-[#419ebb]",
    Venus: "bg-[#eda249]",
    Earth: "bg-[#6d2ed5]",
    Mars: "bg-[#d14c32]",
    Jupiter: "bg-[#d83a34]",
    Saturn: "bg-[#cd5120]",
    Uranus: "bg-[#1ec1a2]",
    Neptune: "bg-[#2d68f0]",
  };

  const sizes: { [key: string]: string } = {
    Mercury:
      "size-28 md:w-[184px] xl:w-[290px] md:h-[184px] xl:h-[290px] my-[95px] md:mt-[146px] md:mb-[130px] lg:my-0",
    Venus:
      "w-[154px] h-[154px] md:size-64 xl:w-[400px] xl:h-[400px] my-[74px] md:mt-[112px] md:mb-[95px] lg:my-0",
    Earth:
      "w-[173px] h-[173px] md:size-72 xl:w-[450px] xl:h-[450px] my-[64px] md:mt-[96px] md:mb-20 lg:my-0",
    Mars: "size-32 md:size-52 xl:w-[336px] xl:h-[336px] my-[87px] md:mt-[132px] md:mb-[115px] lg:my-0",
    Jupiter:
      "size-56 md:w-[370px] md:h-[370px] xl:w-[530px] xl:h-[530px] my-10 md:mt-[54px] md:mb-[37px] lg:my-0",
    Saturn:
      "w-[235px] md:w-[420px] h-[235px] md:h-[420px] xl:w-[660px] xl:h-[660px] my-[44px] md:mt-[27px] md:mb-[13px] lg:my-0",
    Uranus:
      "size-44 md:size-72 xl:w-[460px] xl:h-[460px] my-[64px] md:mt-[93px] md:mb-[77px] lg:my-0",
    Neptune:
      "size-44 md:size-72 xl:w-[450px] xl:h-[450px] my-[64px] md:mt-[93px] md:mb-[77px] lg:my-0",
  };

  const geoSizes: { [key: string]: string } = {
    Mercury:
      "w-[60px] md:w-[80px] xl:w-[160px] h-[70px] md:h-[95px] xl:h-[200px] bottom-[-20px] md:bottom-[-30px] xl:bottom-[-130px]",
    Venus:
      "w-[75px] md:w-[100px] xl:w-[160px] h-[90px] md:h-[120px] xl:h-[200px] bottom-[-30px] md:bottom-[-40px] xl:bottom-[-80px]",
    Earth:
      "w-[85px] md:w-[120px] xl:w-[160px] h-[100px] md:h-[140px] xl:h-[200px] bottom-[-40px] md:bottom-[-50px] xl:bottom-[-55px]",
    Mars: "w-[65px] md:w-[90px] xl:w-[160px] h-[80px] md:h-[110px] xl:h-[200px] bottom-[-30px] xl:bottom-[-110px]",
    Jupiter:
      "w-[80px] md:w-[140px] xl:w-[160px] h-[100px] md:h-[170px] xl:h-[200px] bottom-[5px] xl:bottom-[10px]",
    Saturn:
      "w-[80px] md:w-[100px] xl:w-[160px] h-[100px] md:h-[130px] xl:h-[200px] bottom-[5px] md:bottom-[15px] xl:bottom-[40px]",
    Uranus:
      "w-[80px] md:w-[120px] xl:w-[160px] h-[95px] md:h-[140px] xl:h-[200px] bottom-[-30px] md:bottom-[-50px]",
    Neptune:
      "w-[80px] md:w-[120px] xl:w-[160px] h-[95px] md:h-[140px] xl:h-[200px] bottom-[-30px] md:bottom-[-50px] xl:bottom-[-66px]",
  };

  const [planetLevel, setPlanetLevel] = useState<string>(
    localStorage.getItem("planetLevel") || "overview"
  );
  const changeContent = (e) => {
    setPlanetLevel(e.target.innerText.toLowerCase());
  };
  const changeContentMd1 = (e) => {
    setPlanetLevel("overview");
  };
  const changeContentMd2 = (e) => {
    setPlanetLevel("structure");
  };
  const changeContentMd3 = (e) => {
    setPlanetLevel("geology");
  };

  useEffect(() => {
    localStorage.setItem("planetLevel", planetLevel);
  }, [planetLevel]);

  return (
    <main>
      {useData
        .filter((e) => e.name === choosenPlanet)
        .map((planet, index) => {
          const planetContent = planet[planetLevel].content;
          return (
            <div key={index} className="flex flex-col items-center">
              <PlanetLevels className="flex md:hidden">
                <div
                  onClick={changeContent}
                  className={`${
                    planetLevel == "overview"
                      ? `border-b-4 border-solid ${colors[choosenPlanet]} pb-4`
                      : "border-transparent pb-5"
                  } hover:cursor-pointer`}
                >
                  <h3
                    className={`${
                      planetLevel == "overview"
                        ? "opacity-100"
                        : "opacity-50 hover:opacity-100"
                    }`}
                  >
                    OVERVIEW
                  </h3>
                </div>
                <div
                  onClick={changeContent}
                  className={`${
                    planetLevel == "structure"
                      ? `border-b-4 border-solid ${colors[choosenPlanet]} pb-4`
                      : "border-transparent pb-5"
                  } hover:cursor-pointer`}
                >
                  <h3
                    className={`${
                      planetLevel == "structure"
                        ? "opacity-100"
                        : "opacity-50 hover:opacity-100"
                    }`}
                  >
                    STRUCTURE
                  </h3>
                </div>
                <div
                  onClick={changeContent}
                  className={`${
                    planetLevel == "geology"
                      ? `border-b-4 border-solid ${colors[choosenPlanet]} pb-4`
                      : "border-transparent pb-5"
                  }  hover:cursor-pointer`}
                >
                  <h3
                    className={`${
                      planetLevel == "geology"
                        ? "opacity-100"
                        : "opacity-50 hover:opacity-100"
                    }`}
                  >
                    GEOLOGY
                  </h3>
                </div>
              </PlanetLevels>
              <div className="w-full flex flex-col lg:flex-row items-center lg:justify-between lg:mt-[80px] lg:pl-[160px] xl:pl-[220px] lg:pr-[105px] xl:pr-[165px]">
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
                <div className="md:w-full lg:w-auto md:flex lg:flex-col md:items-center lg:items-start md:justify-between lg:gap-10 md:px-10 lg:px-0">
                  <section className="flex flex-col items-center gap-4 md:items-start md:gap-6">
                    <h2 className="text-[40px] md:text-[48px] lg:text-[80px] text-[#fff] font-[500]">
                      {planet.name.toUpperCase()}
                    </h2>
                    <p className="md:w-[340px] lg:w-[350px] text-[11px] lg:text-sm text-[#fff] font-[400] leading-[2] lg:leading-[1.79] px-6 md:px-0 text-center md:text-start opacity-70 lg:opacity-80">
                      {" "}
                      {planetContent}
                    </p>
                    <div className="flex items-center gap-1 lg:gap-2 mt-4 md:mt-2 lg:mt-0">
                      <p className="text-xs lg:text-sm text-[#fff] font-[500] leading-[2.08] lg:leading-[1.79] opacity-50 hover:opacity-100">
                        Source :{" "}
                        <a
                          className="font-[700] underline"
                          href={`${planet[planetLevel].source}`}
                        >
                          Wikipedia
                        </a>
                      </p>
                      <img
                        className="mb-[-3px]"
                        src="/assets/icon-source.svg"
                        alt="source"
                      />
                    </div>
                  </section>
                  <section className="hidden md:flex md:flex-col md:gap-4">
                    <div
                      onClick={changeContentMd1}
                      className={`${
                        planetLevel == "overview"
                          ? `${colorsBg[choosenPlanet]}`
                          : `hover:bg-hover border border-solid border-border`
                      } md:w-[280px] lg:w-[350px] md:h-10 lg:h-[48px] md:flex md:items-center md:gap-[15px] lg:gap-[28px] md:pl-5 lg:pl-[28px] hover:cursor-pointer`}
                    >
                      <span className="text-[9px] lg:text-xs text-[#fff] font-[700] leading-[2.78] lg:leading-[2.08] tracking-[1.93px] lg:tracking-[2.57px] opacity-50">
                        01
                      </span>
                      <h3 className="text-[9px] lg:text-xs text-[#fff] font-[700] leading-[2.78] lg:leading-[2.08] tracking-[1.93px] lg:tracking-[2.57px]">
                        OVERVIEW
                      </h3>
                    </div>
                    <div
                      onClick={changeContentMd2}
                      className={`${
                        planetLevel == "structure"
                          ? `${colorsBg[choosenPlanet]}`
                          : `hover:bg-hover border border-solid border-border`
                      } md:w-[280px] lg:w-[350px] md:h-10 lg:h-[48px] md:flex md:items-center md:gap-[15px] lg:gap-[28px] md:pl-5 lg:pl-[28px] hover:cursor-pointer`}
                    >
                      <span className="text-[9px] lg:text-xs text-[#fff] font-[700] leading-[2.78] lg:leading-[2.08] tracking-[1.93px] lg:tracking-[2.57px]  opacity-50">
                        02
                      </span>
                      <h3 className="text-[9px] lg:text-xs text-[#fff] font-[700] leading-[2.78] lg:leading-[2.08] tracking-[1.93px] lg:tracking-[2.57px] ">
                        INTERNAL STRUCTURE
                      </h3>
                    </div>
                    <div
                      onClick={changeContentMd3}
                      className={`${
                        planetLevel == "geology"
                          ? `${colorsBg[choosenPlanet]}`
                          : `hover:bg-hover border border-solid border-border`
                      } md:w-[280px] lg:w-[350px] md:h-10 lg:h-[48px] md:flex md:items-center md:gap-[15px] lg:gap-[28px] md:pl-5 lg:pl-[28px] hover:cursor-pointer`}
                    >
                      <span className="text-[9px] lg:text-xs text-[#fff] font-[700] leading-[2.78] lg:leading-[2.08] tracking-[1.93px] lg:tracking-[2.57px]  opacity-50">
                        03
                      </span>
                      <h3 className="text-[9px] lg:text-xs text-[#fff] font-[700] leading-[2.78] lg:leading-[2.08] tracking-[1.93px] lg:tracking-[2.57px] ">
                        SURFACE GEOLOGY
                      </h3>
                    </div>
                  </section>
                </div>
              </div>
              <footer className="md:w-full flex flex-col md:flex-row md:justify-between gap-2 md:gap-[11px] mt-[28px] lg:mt-[87px] mb-10 lg:mb-[56px] md:px-10 lg:px-[105px] xl:px-[165px]">
                <div className="w-[327px] md:w-[164px] lg:w-[255px] flex md:flex-col justify-between items-center md:items-start border border-solid border-border pt-[9px] md:pt-4 lg:pt-5 pb-[13px] md:pb-[19px] lg:pb-[27px] px-6 md:px-[15px] lg:px-6">
                  <span className="text-[8px] lg:text-[11px] text-[#fff] font-[700] leading-[2] lg:leading-[2.27] tracking-[0.72px] lg:tracking-[1px] opacity-50">
                    ROTATION TIME
                  </span>
                  <span className="text-[20px] lg:text-[30px] xl:text-[40px] text-[#fff] font-[500] tracking-[-0.75px] lg:tracking-[-1.5px]">
                    {planet.rotation.toUpperCase()}
                  </span>
                </div>
                <div className="w-[327px] md:w-[164px] lg:w-[255px] flex md:flex-col justify-between items-center md:items-start border border-solid border-border pt-[9px] md:pt-4 lg:pt-5 pb-[13px] md:pb-[19px] lg:pb-[27px] px-6 md:px-[15px] lg:px-6">
                  <span className="text-[8px] lg:text-[11px] text-[#fff] font-[700] leading-[2] lg:leading-[2.27] tracking-[0.72px] lg:tracking-[1px] opacity-50">
                    REVOLUTION TIME
                  </span>
                  <span className="text-[20px] lg:text-[30px] xl:text-[40px] text-[#fff] font-[500] tracking-[-0.75px] lg:tracking-[-1.5px]">
                    {planet.revolution.toUpperCase()}
                  </span>
                </div>
                <div className="w-[327px] md:w-[164px] lg:w-[255px] flex md:flex-col justify-between items-center md:items-start border border-solid border-border pt-[9px] md:pt-4 lg:pt-5 pb-[13px] md:pb-[19px] lg:pb-[27px] px-6 md:px-[15px] lg:px-6">
                  <span className="text-[8px] lg:text-[11px] text-[#fff] font-[700] leading-[2] lg:leading-[2.27] tracking-[0.72px] lg:tracking-[1px] opacity-50">
                    radius
                  </span>
                  <span className="text-[20px] lg:text-[30px] xl:text-[40px] text-[#fff] font-[500] tracking-[-0.75px] lg:tracking-[-1.5px]">
                    {planet.radius.toUpperCase()}
                  </span>
                </div>
                <div className="w-[327px] md:w-[164px] lg:w-[255px] flex md:flex-col justify-between items-center md:items-start border border-solid border-border pt-[9px] md:pt-4 lg:pt-5 pb-[13px] md:pb-[19px] lg:pb-[27px] px-6 md:px-[15px] lg:px-6">
                  <span className="text-[8px] lg:text-[11px] text-[#fff] font-[700] leading-[2] lg:leading-[2.27] tracking-[0.72px] lg:tracking-[1px] opacity-50">
                    AVERAGE TEMP.
                  </span>
                  <span className="text-[20px] lg:text-[30px] xl:text-[40px] text-[#fff] font-[500] tracking-[-0.75px] lg:tracking-[-1.5px]">
                    {planet.temperature.toUpperCase()}
                  </span>
                </div>
              </footer>
            </div>
          );
        })}
    </main>
  );
}

const PlanetLevels = styled.section`
  justify-content: space-between;
  padding: 0px 24px;
  margin-top: 20px;
  width: 100%;
  border-bottom: solid 1px rgba(255, 255, 255, 0.2);

  & h3 {
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
