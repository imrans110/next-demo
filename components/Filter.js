import { Header } from "semantic-ui-react";

import { Button } from "semantic-ui-react";

const LaunchYears = [2006, 2020];

const renderLaunchYearButtons = (years) => {
  const LaunchButtons = [];
  for (let i = years[0]; i <= years[1]; i++) {
    LaunchButtons.push(
      <Button style={{ margin: "2px" }} key={i}>
        {i}
      </Button>
    );
  }
  return LaunchButtons;
};

const Filter = () => {
  return (
    <div className="filter-card">
      <Header as="h3">Filters</Header>
      <Header as="h4" dividing>
        <span className="filter-title">Launch Year</span>
      </Header>
      <div className="launch-btns">{renderLaunchYearButtons(LaunchYears)}</div>
      <Header as="h4" dividing>
        <span className="filter-title">Successful Launch</span>
      </Header>
      <div className="launch-btns">
        <Button style={{ margin: "2px" }}>True</Button>
        <Button style={{ margin: "2px" }}>False</Button>
      </div>
      <Header as="h4" dividing>
        <span className="filter-title">Successful Landing</span>
      </Header>
      <div className="launch-btns">
        <Button style={{ margin: "2px" }}>True</Button>
        <Button style={{ margin: "2px" }}>False</Button>
      </div>
      <style jsx>{`
        .filter-card {
          padding: 0.5rem;
          margin: 0.5rem;
          min-height: 30vh;
          display: inline-block;
          height: 89%;
          width: 30vh;
          position: fixed;
          z-index: 1;
          top: 60px;
          left: 0;
          overflow-x: hidden;
          padding-top: 20px;
          background-color: white;
          border-radius: 5px;
        }

        .filter-title {
          display: flex;
          justify-content: center;
        }

        .launch-btns {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
        }
      `}</style>
    </div>
  );
};

export default Filter;
