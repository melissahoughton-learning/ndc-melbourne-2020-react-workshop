import React from "react";
import "./App.css";
import { fetchAgenda } from "./fetchAgenda";
import { Agenda, Day } from "./agenda.models";
import DayComponent from "./components/Day";

class App extends React.Component<{}, { agenda?: Agenda; loaded: boolean }> {
  constructor(props: {}) {
    super(props);
    this.state = { agenda: undefined, loaded: false };
  }

  async componentWillMount() {
    const agenda = await fetchAgenda();
    this.setState({ agenda, loaded: true });
  }

  render() {
    const { agenda, loaded } = this.state;

    if (!agenda || !loaded) {
      return <div className="App">Loading...</div>;
    }

    return (
      <div className="App">
        {Object.keys(agenda).map((dayString: string) => {
          const day = dayString as Day;
          return <DayComponent timeslots={agenda[day]} day={day} key={day} />;
        })}
      </div>
    );
  }
}

export default App;
