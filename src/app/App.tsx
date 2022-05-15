import React from 'react';

import { useAppSelector } from './hooks';
import { selectDarkMode } from '../features/displayMode/displayModeSlice';
import ToggleDarkMode from '../features/displayMode/DisplayMode';
import Filter from '../features/filter/Filter';

import {
  StatusDoingContainer,
  StatusFinishedContainer,
  StatusTodoContainer,
} from '../features/todo/ToDo';

import Title from '../components/Title/ Title';
import Logo from '../components/Logo/Logo';
import OptionWrapper from '../components/OptionWrapper/OptionWrapper';
import StatusWrapper from '../components/StatusWrapper/StatusWrapper';
import MainWrapper from '../components/MainWrapper/MainWrapper';
import AllSectionWrapper from '../components/AllSectionWrapper/AllSectionWrapper';
import SectionWrapper from '../components/SectionWrapper/SectionWrapper';
import AddTodoContainer from '../features/todo/AddTodoContainer';



export default function App() {
  const isDarkMode = useAppSelector(selectDarkMode);
  const util = isDarkMode ? 'text-white bg-gray-800' : null;
  const globalUtil =
    'w-screen min-h-screen p-3 flex flex-col justify-start md:justify-center items-center transition duration-300';

  return (
    <div className={`${globalUtil} ${util}`}>
      <Logo>PRODUCTIVO</Logo>
      <MainWrapper>
        <OptionWrapper>
          <Filter />
          <ToggleDarkMode />
        </OptionWrapper>

        <AllSectionWrapper>
          <SectionWrapper>
            <Title util="bg-red-400">To-do</Title>
            <StatusWrapper>
              <StatusTodoContainer />
            </StatusWrapper>
          </SectionWrapper>

          <SectionWrapper>
            <Title util="bg-yellow-400">Doing</Title>
            <StatusWrapper>
              <StatusDoingContainer />
            </StatusWrapper>
          </SectionWrapper>

          <SectionWrapper>
            <Title util="bg-green-400">Finished</Title>
            <StatusWrapper>
              <StatusFinishedContainer />
            </StatusWrapper>
          </SectionWrapper>
        </AllSectionWrapper>

        <AddTodoContainer />
      </MainWrapper>
    </div>
  );
}
