import React, { useState } from 'react';

export const NewReviewForm = (props) => {
    const [review, setReview] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        if (review) {
            props.addNewReview(review)
            setReview('');
        } else {
            console.log('invalid input')
        }
    };

    return (
        <div>
            <h3>Add new review</h3>
            <form onSubmit={onSubmit}>
                <input type='text' placeholder='type your review' value={review} onChange={(e) => setReview(e.target.value)}/>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )

}