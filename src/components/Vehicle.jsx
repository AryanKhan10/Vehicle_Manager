import Card from './Card'
import VehicleItem from './VehicleItem'

function Vehicle({items,onRemove}){
  
    return(
        <Card items={items}>
                {items.map((element) => (
                    <VehicleItem key={element.id}
                      id={element.id} // Always include a unique key prop when rendering lists
                      name={element.name} 
                      model={element.model} 
                      date={element.date}
                      onR={onRemove} 
                      />
                          ))}

        </Card>
    )
}
export default Vehicle;