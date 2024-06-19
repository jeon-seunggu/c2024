import { useReducer } from "react";

//공급자
const reducer = (state,action) => {
    console.log('reducer');
}




const Counter =()=> {
    const [state,dispatch]=useReducer(reducer,0);
    const [num,setNum] = useState();
    
    const increment = () => {
        dispatch({type:"increment",payload:5})
        console.log(res);
    }

    return (
        <div>
            <button onClick={()=>dispatch()}></button>
        </div>
    )
}


export default Counter;
