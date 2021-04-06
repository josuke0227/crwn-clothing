import React from "react";

import Directory from "../../components/directory/directory.component";

import "./homepage.styles.scss";

import { HomePageContainer } from "./homepage.styles";

const HomePage = () => {
  return (
    <HomePageContainer>
      <div className="directory-menu">
        <Directory />
      </div>
    </HomePageContainer>
  );
};

export default HomePage;
