import React from'react';
import { NewReviewForm } from './NewReviewForm';

function Item(props)  {
    console.log('item component')
    console.log(props)
    const { item, updateItem } = props;
    
    const deleteReview = (reviewId) => {
        const updatedItem = {
            ...item,
            reviews: item.reviews.filter((review) => review.id !== reviewId)
        };
        updateItem(updatedItem);
    }

    const addNewReview = (review) => updateItem({...item, reviews: [...item.reviews, review]});

    const reviews = () => (
        <ul>
            {item.reviews.map((review, index) => (
                <li key={index}>
                    <label>{review}</label>
                    <button onClick={(e) => deleteReview(review.id)}>Delete Review</button>
                </li>
            ))}
        </ul>
    );

    return (
        <div>
            <h1>{item.name}</h1>
            <h4>{item.price}</h4>
            {
                reviews({ reviews, itemId: item.id, deleteReview})
            }
            <NewReviewForm />
        </div>
    )

}

export default Item;
