import React from 'react';
import { useAppSelector } from '../../app/hooks';
import { selectDarkMode } from '../../features/displayMode/displayModeSlice';

interface IProps {
  title: string;
  description: string;
  tags: string | null;
}

export default function CardData({ title, description, tags }: IProps) {
  const isDarkMode = useAppSelector(selectDarkMode);
  const color = isDarkMode ? 'text-slate-100' : 'text-slate-800';
  const background = isDarkMode ? 'bg-gray-700' : 'bg-gray-50';
  const border = isDarkMode ? 'border-gray-800' : 'border-gray-100';
  return (
    <div
      className={`p-5 font-semibold w-full border ${border} ${background} ${color}`}
    >
      <h4 className="font-bold">{title}</h4>
      <p className="text-sm opacity-70 mb-2">{description}</p>
      {tags ? (
        <p className="text-xs w-fit bg-sky-200/40 pt-0.5 pb-1 px-2.5 rounded-full">
          {tags}
        </p>
      ) : null}
    </div>
  );
}
