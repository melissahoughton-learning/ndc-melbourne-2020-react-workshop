import React from "react";
import { Time } from "../agenda.models";

const TimeComponent: React.FC<{ startTime: Time; endTime: Time }> = ({
  startTime,
  endTime,
}) => {
  return (
    <h3>
      {startTime.hour}:{startTime.minutes === 0 ? "00" : startTime.minutes} -{" "}
      {endTime.hour}:{endTime.minutes === 0 ? "00" : endTime.minutes}
    </h3>
  );
};
export default TimeComponent;
