import React from "react";

interface IProps {
  children: React.ReactNode
}

export default function AllSectionWrapper({ children }: IProps) {
  return (
    <div className="w-full md:flex">
      {children}
    </div>
  );
}
