import React from "react";

const LaunchCard = ({ launchData }) => {
  return launchData.map((data, i) => (
    <div className="launchCard" key={i}>
      <h3>{data.mission_name}</h3>
      <p>{data.details}</p>

      <style jsx>{`
        .launchCard {
          padding: 0.5rem;
          margin: 0.5rem;
          min-height: 40vh;
          width: 30vh;
        }
      `}</style>
    </div>
  ));
};

export default LaunchCard;
