import React, { useContext } from 'react';
import { ThemeContext } from '../../app/App';

interface IProps {
  title: string;
  description: string;
  tags: string | null;
}

export default function CardData({ title, description, tags }: IProps) {
  const theme = useContext(ThemeContext);
  const color = theme === 'dark' ? 'text-slate-100' : 'text-slate-800';
  const background = theme === 'dark' ? 'bg-gray-700' : 'bg-gray-50';
  const border = theme === 'dark' ? 'border-gray-800' : 'border-gray-100';

  return (
    <div
      className={`p-5 font-semibold w-full border ${border} ${background} ${color}`}
    >
      <h4 className="font-semibold">{title}</h4>
      <p className="text-sm font-light mb-2">{description}</p>
      {tags && (
        <p className="text-xs w-fit bg-sky-200/30 py-0.5 px-2.5 rounded-md">
          {tags}
        </p>
      )}
    </div>
  );
}
