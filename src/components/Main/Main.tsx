import React, { useState } from 'react';

import DisplayTodoByStatus from '../../features/todo/DisplayTodoByStatus';
import StatusWrapper from '../StatusWrapper/StatusWrapper';
import Title from '../Title/ Title';

export type TDisplay = 'todo' | 'doing' | 'finished';

export default function Main() {
  const [display, setDisplay] = useState<TDisplay>('todo');
  const handleDisplayChange = (val: TDisplay) => setDisplay(val);

  return (
    <main>
      <div className="flex w-full mt-3">
        <div className="w-full md:w-1/3">
          <Title
            util="bg-red-400"
            changeDisplay={handleDisplayChange}
            display={display === 'todo'}
            title="todo"
          />
          <StatusWrapper display={display === 'todo'}>
            <DisplayTodoByStatus status="todo" />
          </StatusWrapper>
        </div>

        <div className="w-full md:w-1/3">
          <Title
            util="bg-yellow-400"
            changeDisplay={handleDisplayChange}
            display={display === 'doing'}
            title="doing"
          />
          <StatusWrapper display={display === 'doing'}>
            <DisplayTodoByStatus status="doing" />
          </StatusWrapper>
        </div>

        <div className="w-full md:w-1/3">
          <Title
            util="bg-green-400"
            changeDisplay={handleDisplayChange}
            display={display === 'finished'}
            title="finished"
          />
          <StatusWrapper display={display === 'finished'}>
            <DisplayTodoByStatus status="finished" />
          </StatusWrapper>
        </div>
      </div>
    </main>
  );
}
