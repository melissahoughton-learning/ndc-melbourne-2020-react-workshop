import React from "react";
import Talk from "./Talk";
import { Timeslot } from "../agenda.models";
import TimeComponent from "./Time";

const TimeslotComponent: React.FC<{ timeslot: Timeslot }> = ({ timeslot }) => {
  const sessions = timeslot.sessions;

  return (
    <li>
      <TimeComponent
        startTime={timeslot.startTime}
        endTime={timeslot.endTime}
      />
      {sessions.map(({ title, speaker }) => (
        <Talk title={title} speaker={speaker} key={title} />
      ))}
    </li>
  );
};

export default TimeslotComponent;
