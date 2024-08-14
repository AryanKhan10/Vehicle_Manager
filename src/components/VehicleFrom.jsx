import { useState } from "react"

function VehicleFrom(props){

    const[NewName,setNewName] = useState('');
    const[NewDate,setNewDate] = useState('');
    const[NewModel,setNewModel] = useState('');

    const nameHandler = (e)=>{
        // console.log(e.target.value)
        setNewName(e.target.value)
    }
    const dateHandler = (e)=>{
        // console.log(e.target.value)
        setNewDate(e.target.value)
    }
    const modelHandler = (e)=>{
        // console.log(e.target.value)
        setNewModel(e.target.value)
    }

    const submitHandler=(e)=>{
        e.preventDefault()
        console.log(NewName,NewDate)

        //creating new product
        const NewVehicle ={
            id: Math.random().toString(), // Generate a unique id
            name: NewName,
            model:NewModel,
            Date: new Date(NewDate) // Convert the string to a Date object
        }
        // console.log(NewVehicle)
        props.save(NewVehicle)
        //empty what you have written in input field but you have to put value={newname} & value={newndate} in input field respecticely
        setNewName('')
        setNewDate('')
        setNewModel('')
    }

    return(
        <form onSubmit={submitHandler}>
            <div className="my-3 ">
                <label className="text-amber-500 pe-2 text-lg">Name *</label>
                <input className="px-1 rounded-md h-9 w-full" required onChange={nameHandler} value={NewName} type="text" />
            </div>

            <div className="my-3 ">
                <label className="text-amber-500 pe-2 text-lg">Model *</label>
                <input className="px-1 rounded-md h-9 w-full" required onChange={modelHandler} value={NewModel} type="text" />
            </div>
            
            <div className="my-3 ">
                <label className="text-amber-500 pe-2 text-lg">Date *</label>
                <input className="px-1 rounded-md h-9 w-full" required onChange={dateHandler} value={NewDate} type="date" />
            </div>
            <button 
            className="bg-sky-800 text-lg hover:bg-sky-700 shadow-md text-white rounded-md my-3 px-2 py-1 ">Submit</button>
        </form>
    )
} export default VehicleFrom