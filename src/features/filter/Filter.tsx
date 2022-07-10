import React from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { change, selectFilter } from './filterSlice';

const options = ['all', 'work', 'personal'];

const Filter: React.FC = () => {
  const filter = useAppSelector(selectFilter);
  const dispatch = useAppDispatch();

  const handleRadioChange = ({ target }: any): void => {
    dispatch(change(target.value));
  };

  return (
    <select
      onChange={handleRadioChange}
      value={filter}
      className="bg-slate-600 p-1 outline-none text-sm w-fit"
    >
      {options.map((option) => {
        const formattedOption = option[0].toUpperCase() + option.substring(1);
        return (
          <option className="text-xs" value={option}>
            {formattedOption}
          </option>
        );
      })}
    </select>
  );
};

export default Filter;
