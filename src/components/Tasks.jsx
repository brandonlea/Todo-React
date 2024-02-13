import { React, Children } from "react";

export default function Tasks({ children }) {
  return (
    <div className="grid grid-flow-row pt-12 space-y-4">
      {Children.map(children, (child) => (
        <>{child}</>
      ))}
    </div>
  );
}
