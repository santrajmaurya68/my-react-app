import React, { useState } from "react";
/*
function Count (){
    return(
        <div>
        <h1> Hii</h1>
        </div>
    )
}*/
const Count = ()=>{
    var [ count , setCount ] = useState(0)
    //var count = 0 ;
   const Number = () =>{
    setCount(count+1)
    console.log(count+1 ) 
   }
    return(
        <div>
            <h1>Hiiiii</h1>
              {count}
            <button onClick={Number} >click</button>
        </div>
    )
}
export default Count ;