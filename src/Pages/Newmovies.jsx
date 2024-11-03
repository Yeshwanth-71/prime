import React from 'react';
import { moviesData } from '../Data/Movies';

function Mobile() {
    return (
        <div>
            {moviesData.map((item) => (
                <div key={item.id}>
                    <h2>{item.title}</h2>
                    <p>ID: {item.id}</p>  {/* Display the id */}
                    <p>Description: {item.description}</p>
                    <img src={item.image} alt=""  style={{height:"500px", width:"500px"}}/>
                </div>
            ))}
        </div>
    );
}

export default Mobile;