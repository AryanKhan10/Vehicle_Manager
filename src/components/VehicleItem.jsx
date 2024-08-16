import { useState } from "react";
import VehicleDate from "./VehicleDate";

function VehicleItem({id,name,model,date,onR}) {
  // console.log(typeof(date))
 
  return (
    <div className="flex justify-between items-center text-amber-500 bg-zinc-600 shadow-xl rounded-lg my-2 p-2">
      {" "}
        <h2 className="text-xl font-semibold capitalize">{name}</h2>
        <h2 className="text-xl font-semibold uppercase">{model}</h2>
      <div className=" flex items-center justify-center space-x-3">
        <VehicleDate date={date} />
        <button className="px-4 py-2 bg-slate-600 border-[0.1px] border-slate-700 hover:bg-slate-500 rounded-lg shadow-lg" onClick={()=>onR(id)}>Remove</button>
      </div>
    </div>
  );
}
export default VehicleItem;
