import React from 'react';
import { Hindi } from '../Data/Hindi';

function Mobile() {
    return (
        <div className='move'>
            {Hindi.map((item) => (
                <div key={item.id}>
                    <h2>{item.title}</h2>
                    <img src={item.image} alt=""  style={{height:"300px", width:"300px"}}/>
                </div>
            ))}
        </div>
    );
}

export default Mobile;