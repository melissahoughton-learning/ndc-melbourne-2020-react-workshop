import React from "react";
import styled from "styled-components";

import TimeslotComponent from "./Timeslot";
import { Timeslot, Day } from "../agenda.models";

const TimeList = styled.ul`
  list-style-type: none;
`;

const DayComponent: React.FC<{ timeslots: Timeslot[]; day: Day }> = ({
  timeslots,
  day,
}) => (
  <div key={day}>
    <TimeList>
      {timeslots.map((timeslot) => (
        <TimeslotComponent timeslot={timeslot} key={timeslot.startTime.hour} />
      ))}
    </TimeList>
  </div>
);

export default DayComponent;
