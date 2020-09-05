import { Header, Button } from "semantic-ui-react";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Constants from "../constants.json";
import { removeEmptyKeys } from "../utils/index.js";

const LaunchYears = [2006, 2020];

const renderLaunchYearButtons = (years, setFilter, filter) => {
  const LaunchButtons = [];
  for (let i = years[0]; i <= years[1]; i++) {
    LaunchButtons.push(
      <Button
        active={filter.launch_year == i}
        onClick={() =>
          setFilter((prevState) => {
            return { ...prevState, launch_year: JSON.stringify(i) };
          })
        }
        style={{ margin: "2px" }}
        key={i}
      >
        {i}
      </Button>
    );
  }
  return LaunchButtons;
};

const Filter = () => {
  const router = useRouter();
  const { launch_success, land_success, launch_year } = router.query;
  console.log({ launch_success, land_success, launch_year });
  const [filter, setFilter] = useState({
    launch_success: launch_success || null,
    land_success: land_success || null,
    launch_year: launch_year || null,
    limit: 100,
  });

  console.log({ filter });

  useEffect(() => {
    const query = removeEmptyKeys(filter);
    const queryString = new URLSearchParams(query).toString();
    console.log({ queryString: queryString });

    router.push("?" + queryString);
  }, [filter]);

  const handleChange = (filterKey, value) => {
    setFilter((prevState) => {
      return { ...prevState, [filterKey]: value };
    });
  };

  return (
    <div className="filter-card">
      <Header as="h3">Filters</Header>

      <Header as="h4" dividing>
        <span className="filter-title">Launch Year</span>
      </Header>

      <div className="launch-btns">
        {renderLaunchYearButtons(LaunchYears, setFilter, filter)}
      </div>

      <Header as="h4" dividing>
        <span className="filter-title">Successful Launch</span>
      </Header>
      <div className="launch-btns">
        <Button
          onClick={() => handleChange("launch_success", true)}
          style={{ margin: "2px" }}
        >
          True
        </Button>
        <Button
          onClick={() => handleChange("launch_success", false)}
          style={{ margin: "2px" }}
        >
          False
        </Button>
      </div>

      <Header as="h4" dividing>
        <span className="filter-title">Successful Landing</span>
      </Header>
      <div className="launch-btns">
        <Button
          active={filter.land_success == true}
          onClick={() => handleChange("land_success", true)}
          style={{ margin: "2px" }}
        >
          True
        </Button>
        <Button
          active={filter.land_success == false}
          onClick={() => handleChange("land_success", false)}
          style={{ margin: "2px" }}
        >
          False
        </Button>
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
