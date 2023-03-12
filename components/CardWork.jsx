import React from "react";

const CardWork = ({ icon, title, lorem }) => {
  return (
    <div>
      <div className="border-2 p-6 m-6 border-black rounded-lg text-white bg-teal-400">
        {icon}
        <h1 className="py-6 font-serif font-bold md:text-xl">{title}</h1>
        <p>{lorem}</p>
      </div>
    </div>
  );
};

export default CardWork;
