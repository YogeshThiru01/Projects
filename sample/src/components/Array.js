import React, { useState } from 'react';
import { UserConsumer } from './Context';

function Array() {
    const [name, setName] = useState({ pname: '', category: '' })
    
    return (
        <div>
            
                <span>Search by item:</span>
                <input type='text' value={name.pname} onChange={e => setName({ ...name, pname: e.target.value })} />
                <br /><br />
                <span>Search by category:</span>
            <input type='text' value={name.category} onChange={e => setName({ ...name, category: e.target.value })} />
            <UserConsumer>
                {(username) => {
                        return <h4>Hi {username}, you ordered <b>{name.pname}</b> belongs to <b>{name.category}</b> category!</h4>   
                    }}
                
            </UserConsumer>
        </div>
    )

}

export default Array