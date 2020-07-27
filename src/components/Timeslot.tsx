import React from "react";
import Talk from "./Talk";
import { Timeslot } from "../agenda.models";
import TimeComponent from "./Time";
import { TimeListItem } from "./styled/timelist";

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
