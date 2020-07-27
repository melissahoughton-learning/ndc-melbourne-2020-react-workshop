import React from "react";
import TimeslotComponent from "./Timeslot";
import { Timeslot, Day } from "../agenda.models";

const DayComponent: React.FC<{ timeslots: Timeslot[]; day: Day }> = ({
  timeslots,
  day,
}) => (
  <div key={day}>
    <h2>{day}</h2>
    <ul>
      {timeslots.map((timeslot) => (
        <TimeslotComponent timeslot={timeslot} key={timeslot.startTime.hour} />
      ))}
    </ul>
  </div>
);

export default DayComponent;
