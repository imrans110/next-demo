import { useState, useEffect } from "react";
import {
  Header,
  Button,
  Container,
  Segment,
  Grid,
  Item,
} from "semantic-ui-react";
import { useRouter } from "next/router";
import { removeEmptyKeys } from "../utils/index.js";

const LaunchYears = [2006, 2020];

const renderLaunchYearButtons = (years, setFilter, filter) => {
  const LaunchButtons = [];
  for (let i = years[0]; i <= years[1]; i++) {
    LaunchButtons.push(
      <Button
        className={
          filter.launch_year == i ? "filter-button active" : "filter-button"
        }
        color="green"
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
  // {LaunchButtons}
  return (
    <Grid columns={2}>
      {LaunchButtons.map((item) => (
        <Grid.Column className="styled-column">{item}</Grid.Column>
      ))}
    </Grid>
  );
};

const Filter = () => {
  const router = useRouter();
  const { launch_success, land_success, launch_year } = router.query;
  const [filter, setFilter] = useState({
    launch_success: launch_success,
    land_success: land_success,
    launch_year: launch_year,
    limit: 100,
  });

  console.log({ filter, router });

  useEffect(() => {
    const query = removeEmptyKeys(filter);
    const queryString = new URLSearchParams(query).toString();

    router.push("?" + queryString);
  }, [filter]);

  const handleChange = (filterKey, value) => {
    setFilter((prevState) => {
      return { ...prevState, [filterKey]: value };
    });
  };

  return (
    <div className="filter-container">
      <Segment raised>
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
        <Grid columns={2}>
          <Grid.Column className="styled-column">
            <Button
              color="green"
              className={
                filter.launch_success == "true"
                  ? "filter-button active"
                  : "filter-button"
              }
              onClick={() => handleChange("launch_success", "true")}
            >
              True
            </Button>
          </Grid.Column>
          <Grid.Column className="styled-column">
            <Button
              color="green"
              className={
                filter.launch_success == "false"
                  ? "filter-button active"
                  : "filter-button"
              }
              onClick={() => handleChange("launch_success", "false")}
            >
              False
            </Button>
          </Grid.Column>
        </Grid>

        <Header as="h4" dividing>
          <span>Successful Landing</span>
        </Header>
        <Grid columns={2}>
          <Grid.Column className="styled-column">
            <Button
              className={
                filter.land_success == "true"
                  ? "filter-button active"
                  : "filter-button"
              }
              color="green"
              onClick={() => handleChange("land_success", "true")}
            >
              True
            </Button>
          </Grid.Column>
          <Grid.Column className="styled-column">
            <Button
              color="green"
              className={
                filter.land_success == "false"
                  ? "filter-button active"
                  : "filter-button"
              }
              onClick={() => handleChange("land_success", "false")}
            >
              False
            </Button>
          </Grid.Column>
        </Grid>
      </Segment>
    </div>
  );
};

export default Filter;
