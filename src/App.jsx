import './App.css'
import { useState,useEffect } from 'react'
import Vehicle from './components/Vehicle'
import NewVehicle from './components/NewVehicle'

function App() {
  const [vehicle, setVehicle]  =useState([
   
  ]);
  const ourVehicle=(veh)=>{
    setVehicle((prevVeh)=>{
      return [...prevVeh, veh];
    })
  }
  const removeVehicles=(id)=>{
    const updatedVeh = vehicle.filter(vid=>vid.id !==id)
    // console.log(updatedVeh)
    setVehicle(updatedVeh)
  }
 
  return (
    <>

    <NewVehicle VehToNewVeh = {ourVehicle}/>
    <Vehicle items = {vehicle} onRemove={removeVehicles}/>
    </>
  )
}

export default App
