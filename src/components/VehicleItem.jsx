import { useState } from "react";
import VehicleDate from "./VehicleDate";

function VehicleItem(props) {
 
  return (
    <div className="flex justify-between items-center text-white bg-zinc-600 shadow-xl rounded-lg my-2 p-2">
      {" "}
        <h2 className="text-xl font-semibold capitalize">{props.name}</h2>
        <h2 className="text-xl font-semibold uppercase">{props.model}</h2>
      <div className=" flex items-center justify-center space-x-3">
        <VehicleDate date={props.date} />
  
      </div>
    </div>
  );
}
export default VehicleItem;
