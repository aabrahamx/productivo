import React from 'react';
import { useAppSelector } from '../../app/hooks';
import { selectTheme } from '../../features/theme/themeSlice';
import { capitalize } from '../../helpers/functions';

export const ToggleSwitch: React.FC<any> = ({ onClick, active, options }) => {
  const theme = useAppSelector(selectTheme);
  const bgTrack = theme === 'light' ? 'bg-gray-100' : 'bg-gray-700';

  return (
    <div className={`w-full rounded-3xl ${bgTrack}`}>
      {options.map((option: any) => {
        const { name, color } = option;
        const bgBtn = active === name ? color || 'bg-gray-500' : 'bg-inherit';

        return (
          <button
            onClick={onClick}
            value={name}
            className={`w-1/3 py-1.5 font-bold rounded-3xl transition-all ${bgBtn}`}
          >
            {capitalize(name)} 
          </button>
        );
      })}
    </div>
  );
};
