import React from 'react';
import StarsRating from './StarsRating'

const ProductDetails = ({ product }) => {
    return (
        <section className="px-4">
            <h1 className="text-2xl" data-testid="product-title">{product?.title}</h1>
            <p data-testid="product-description">{product?.description}</p>
            <StarsRating rate={product?.rating?.rate} count={product?.rating?.count} />
        </section>
    )
}

export default ProductDetails;