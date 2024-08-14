import VehicleFrom from "./VehicleFrom";

function NewVehicle(props){

    const savedVehicle=(veh)=>{
        // console.log("inside New vehicle")
        props.VehToNewVeh(veh)
    }

    return(
        <div className="flex flex-col w-1/2 bg-gray-600 shadow-xl rounded-lg px-10 py-10 mx-auto my-10">
            <h1 className="text-xl font-bold text-amber-500 text-center">Add vehicles to the collection</h1>

            <VehicleFrom save={savedVehicle} />
        </div>
    )
}
export default NewVehicle;