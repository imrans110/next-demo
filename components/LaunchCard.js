import React from "react";

const LaunchCard = ({ launchData }) => {
  return launchData.map((data, i) => (
    <div className="launchCard" key={i}>
      <img src={data.links.mission_patch} />
      <h3>{data.mission_name}</h3>
      <p>{data.details}</p>

      <style jsx>{`
        .launchCard {
          padding: 0.5rem;
          margin: 0.5rem;
          min-height: 40vh;
          width: 30vh;
          border-radius: 6px;
          background: white;
        }

        .launchCard > img {
          min-height: 15vh;
          width: 22vh;
          object-fit: cover;
          display: block;
          margin-left: auto;
          margin-right: auto;
          background: #e7e7e7f2;
          padding: 7px;
          border-radius: 7px;
        }
      `}</style>
    </div>
  ));
};

export default LaunchCard;
