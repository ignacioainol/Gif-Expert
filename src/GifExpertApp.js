
import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch', 'Futurama', 'Simpsons']);

    // const handleAdd = () => {
    //     setCategories([...categories, 'otra']);
    // }

    return (
        <div>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr />

            <ol>
                {
                    categories.map((category) => {
                        return <li key={category}>{category}</li>
                    })
                }
            </ol>
        </div>
    )
}

export default GifExpertApp



