import { useState } from "react";

const Greetings = () => {
    const [text, setText] = useState(false);
    
    const toggleTextHandler = () => {
        setText(true);
    } 
    
    return (
        <div>
            <h1>Welcome User</h1>
            {!text && <p>You are logged in.</p>}
            {text && <p>Text Changed.</p>}
            <button onClick={toggleTextHandler}>Toggle Text</button>
        </div>
    );
}

export default Greetings;