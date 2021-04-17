import React, { useState } from 'react';

function PrevState() {
    const intialCount = 0;
    const [count, setCount] = useState(intialCount)
    
    return (
        <div>
            <span id='shawarma'>🌯</span>
            <p><span class="w3-badge w3-large w3-padding w3-green">{count}</span></p>
            <button onClick={() => setCount(prevCount=>prevCount + 1)}>&#10009;</button>
            <button onClick={() => setCount(intialCount)}>Reset Item</button>
            <button onClick={() => setCount(prevCount=>prevCount - 1)}>&#9866;</button>
        </div>
    )

}

export default PrevState