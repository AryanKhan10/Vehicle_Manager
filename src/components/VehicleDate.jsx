function VehicleDate({date}){
    
    const month =  date.getDate();
    const day =  date.toLocaleString('default', { month: 'short' });
    const year =  date.getFullYear();
    return(
        <div className="w-[7rem] flex flex-col items-center justify-center text-white px-3 py-2 text-md font-semibold bg-zinc-400 rounded-lg shadow-lg">
            <div>{month}</div>
            <div>{day}</div>
            <div>{year}</div>
        </div>
    )
}
export default VehicleDate;