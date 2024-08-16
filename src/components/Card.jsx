function Card (props){
    console.log(props.items.length)
    if(props.items.length==0){
            return(
              <div className="flex flex-col h-screen w-full items-center justify-center ">
                <h1 className='text-4xl font-bold my-4 text-amber-500'>No Vehicles!</h1>
              </div>
            )
          
         }
    
    return(
        <div className="flex flex-col md:w-1/2 w-full rounded-xl shadow-xl mx-auto my-32 bg-zinc-700 p-10">
            {/*  agr mi <card> k andr kuch pe likh kr show krwana chahta houn */}
            <h1 className="text-xl font-bold text-amber-500 text-center">Collection</h1>
            
            {props.children}
        </div>
    )
}
export default Card;