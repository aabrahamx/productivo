import React from "react";

export default function SectionWrapper({ children }) {
  return (
    <section className="w-full md:w-1/3 mb-10 md:mb-0">
      {children}
    </section>
  );
}