import React from 'react';

export default function GalleryComponent() {
  const images = [
    { src: 'bg.jpg', size: 'col-span-2 row-span-1' },
    { src: 'bg2.jpg', size: 'col-span-1 row-span-2' },
    { src: 'bg.jpg', size: 'col-span-1 row-span-1' },
    { src: 'bg3.jpg', size: 'col-span-2 row-span-2' },
    { src: 'bg2.jpg', size: 'col-span-1 row-span-1' },
  ];

  return (
    <div className="grid grid-cols-3 grid-rows-3 gap-4 p-4">
      {images.map((image, index) => (
        <div key={index} className={`overflow-hidden rounded-lg shadow-lg ${image.size}`}>
          <img
            src={image.src}
            alt={`Gallery ${index + 1}`}
            className="w-full h-full object-cover transform transition duration-300 hover:scale-110 hover:opacity-80"
          />
        </div>
      ))}
    </div>
  );
}