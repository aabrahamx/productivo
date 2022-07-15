import React, { createContext } from 'react';
import { useAppSelector } from './hooks';
import { selectTheme, ITheme } from '../features/theme/themeSlice';

import Header from '../components/Header/Header';
import TodoContainer from '../containers/TodoContainer/TodoContainer';
import { AddTodo } from '../features/todo/AddTodo';

export const ThemeContext = createContext<ITheme['theme']>('dark');

const App: React.FC = () => {
  const theme = useAppSelector(selectTheme);
  return (
    <AppWrapper style={theme}>
      <ThemeContext.Provider value={theme}>
        <Header />
        <TodoContainer />
        <AddTodo />
      </ThemeContext.Provider>
    </AppWrapper>
  );
};

interface IProps {
  style: ITheme['theme'];
  children: React.ReactNode;
}

const globalUtil = 'min-h-screen p-3 transition lg:px-20 relative';

function AppWrapper({ style, children }: IProps) {
  const themeUtil = style === 'dark' ? 'text-white bg-gray-800' : null;
  return <div className={`${globalUtil} ${themeUtil}`}>{children}</div>;
}

export default App;
