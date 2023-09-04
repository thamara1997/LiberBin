
import React from "react";
import {TailSpin} from "react-loader-spinner";

const Spinner = ({ msg }) => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <TailSpin color="#2f9b79" height={50} width={50}/>
      <p className="text-lg text-center px-2">{msg}</p>
    </div>
  );
};

export default Spinner;