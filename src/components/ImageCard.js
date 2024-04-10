import React from 'react'

const ImageCard = ({ imageUrl, altText, onClick }) => {
  return (
    <div
      className="shadow-lg rounded-lg overflow-hidden relative w-full h-[500px] md:h-[300px] cursor-pointer"
      onClick={onClick}
    >
      <img
        src={imageUrl}
        alt={altText}
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
    </div>
  );
};

export default ImageCard