import React, { Profiler } from "react";

import Directory from "../../components/directory/directory.component";

import "./homepage.styles.scss";

import { HomePageContainer } from "./homepage.styles";

const HomePage = () => {
  return (
    <HomePageContainer>
      <div className="directory-menu">
        <Profiler
          id="Directory"
          onRender={(id, phase, actualDuration) => {
            console.log({
              id,
              phase,
              actualDuration,
            });
          }}
        >
          <Directory />
        </Profiler>
      </div>
    </HomePageContainer>
  );
};

export default HomePage;
