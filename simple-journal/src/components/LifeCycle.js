import React, { useEffect, useState } from "react";

const LifeCycle = () => {
    const [count, setCount] = useState(0);
    const [text, setText] = useState("");

    useEffect(() => { console.log("Mount!"); }, []);
    useEffect(() => { console.log("Update!"); }, []);

    useEffect( () => {
        alert("Count is over 5. It is reset to 1.");
        setCount(1);
    }, [count]);

    useEffect( () => {
        console.log('text is update : ' + text);
    }, [text]);

    return (
        <div>
            <div>
                {count}
                <button onClick={ () => setCount(count + 1)}>Count Up</button>
            </div>
            <div>
                <input type="text" value={text} onClick={ (e) => setText(e.target.value) } />
            </div>
        </div>
    );
};

export default LifeCycle;