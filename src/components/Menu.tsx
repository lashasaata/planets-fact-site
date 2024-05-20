import React from "react";

function Menu(props) {
  return (
    <main>
      {props.useData.map((e) => {
        return (
          <section>
            <div>
              <div></div>
              <h2>{e.name}</h2>
            </div>
            <img src="./assets/icon-chevron.svg" alt="arrow" />
          </section>
        );
      })}
    </main>
  );
}

export default Menu;
