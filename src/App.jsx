import './App.css'
import { useState } from 'react'
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
  return (
    <>

    <NewVehicle VehToNewVeh = {ourVehicle}/>
    <Vehicle items = {vehicle}/>
    </>
  )
}

export default App
