import agenda from "./agenda.json";

export type Session = {
  title: string;
  speaker: string;
  location: string;
  link: string;
  tags: string[];
  day: string;
  startTime: {
    hour: number;
    minutes: number;
  };
  endTime: {
    hour: number;
    minutes: number;
  };
};

export type Timeslot = {
  startTime: {
    hour: number;
    minutes: number;
  };
  endTime: {
    hour: number;
    minutes: number;
  };
  sessions: Session[];
};

export type Agenda = {
  [key: string]: Timeslot[];
};

function shallowCompare(left: any, right: any) {
  if (left === right) {
    return true;
  }

  const leftKeys = Object.keys(left);

  for (let lk of leftKeys) {
    if (left[lk] !== right[lk]) {
      return false;
    }
  }

  return true;
}

const fetchAgenda = () => {
  let days: Agenda = {};

  for (let i = 0; i < agenda.length; i++) {
    const session: Session = agenda[i];

    if (!days[session.day]) {
      days[session.day] = [];
    }

    let timeslot = days[session.day].find((ts) => {
      return (
        shallowCompare(ts.startTime, session.startTime) &&
        shallowCompare(ts.endTime, session.endTime)
      );
    });

    if (!timeslot) {
      timeslot = {
        startTime: session.startTime,
        endTime: session.endTime,
        sessions: [],
      };
      days[session.day].push(timeslot);
    }

    timeslot.sessions.push(session);
  }

  return Promise.resolve(days);
};

export { fetchAgenda };
