import React from "react";
import "./App.css";
import { fetchAgenda } from "./fetchAgenda";
import { Agenda, Day } from "./agenda.models";
import TabControl from "./components/Tab";

class App extends React.Component<
  {},
  { agenda?: Agenda; loaded: boolean; selectedTabIndex: number }
> {
  constructor(props: {}) {
    super(props);
    this.state = { agenda: undefined, loaded: false, selectedTabIndex: 0 };
  }

  async componentWillMount() {
    const agenda = await fetchAgenda();
    this.setState({ agenda, loaded: true });
  }

  selectTab(index: number) {
    this.setState({
      selectedTabIndex: index,
    });
  }

  render() {
    const { agenda, loaded } = this.state;

    if (!agenda || !loaded) {
      return <div className="App">Loading...</div>;
    }

    const tabData = Object.keys(agenda).map((dayStr: string) => {
      const day = dayStr as Day;
      return {
        header: day,
        items: agenda[day],
      };
    });

    return (
      <div className="App">
        <TabControl
          tabs={tabData}
          selectedTabIndex={this.state.selectedTabIndex}
          selectTab={(index) => this.selectTab(index)}
        ></TabControl>
      </div>
    );
  }
}

export default App;
