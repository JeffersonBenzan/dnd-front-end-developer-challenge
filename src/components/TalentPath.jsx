/* eslint-disable react/prop-types */
import { getIconPosition } from "../helpers";
import "./TalentPath.scss";

const TalentPath = ({ pathIndex, path,maxPointsReached, onPointChange }) => {
  return (
    <div
      className={`talent-path ${maxPointsReached ? "max-points-reached" : ""}`}
    >
      {path.map((point, index) => (
        <div
          key={index}
          className={`talent ${point ? "active" : ""}`}
          onClick={() => onPointChange(index, true)}
          onContextMenu={(e) => {
            e.preventDefault();
            onPointChange(index, false);
          }}
          style={{
            backgroundPositionX: getIconPosition(pathIndex, index),
          }}
        />
      ))}
    </div>
  );
};

export default TalentPath;
