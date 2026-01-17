import React from "react";

const Loader = ({ size = 40 }) => {
  return (
    <div className="flex items-center justify-center py-20">
      <div
        className="animate-spin rounded-full border-4 border-neutral-600 border-t-cyan-400"
        style={{ width: size, height: size }}
      />
    </div>
  );
};

export default Loader;
