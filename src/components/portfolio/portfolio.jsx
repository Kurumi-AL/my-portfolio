import React, { useEffect } from "react";
import CardTable from "../../elements/cardTable/cardTable";

import "./portfolio.css";

const Portfolio = () => {
  return (
    <React.Fragment>
      <div className="portfolio">
        <h1 className="portfolio-title">Portfolio</h1>
        <CardTable />
      </div>
    </React.Fragment>
  );
};

export default Portfolio;
