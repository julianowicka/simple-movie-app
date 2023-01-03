import {useEffect, useState} from "react";
import './App.css';

const Person = (props) =>{
    return (
        <>
        <h1>Name: {props.name}</h1>
        <h2>Last name: {props.lastName}</h2>
        <h2>Age: {props.age}</h2>
        </>
    )
}


const App = () => {

    const name = 'Julia';
    const isNameShowing = true;
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        alert("You have changed the counter to " + counter)
    },[counter]);

    return (

    <div className="App">

      <h1>Hello, {isNameShowing ? name: 'someone'} {2 + 2}! </h1>
        {name ? (
            <>
            test
            </>
        ): (
            <>
                    <h1>test</h1>
                    <h2>There is no name</h2>
                </>
        )}
        <Person name ='John' lastName='Doe' age={30} />
    <button onClick={() => setCounter((prevCount) => prevCount -1 )}>-</button>
    <h1>{counter}</h1>
        <button onClick={() => setCounter((prevCount) => prevCount +1 )}>+</button>
    </div>
  );
}

export default App;
