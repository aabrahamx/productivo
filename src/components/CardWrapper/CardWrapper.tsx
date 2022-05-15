import React from "react";

interface IProps {
  children: React.ReactNode
}


export default function CardWrapper({ children }: IProps) {
  return <div className="relative w-full pl-1 pr-2 my-3 flex">{children}</div>;
}
