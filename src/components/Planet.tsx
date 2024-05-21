import { useState } from "react";

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

  const [planetLevel, setPlanetLevel] = useState<string>("overview");
  return (
    <main>
      {useData
        .filter((e) => e.name === choosenPlanet)
        .map((planet, index) => {
          const planetContent = planet[planetLevel].content;
          return (
            <div key={index}>
              <section>
                <div>
                  <h3>overview</h3>
                </div>
                <div>
                  <h3>structure</h3>
                </div>
                <div>
                  <h3>geology</h3>
                </div>
              </section>
              <img
                src={`${
                  planetLevel == "overview"
                    ? planet.images.planet
                    : planetLevel == "structure"
                    ? planet.images.internal
                    : planet.images.geology
                }`}
                alt="planet"
              />
              <section>
                <h2>{planet.name}</h2>
                <p> {planetContent}</p>
                <div>
                  <p>
                    Source :<a href="">Wikipedia</a>
                  </p>
                  <img src="/assets/icon-source.svg" alt="source" />
                </div>
              </section>
              <section>
                <div>
                  <span>ROTATION TIME</span>
                  <span>{planet.rotation}</span>
                </div>
                <div>
                  <span>REVOLUTION TIME</span>
                  <span>{planet.revolution}</span>
                </div>
                <div>
                  <span>radius</span>
                  <span>{planet.radius}</span>
                </div>
                <div>
                  <span>AVERAGE TEMP.</span>
                  <span>{planet.temperature}</span>
                </div>
              </section>
            </div>
          );
        })}
    </main>
  );
}

export default Planet;
