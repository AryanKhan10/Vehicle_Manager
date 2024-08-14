import Card from './Card'
import VehicleItem from './VehicleItem'

function Vehicle({items}){
   console.log(items)
    return(
        <Card>
            {/* <ProductItem
            name = {props.items[0].name}
            model = {props.items[0].model}
            date = {props.items[0].Date}
            />
            <ProductItem
            name = {props.items[1].name}
            model = {props.items[1].model}
            date = {props.items[1].Date}
            />
            <ProductItem
            name = {props.items[2].name}
            model = {props.items[2].model}
            date = {props.items[2].Date}
            /> */}
            {items.map((element) => (
  <VehicleItem 
    key={element.id} // Always include a unique key prop when rendering lists
    name={element.name} 
    model={element.model} 
    date={element.Date} 
  />
))}

        </Card>
    )
}
export default Vehicle;