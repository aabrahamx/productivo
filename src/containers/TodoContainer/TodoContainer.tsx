import React, { useState } from 'react';
import { ToggleSwitch } from '../../components/ToggleSwitch/ToggleSwitch';
import DisplayTodoByStatus from '../../features/todo/DisplayTodoByStatus';
import StatusWrapper from '../../components/StatusWrapper/StatusWrapper';

export type TDisplay = 'todo' | 'doing' | 'finished';
const options = [
  { name: 'todo', color: 'bg-red-500' },
  { name: 'doing', color: 'bg-yellow-500' },
  { name: 'finished', color: 'bg-green-500' },
];

const TodoContainer: React.FC = () => {
  const [display, setDisplay] = useState<TDisplay>('todo');
  const handleDisplayChange = ({ target }: any) => setDisplay(target.value);

  const [screen, setScreen] = useState(window.innerWidth);
  window.onresize = () => setScreen(window.innerWidth);
  const mdScreen = 768;

  // smaller screen: only renders one status & btn switch for control
  // bigger screen: renders all status, title and removes switch
  return (
    <main className="mt-3">
      {screen < mdScreen && (
        <ToggleSwitch
          options={options}
          active={display}
          onClick={handleDisplayChange}
        />
      )}

      <div className="flex w-full mt-1">
        {options.map((option) => {
          const { name, color } = option;

          return (
            <div className="w-full md:w-1/3">
              {screen > mdScreen && (
                <h2 className={`${color} py-1.5 font-bold text-center`}>
                  {name[0].toUpperCase() + name.slice(1)}
                </h2>
              )}

              <StatusWrapper display={display === name}>
                <DisplayTodoByStatus status={name} />
              </StatusWrapper>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default TodoContainer;
