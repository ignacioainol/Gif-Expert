
import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Futurama']);

    return (
        <div className="allContent">
            <h2>Gif Expert App</h2>
            <h4>Search some Gif and press Enter</h4>
            <AddCategory setCategories={setCategories} />
            <hr />

            <ol>
                {
                    categories.map((category) => (
                        <GifGrid key={category} category={category} />
                    ))
                }
            </ol>
        </div>
    )
}

export default GifExpertApp



