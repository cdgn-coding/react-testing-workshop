import React from 'react';
import { FaStar } from 'react-icons/fa';

const StarsRating = ({ rate, count }: { rate: number, count: number }) => {
    const roundRate = Math.round(rate);
    const filledStars = Array(roundRate).fill(0);
    const nonFilledStars = Array(5 - roundRate).fill(0);
    return (
        <div className="flex flex-row" data-testid="product-stars-rating">
            {filledStars.map((v, key) => <FaStar className="text-yellow-400" key={key} />)}
            {nonFilledStars.map((v, key) => <FaStar className="text-gray-200" key={key} />)}
            <span className="text-sm text-gray-600 align-middle ml-2">{count} calificaciones</span>
        </div>
    )
}

export default StarsRating;