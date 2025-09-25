const User=(props)=>{
return(
    <div className="w-[200px] h-[250px] border-4 border-yellow-300 rounded-2xl m-6 p-4">
<h1>Name : {props.name}</h1>
<h2>Location: Chennai</h2>
<h2>mail: abinaya@gmail.com</h2>
    </div>
)
}

export default User;