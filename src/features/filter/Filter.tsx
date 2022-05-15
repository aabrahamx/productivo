import React from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { change, selectFilter } from './filterSlice';

const options = ['all', 'work', 'personal'];

export default function Filter() {
  const filter = useAppSelector(selectFilter);
  const dispatch = useAppDispatch();

  const handleRadioChange = ({ target }: any): void => {
    dispatch(change(target.value));
  };

  return (
    <fieldset onChange={handleRadioChange}>
      {options.map((value) => {
        const cappedValue = value[0].toUpperCase() + value.substring(1);

        return (
          <section className="inline-flex ml-2 mr-5 flex flex-col items-center">
            <label htmlFor={value} className="font-semibold">
              {cappedValue}
            </label>
            <input
              name="filter"
              id={value}
              type="radio"
              value={value}
              checked={filter === value ? true : false}
            />
          </section>
        );
      })}
    </fieldset>
  );
}
