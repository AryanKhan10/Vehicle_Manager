function Card (props){
return(
    <div className="flex flex-col md:w-1/2 w-full rounded-xl shadow-xl mx-auto my-32 bg-zinc-700 p-10">
        {/*  agr mi <card> k andr kuch pe likh kr show krwana chahta houn */}
        <h1 className="text-xl font-bold text-white text-center">Collection</h1>
        
        {props.children}
    </div>
)
}
export default Card;