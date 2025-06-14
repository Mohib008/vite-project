import React from 'react'
import { useState } from 'react';
import MoviesList from './moviesList';




function ListBox() {
    
    const [isOpen1, setIsOpen1] = useState(true);
    return (
        <div className="box">
            <button
                className="btn-toggle"
                onClick={() => setIsOpen1((open) => !open)}
            >
                {isOpen1 ? "–" : "+"}
            </button>
            {isOpen1 && <MoviesList />}
        </div>
    );
}

export default ListBox;