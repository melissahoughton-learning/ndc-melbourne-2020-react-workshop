import React from "react";
import styled from "styled-components";
import { Timeslot, Day } from "../agenda.models";
import DayComponent from "./Day";

const TabContainer = styled.div`
  width: 100%;
`;

const TabHeaderContainer = styled.div`
  display: flex;
`;

const TabHeader = styled.div`
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.color};
  border: #282c34 1px solid;
  width: 100%;
  text-align: center;
  cursor: pointer;
`;

const defaultTheme = {
  color: "#282c34",
  backgroundColor: "grey",
};

const selectedTheme = {
  color: "white",
  backgroundColor: "#282c34",
};

const TabBody = styled.div``;

export type TabControlProps = {
  tabs: {
    header: Day;
    items: Timeslot[];
  }[];
  selectedTabIndex: number;
  selectTab: (index: number) => void;
};

const TabControl: React.FC<TabControlProps> = ({
  tabs,
  selectedTabIndex,
  selectTab,
}) => (
  <TabContainer>
    <TabHeaderContainer>
      {tabs.map(({ header }, i) => (
        <TabHeader
          onClick={() => selectTab(i)}
          theme={selectedTabIndex === i ? selectedTheme : defaultTheme}
          key={i}
        >
          <h3>{header.toUpperCase()}</h3>
        </TabHeader>
      ))}
    </TabHeaderContainer>
    <TabBody>
      <DayComponent
        timeslots={tabs[selectedTabIndex].items}
        day={tabs[selectedTabIndex].header as Day}
        key={selectedTabIndex}
      />
    </TabBody>
  </TabContainer>
);

export default TabControl;
