import React from "react";
import TimeslotComponent from "./Timeslot";
import { Timeslot, Day } from "../agenda.models";
import { TitleHeader } from "./styled/headers";
import { TimeList } from "./styled/timelist";

const DayComponent: React.FC<{ timeslots: Timeslot[]; day: Day }> = ({
  timeslots,
  day,
}) => (
  <div key={day}>
    <TitleHeader>{day}</TitleHeader>
    <TimeList>
      {timeslots.map((timeslot) => (
        <TimeslotComponent timeslot={timeslot} key={timeslot.startTime.hour} />
      ))}
    </TimeList>
  </div>
);

export default DayComponent;
