import { Agenda, Session, Timeslot, Time } from "./agenda.models";
import data from "./agenda.json";

const compareTime = (timeA: Time, timeB: Time) =>
  timeA.hour === timeB.hour && timeA.minutes === timeB.minutes;

const fetchAgenda = () => {
  let agenda: Agenda = {
    wednesday: [],
    thursday: [],
    friday: [],
  };

  let sessions = data as Session[];

  for (let session of sessions) {
    let currentDayTimeslots = agenda[session.day];

    let timeslot = currentDayTimeslots.find((slot: Timeslot) => {
      return (
        compareTime(slot.startTime, session.startTime) &&
        compareTime(slot.endTime, session.endTime)
      );
    });

    if (!timeslot) {
      timeslot = {
        startTime: session.startTime,
        endTime: session.endTime,
        sessions: [],
        day: session.day,
      };
      currentDayTimeslots.push(timeslot);
    }

    timeslot.sessions.push(session);
  }

  return Promise.resolve(agenda);
};

export { fetchAgenda };
