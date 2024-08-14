function VehicleDate(props){
    const month =  props.date.toLocaleString('en-US', {month: 'long'})
    const day =  props.date.toLocaleString('en-US', {day: '2-digit'})
    const year =  props.date.getFullYear()
    return(
        <div className="w-[7rem] flex flex-col items-center justify-center px-3 py-2 text-md font-semibold bg-zinc-400 rounded-lg shadow-lg">
            <div>{month}</div>
            <div>{day}</div>
            <div>{year}</div>
        </div>
    )
}
export default VehicleDate;