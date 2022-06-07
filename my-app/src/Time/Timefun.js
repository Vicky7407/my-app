import { useEffect, useState } from "react";


function Timefun (props) {
    const[time , setTime] = useState(new Date());

    const tick = () =>{
        setTime(new Date());
    }

    useEffect(() => {
        //component did unmount component did update.
         const timeI = setInterval(()=> tick(),1000);
        return() =>{
            clearInterval(timeI);
        } 
    },[time]);


    return(
        <div>
            <p>{time.toLocaleTimeString()}</p>
        </div>
    );
    }
    export default Timefun;