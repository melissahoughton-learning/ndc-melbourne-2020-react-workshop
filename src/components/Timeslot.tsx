import React from "react";
import styled from "styled-components";

import Talk from "./Talk";
import { Timeslot } from "../agenda.models";
import TimeComponent from "./Time";

const TimeListItem = styled.li``;

const TimeslotComponent: React.FC<{ timeslot: Timeslot }> = ({ timeslot }) => {
  const sessions = timeslot.sessions;

  return (
    <TimeListItem>
      <TimeComponent
        startTime={timeslot.startTime}
        endTime={timeslot.endTime}
        key={timeslot.startTime.hour}
      />
      {sessions.map(({ title, speaker }) => (
        <Talk title={title} speaker={speaker} key={title} />
      ))}
    </TimeListItem>
  );
};

export default TimeslotComponent;
