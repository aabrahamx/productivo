import React from "react";
interface IProps {
  children: React.ReactNode
}
export default function Logo({ children }: IProps) {
  return <h1 className="mb-3 font-black text-3xl">{children}</h1>;
}