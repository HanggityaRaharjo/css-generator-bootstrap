import React from "react";

const Section = ({ children }) => {
  return (
    <section className="text-light" style={{ minHeight: "100vh" }}>
      {children}
    </section>
  );
};

export default Section;
