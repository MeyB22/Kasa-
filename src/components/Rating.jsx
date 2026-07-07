import React from 'react';

const Rating = ({rating}) => {
    const stars = [1, 2, 3, 4, 5];
    const ratingNum = parseInt(rating);

    return (
        <div className="rating">
            {stars.map((star) => (
                <svg
                    key={star}
                    className={star <= ratingNum ? "star star--active" : "star"}
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/> 
                </svg>
            ))}
        </div>
    );
};

export default Rating;
