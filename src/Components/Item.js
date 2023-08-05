import React from'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import { NewReviewForm } from './NewReviewForm';

function Item(props)  {
    //console.log('item component')
    //console.log(props)
    const { item, updateItem } = props;
    
    const deleteReview = (reviewId) => {
        const updatedItem = {
            ...item,
            reviews: item.reviews.filter((review) => review !== reviewId)
        };
        updateItem(updatedItem);
    }

    const addNewReview = (review) => updateItem({...item, reviews: [...item.reviews, review]});

    const reviews = () => (
        <ul>
            {item.reviews.map((review, index) => (
                <li key={index}>
                    <label>{review}</label>
                    <button onClick={(e) => deleteReview(review)}>Delete Review</button>
                </li>
            ))}
        </ul>
    );

    return item == undefined ? <h1>404 Item not found</h1> : (
        <div>
            <Card>
                <Card.Header>{item.name}</Card.Header>
                <Card.Body>
                    <Card.Subtitle>{item.price}</Card.Subtitle>
                    
                    {
                        reviews({ reviews, itemId: item.id, deleteReview})
                    }
                    
                </Card.Body>
                <Card.Footer>
                    <NewReviewForm addNewReview={addNewReview}/>
                </Card.Footer>
            </Card>
        </div>
    );

}

export default Item;
