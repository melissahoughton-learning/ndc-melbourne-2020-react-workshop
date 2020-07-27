// Note: agenda.json is an array of Sessions

export type Session = {
  title: string;
  speaker: string;
  location: string;
  link: string;
  tags: string[];
  startTime: Time;
  endTime: Time;
  day: Day;
};

export type Time = {
  hour: number;
  minutes: number;
};

export type Day = "wednesday" | "thursday" | "friday";

export type Timeslot = {
  sessions: Session[];
  day: Day;
  startTime: Time;
  endTime: Time;
};

export type Agenda = {
  [key in Day]: Timeslot[];
};
