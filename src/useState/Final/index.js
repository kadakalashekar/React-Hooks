import React,{useState} from "react";

const Index = ()=>{
  const [count , setCount]=useState(0);
  /* console.log(count)
  console.log(setcount) */

  const incrementCount =()=>{
    //setCount(count+1)
    setCount((preCount)=>{
        return preCount +1;
    });
   /*  setCount((preCount)=>{
        return preCount +1;
    }); */
    setCount((preCount)=>preCount+1)
    
  };
  const decrementCount=()=>{
    //setCount(count-1)
    setCount((preCount)=>{
        return preCount -1;
    })
  /*   setCount((preCount)=>{
        return preCount -1;
    }) */
    setCount((preCount)=>preCount-1)

  };
    return(
    <section>
        <button onClick={decrementCount}>-</button>
        <span> Count : {count}</span>
        <button onClick={incrementCount}>+</button>

    </section>
    )
}

export default Index;