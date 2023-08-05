import React, { useState } from 'react';

export const ItemForm = (props) => {
    
    const [name, setName] = useState('');
    const [price, setPrice] = useState('')

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(name);
        console.log(price);
        const newItem = {
            'name': name,
            'price': price
        }
        props.createItem(newItem)
        // if (item) {
        //     props.addNewItem(item)
        //     setItem('');
        // } else {
        //     console.log('invalid input')
        // }
    };

    return (
        <div>
            <h3>Add new item</h3>
            <form onSubmit={onSubmit}>
                <input type='text' placeholder='item name'  onChange={(e) => setName(e.target.value)}/>
                <input type='number' placeholder='price'  onChange={(e) => setPrice(e.target.value)}/>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )

}