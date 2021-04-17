import React, { useState } from 'react';

function HookCounter() {

    const [count,setCount]=useState(0)

    return (
        <div>
            <span id='sandwich'>🌮</span>
            <p><span class="w3-badge w3-large w3-padding w3-green">{count}</span></p>
            <button onClick={()=>setCount(count+1)}>Add Item</button>
        </div>
    )
}

export default HookCounter