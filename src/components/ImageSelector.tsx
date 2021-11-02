import Image from 'next/image';
import React from 'react';

const ImageSelector = ({ images, title }) => {
    const [selectedImage, selectImage] = React.useState(images[0]);
    return <div className="flex flex-row">
        <div className="w-2/12 flex-column">
            {images.map((image, index) => (
                <Image
                key={index}
                src={image}
                alt={title}
                width={100}
                height={100}
                layout="responsive"
                />
            ))}
        </div>
        <div className="w-10/12 flex-grow">
            <Image
                src={selectedImage}
                alt={title}
                width={100}
                height={100}
                layout="responsive"
                data-testid="product-image"
            />
        </div>
    </div>;
}

export default ImageSelector;